import Contact from '../contact/Contact.jsx';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import {selectFilteredContacts} from "../../redux/contactsSlice.js";

export default function ContactList () {

    const visibleContacts = useSelector(selectFilteredContacts);
      /*console.log('contacts', contacts);
      console.log('filter', filter);
      console.log('visibleContacts', visibleContacts);*/

 return (
    <ul className={css.listContact}>
        {visibleContacts.map(contact => (
            <li className={css.itemContact} key={contact.id}>
                <Contact contact={contact}/>
            </li>
        ))}
    </ul>
 );
}