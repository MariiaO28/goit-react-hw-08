import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { selectLoading, selectError, selectContacts } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import css from './ContactsPage.module.css';

export default function ContactsPage() {

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
    
    return (
        <div className={css.container}>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            {loading && !error && <Loader />}
            {error && <ErrorMessage />}
            {!loading && !error &&
                (contacts.length > 0 ?
                (<ContactList />) :
                (<p>Your phone book is empty, please start adding your contacts!</p>)
      )}
       </div>
    )
}