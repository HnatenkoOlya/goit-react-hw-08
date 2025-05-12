import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { useId } from "react";
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css'

export default function LoginForm () {
    const initialValues = {
        email: "",
        password: ""
      };
      const emailFieldId = useId();
      const passwordFieldId = useId();
     
      const dispatch = useDispatch();

      const handleSubmit = (values, { resetForm }) => {
        console.log(values)
        dispatch(login(values))
          .unwrap()
          .then(() => {
            console.log('login success');
            resetForm();
          })
          .catch(() => {
            console.log('login error');
          });
      };

    return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.formR}>
        <label htmlFor={emailFieldId} className={css.labelR}>Email</label>
        <Field type="email" name="email" className={css.fieldR} />
        <label htmlFor={passwordFieldId} className={css.labelR} >Password</label>
        <Field type="password" name="password" className={css.fieldR} />
        <button type="submit" className={css.buttonR}>Log In</button>
        </Form>
      </Formik>
    );
  };