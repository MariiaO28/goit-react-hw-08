import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from 'react-redux';
import {login} from '../../redux/auth/operations'
import * as Yup from "yup";
import css from './LoginForm.module.css';

export default function LoginForm() {

    const dispatch = useDispatch();

    const emailFieldId = useId();
    const passwordFieldId = useId();

    const initialValues = {
        email: "",
        password: "",
    }

    const handleSubmit = (value, actions) => {
    dispatch(
      login({
        email: value.email,
        password: value.password,
      })
    )
      .unwrap()
      .then(() => {
        console.log('login success');
      })
      .catch(() => {
        console.log('login error');
            });
        actions.resetForm();
    };
    
    const LoginUserSchema = Yup.object().shape({
        email: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required").email('Please enter a valid email!').trim(),
        password: Yup.string().min(4, "Too Short!").max(15, "Too Long!").required("Required").trim(),
    })

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={LoginUserSchema}
        > 
            <Form className={css.form}>
                <label className={css.label} htmlFor={emailFieldId}>Email</label>
                <Field className={css.field} type="email" name="email" id={emailFieldId}></Field>
                    <ErrorMessage className={css.error} name="email" component="span"></ErrorMessage>

                <label className={css.label} htmlFor={passwordFieldId}>Password</label>
                <Field className={css.field} type="password" name="password" id={passwordFieldId} ></Field>
                    <ErrorMessage className={css.error} name="password" component="span"></ErrorMessage>
                <button type="submit" className={css.button}>Log In</button>
            </Form>
        </Formik>
    )
}
