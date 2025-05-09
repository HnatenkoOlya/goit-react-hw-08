import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { useId } from "react";
import { logIn } from '../../redux/auth/operations';

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
        dispatch(logIn(values))
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
        <Form>
        <label htmlFor={emailFieldId}>Email</label>
        <Field type="email" name="email" />
        <label htmlFor={passwordFieldId}>Password</label>
        <Field type="password" name="password" />
        <button type="submit">Log In</button>
        </Form>
      </Formik>
    );
  };