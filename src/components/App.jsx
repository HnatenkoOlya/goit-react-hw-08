import ContactForm from './contactform/ContactForm.jsx';
import ContactList from './contactlist/ContactList.jsx';
import SearchBox from './searchbox/SearchBox.jsx';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {fetchContacts} from '../redux/contactsOps.js';
import { selectLoading, selectError} from '../redux/contactsSlice.js'
import './App.css'

export default function App () {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      {loading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <ContactForm/>
      <SearchBox/>
      <ContactList/>
   </div>

  )
}
