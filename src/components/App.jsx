import ContactForm from './contactform/ContactForm.jsx';
import ContactList from './contactlist/ContactList.jsx';
import SearchBox from './searchbox/SearchBox.jsx';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {fetchContacts} from '../redux/contacts/operation.js';
import { selectLoading, selectError} from '../redux/contacts/operation.js';
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import './App.css';

const HomePage = lazy(() => import ("../pages/homePage/HomePage.jsx"));
const ContactsPage = lazy (() => import ("../pages/contactsPage/ContactsPage.jsx"));
const LoginPage = lazy(() => import ("../pages/loginPage/LoginPage.jsx"));
const  RegistrationPage = lazy(() => import ("../pages/registrationPage/RegistrationPage.jsx"));
const NotFoundPage = lazy(() => import ("../pages/NotFoundPage.jsx"));

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
      <Suspense fallback={<div>Loading...</div>}> 
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/register" element={<RegistrationPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/contacts" element={<ContactsPage/>}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
      </Suspense>
   </div>

  )
}
