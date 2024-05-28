import { Formik, Form, Field } from "formik";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import * as Yup from "yup";
import css from './ContactForm.module.css';

export default function ContactForm() {
    
    const dispatch = useDispatch();

    const initialValues = {
        id:"",
        name: "",
        number: "",
    }

    const handleSubmit = (value, actions) => {
        dispatch(addContact({ name: value.name, number: value.number })
        )
            .unwrap()
            .then(() => {
                toast.success(`You have succesfuly created ${value.name} contact!`);
            })
            .catch(() => {
                toast.error('An error occured. Please try again.')
            });
        actions.resetForm();
    }

    const ContactSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required").trim(),
        number: Yup.string().matches(/^[0-9+-]*$/, "Invalid phone number!").min(3, "Too Short!").max(50, "Too Long!").required("Required").trim(),
    })

    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={ContactSchema}
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
                                    id="outlined-name"
                                    label="Name"
                                    variant="outlined"
                                    error={touched.name && Boolean(errors.name)}
                                    helperText={touched.name && errors.name}
                                />
                            )}
                        </Field>
                        <Field name="number">
                            {({ field }) => (
                                <TextField
                                    {...field}
                                    id="outlined-number"
                                    label="Phone number"
                                    type="tel"
                                    variant="outlined"
                                    error={touched.number && Boolean(errors.number)}
                                    helperText={touched.number && errors.number}
                                />
                            )}
                        </Field>
                    </Box>

                    <button className={css.button} type="submit">Add contact</button>
                </Form>
            )}
        </Formik>
    )
}
