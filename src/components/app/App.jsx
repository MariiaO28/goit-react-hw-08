import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { selectLoading, selectError,  selectContacts } from '../../redux/contactsSlice';
import { fetchContacts } from '../../redux/contactsOps';
import css from './App.module.css';

export default function App() {

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
      {loading && !error && <Loader/>}
      {error && <ErrorMessage/>}
      {!loading && !error && (
        contacts.length > 0 ? (
          <ContactList />
        ) : (
          <p>Your phone book is empty, please start adding your contacts!</p>
        )
      )}
    </div>
  )
}