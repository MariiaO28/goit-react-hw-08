import { Formik, Form, Field, ErrorMessage } from "formik";
import Modal from 'react-modal';
import { useId } from "react";
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { editContact } from '../../redux/contacts/operations';
import * as Yup from "yup";
import css from './EditFormModal.module.css';
Modal.setAppElement('#root');

export default function EditForm({contact, modalIsOpen, closeModal}) {

    const dispatch = useDispatch();

    const nameFieldId = useId();
    const numberFieldId = useId();

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
            <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={ContactSchema}
            >
                <Form className={css.form}>
                    <label className={css.label} htmlFor={nameFieldId}>Name </label>
                    <Field className={css.field} type="text" name="name" id={nameFieldId}></Field>
                    <ErrorMessage className={css.error} name="name" component="span"></ErrorMessage>
                    
                    <label className={css.label} htmlFor={numberFieldId}>Number </label>
                    <Field className={css.field} type="tel" name="number" id={numberFieldId}></Field>
                    <ErrorMessage className={css.error} name="number" component="span"></ErrorMessage>
                    

                    <button className={css.button} type="submit" >Update</button>
                    <button onClick={closeModal} className={css.closeButton}>Close</button>

                </Form>
            </Formik>
        </Modal>
    )

}