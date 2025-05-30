import { useDispatch,  useSelector } from "react-redux";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

//import { selectLoading, selectError} from '../redux/contacts/operation.js';
//import {fetchContacts} from '../redux/contacts/operations.js';
import {refreshUser} from '../redux/auth/operations.js';
import { PrivateRoute } from '../components/PrivateRoute.jsx';
import { RestrictedRoute } from './RestrictedRoute.jsx';

import Layout from './Layout.jsx'
import './App.css';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import ("../pages/homePage/HomePage.jsx"));
const ContactsPage = lazy (() => import ("../pages/contactsPage/ContactsPage.jsx"));
const LoginPage = lazy(() => import ("../pages/loginPage/LoginPage.jsx"));
const  RegistrationPage = lazy(() => import ("../pages/registrationPage/RegistrationPage.jsx"));
const NotFoundPage = lazy(() => import ("../pages/NotFoundPage.jsx"));

export default function App () {
  const dispatch = useDispatch();
 // const loading = useSelector(selectLoading);
 // const error = useSelector(selectError);
  //const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

const isRefreshing = useSelector(state => state.auth.isRefreshing);

   useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Refreshing user...</div>; // або спінер, або інший компонент
  }

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}> 
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage/>}></Route>
        <Route path="/register" element={<RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}/>}></Route>
        <Route path="/login" element={<RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}/>}></Route>
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
        </Route>
      </Routes>
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
   </div>
  );
}
