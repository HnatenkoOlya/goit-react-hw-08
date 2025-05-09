import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { useId } from "react";
import { register } from '../../redux/auth/operations';

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
        <Form>
        <label htmlFor={nameFieldId}>Username</label>
        <Field type="text" name="username" />
        <label htmlFor={emailFieldId}>Email</label>
        <Field type="email" name="email" />
        <label htmlFor={passwordFieldId}>Password</label>
        <Field type="password" name="password" />
        <button type="submit">Register</button>
        </Form>
      </Formik>
    );
  };