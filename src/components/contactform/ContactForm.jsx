import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {addContact} from "../../redux/contacts/operations";

export default function ContactForm () {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);

    const contactSchema = Yup.object().shape({
        name:Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number:Yup.string().min(3, "Too Short!").max(80, "Too Long!").required("Required"),
    });

    const handleSubmit = (values, actions) => {
        const isExist = contacts.some(contact => contact.name.toLowerCase() === values.name.toLowerCase());
        if (isExist) {
        alert('This contact already exists!');
        actions.resetForm();
        return; 
       }
        dispatch(addContact({
            name: values.name,
            number: values.number,
          }));
          actions.resetForm();
        };
        
        return (
            <Formik initialValues={{name:"", number:""}} onSubmit={handleSubmit} validationSchema={contactSchema}>
                <Form className={css.form}>
                 <label className={css.formLabel}>Name</label>   
                 <Field type="text" name="name" className={css.formField}/>
                 <ErrorMessage name="name" component="span" className={css.formError}/>
                 <label className={css.formLabel}>Number</label>
                 <Field type="tel" name="number" className={css.formField}/>
                 <ErrorMessage name="number" component="span" className={css.formError}/>
                <button type="submit" className={css.formBtn}>Add Contact</button>
                </Form>
            </Formik>
        )
    }
