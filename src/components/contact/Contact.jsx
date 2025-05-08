import css from './Contact.module.css'
import { FaUser } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {deleteContact} from "../../redux/contacts/operation";

export default function Contact  ({contact}) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id))
    }
 return (
    <div className={css.divContact}>
        <div className={css.icon}>
        <p className={css.textContact}><FaUser  className={css.iconContact} size="19px"/>{contact.name}</p>
        <p className={css.textContact}><FaPhoneVolume  className={css.iconContact} size="19px"/>{contact.number}</p>
        </div>
        <button className={css.btnContact} onClick={handleDelete}>Delete</button>
    </div>
 );
}