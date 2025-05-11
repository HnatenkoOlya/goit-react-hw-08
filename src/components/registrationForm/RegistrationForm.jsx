import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { useId } from "react";
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css'

export default function RegistrationForm () {
    const initialValues = {
        username: "",
        email: "",
        password: ""
      };
      const nameFieldId = useId();
      const emailFieldId = useId();
      const passwordFieldId = useId();
     
      const dispatch = useDispatch();

      const handleSubmit = (values, { resetForm }) => {
        dispatch(
          register({
            name: values.username,
            email: values.email,
            password: values.password,
          })
        );
    
        resetForm();
      };
      
    return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.formR}>
        <label htmlFor={nameFieldId} className={css.labelR}>Username</label>
        <Field type="text" name="username" className={css.fieldR}/>
        <label htmlFor={emailFieldId} className={css.labelR}>Email</label>
        <Field type="email" name="email" className={css.fieldR} />
        <label htmlFor={passwordFieldId} className={css.labelR}>Password</label>
        <Field type="password" name="password" className={css.fieldR} />
        <button type="submit" className={css.buttonR}>Register</button>
        </Form>
      </Formik>
    );
  };