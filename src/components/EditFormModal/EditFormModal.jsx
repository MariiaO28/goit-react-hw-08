import { Formik, Form, Field } from "formik";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as Yup from "yup";
import toast from 'react-hot-toast';
import Modal from 'react-modal';
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { editContact } from '../../redux/contacts/operations';
import css from './EditFormModal.module.css';
Modal.setAppElement('#root');

export default function EditForm({contact, modalIsOpen, closeModal}) {

    const dispatch = useDispatch();

    const initialValues = {
        id: contact.id,
        name: contact.name,
        number: contact.number,
    }

    const handleSubmit = (value, actions) => {
    dispatch(
        editContact({
            id: value.id,
            name: value.name,
            number: value.number,
      })
    )
      .unwrap()
      .then(() => {
        toast.success('You have succesfuly updated the contact!');
      })
      .catch(() => {
        toast.error('An error occured. Please try again.')
      });
        
        actions.resetForm();
    };
    
    const ContactSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required").trim(),
        number: Yup.string().matches(/^[0-9+-]*$/, "Invalid phone number!").min(3, "Too Short!").max(50, "Too Long!").required("Required").trim(),
    })

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Edit Contact"
            className={css.modal}
            overlayClassName={css.overlay}
        >
            <button onClick={closeModal} className={css.closeButton}><IoCloseSharp size='16'/></button>
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
                        <Field name="name" className={css.input}>
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

                    <button className={css.button} type="submit" >Update</button>
                </Form>
            )}
        </Formik>
    </Modal>
    )
}