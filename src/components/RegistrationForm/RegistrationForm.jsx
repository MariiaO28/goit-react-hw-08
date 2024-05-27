import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import * as Yup from "yup";
import css from './RegistrationForm.module.css';

export default function RegistrationForm() {

    const dispatch = useDispatch();
    
    const usernameFieldId = useId();
    const emailFieldId = useId();
    const passwordFieldId = useId();

    const initialValues = {
        name:"",
        email: "",
        password: "",
    }

    const handleSubmit = (value, actions) => {
      console.log('Form values:', value); 
    dispatch(
      register({
        name: value.name,
        email: value.email,
        password: value.password,
      })
    );
     actions.resetForm();
  };
    
    const RegistrUserSchema = Yup.object().shape({
        name: Yup.string().min(4, "Too Short!").max(15, "Too Long!").required("Required").trim(),
        email: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required").email('Please enter a valid email!').trim(),
        password: Yup.string().min(4, "Too Short!").max(15, "Too Long!").required("Required").trim(),
    })

    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={RegistrUserSchema}
        >
            <Form className={css.form}>
                <label className={css.label} htmlFor={usernameFieldId}>Username</label>
                <Field className={css.field} id={usernameFieldId} type="text" name="name"></Field>
                <ErrorMessage className={css.error} name="name" component="span"></ErrorMessage>

                <label className={css.label} htmlFor={emailFieldId}>Email</label>
                <Field className={css.field} id={emailFieldId} type="email" name="email"></Field>
                <ErrorMessage className={css.error} name="email" component="span"></ErrorMessage>

                <label className={css.label} htmlFor={passwordFieldId}>Password</label>
                <Field className={css.field} id={passwordFieldId} type="password" name="password" ></Field>
                <ErrorMessage className={css.error} name="password" component="span"></ErrorMessage>

                <button type="submit" className={css.button}>Register</button>
            </Form>
         </Formik>
  );
}

