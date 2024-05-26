import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() { 

    const contacts = useSelector(selectFilteredContacts);
    
    return (
        <ul className={css.list}>
            {contacts.map((contact) => (
                <li className={css.card} key={contact.id}>
                    <Contact contact={contact}/>
                </li>
            ))}
        </ul>
    )
}