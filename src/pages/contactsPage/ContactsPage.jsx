import ContactForm from '../../components/contactform/ContactForm.jsx';
import ContactList from '../../components/contactlist/ContactList.jsx';
import SearchBox from '../../components/searchbox/SearchBox.jsx';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectLoading, selectError} from '../../redux/contacts/slice.js';
import {fetchContacts} from '../../redux/contacts/operation.js';

export default function ContactsPage () {
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