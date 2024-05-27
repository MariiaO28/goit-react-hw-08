import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdPerson } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from '../../redux/contacts/operations';
import EditFormModal from '../EditFormModal/EditFormModal'; 
import css from './Contact.module.css';

export default function Contact({ contact }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(contact.id));

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    
    return (
        <div className={css.card}>
            <ul className={css.list}>
                <li className={css.data}>
                    <MdPerson className="contact-icon" size="24"/> 
                    <span className={css.text}>{contact.name}</span>
                </li>
                <li className={css.data}>
                    <FaPhoneAlt className="phone-icon" size="22"/> 
                    <span className={css.text}>{contact.number}</span>
                </li>
            </ul>
            <button
                className={css.button}
                onClick={handleDelete}>
                Delete
            </button>
            <button
                className={css.edit}
                onClick={openModal}>
                Edit
            </button>

            <EditFormModal
                contact={contact} 
                modalIsOpen={modalIsOpen} 
                closeModal={closeModal} 
            />
        </div>
    )
}

 