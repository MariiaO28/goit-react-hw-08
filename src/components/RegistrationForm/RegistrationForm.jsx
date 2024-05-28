import { Formik, Form, Field } from "formik";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import * as Yup from "yup";
import css from './RegistrationForm.module.css';

export default function RegistrationForm() {

    const initialValues = {
        name:"",
        email: "",
        password: "",
    }

  const dispatch = useDispatch();
  
    const handleSubmit = (values, actions) => {
      const registerPromise = dispatch(register(values)).unwrap();

      toast.promise(
        registerPromise, {
        loading: 'Registering...',
        success: `Registration successful! Welcome ${values.name}!`,
        error: (error) => `Registration failed: ${error.message}`,
      }
      );

       registerPromise
        .then(() => { })
        .catch(() => { })
      
      actions.resetForm();
  };
    
    const RegistrUserSchema = Yup.object().shape({
        name: Yup.string().min(4, "Too Short!").max(15, "Too Long!").required("Required").trim(),
        email: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required").email('Please enter a valid email!').trim(),
        password: Yup.string().min(7, "Too Short!").max(15, "Too Long!").required("Required").trim(),
    })

    return (
      <Formik 
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={RegistrUserSchema}
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
                         <Field name="name">
                            {({ field }) => (
                                <TextField
                                    {...field}
                                    id="outlined-username"
                                    label="Username"
                                    variant="outlined"
                                    error={touched.name && Boolean(errors.name)}
                                    helperText={touched.name && errors.name}
                                />
                            )}
                        </Field>
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
                    <button type="submit" className={css.button}>Register</button>
                </Form>
            )}
        </Formik>
  );
}

