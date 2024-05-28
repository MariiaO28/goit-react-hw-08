import { Formik, Form, Field } from "formik";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations'
import toast from 'react-hot-toast';
import * as Yup from "yup";
import css from './LoginForm.module.css';

export default function LoginForm() {

    const dispatch = useDispatch();

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
        toast.success('You are succesfuly logged in!');
      })
      .catch(() => {
        toast.error('Please check you email or password and try again!')
            });
        actions.resetForm();
    };
    
    const LoginUserSchema = Yup.object().shape({
        email: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required").email('Please enter a valid email!').trim(),
        password: Yup.string().min(7, "Too Short!").max(15, "Too Long!").required("Required").trim(),
    })

    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={LoginUserSchema}
        >
            {({ errors, touched }) => (
                <Form className={css.form}>
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '29ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <Field name="email">
                            {({ field }) => (
                                <TextField
                                    {...field}
                                    id="outlined-email"
                                    label="Email"
                                    variant="outlined"
                                    error={touched.email && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}
                                />
                            )}
                        </Field>
                        <Field name="password">
                            {({ field }) => (
                                <TextField
                                    {...field}
                                    id="outlined-password"
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    error={touched.password && Boolean(errors.password)}
                                    helperText={touched.password && errors.password}
                                />
                            )}
                        </Field>
                    </Box>
                    
                    <button type="submit" className={css.button}>Log In</button>
                </Form>
            )}
        </Formik>
    )
}
