import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import { refreshUser } from '../../redux/auth/operations.js';
import Layout from '../Layout/Layout';
const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage.jsx'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage.jsx'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage.jsx'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage.jsx'));
import './App.module.css';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element ={<HomePage/>}></Route>
        <Route path='/register' element ={<RegistrationPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/contacts' element={<ContactsPage />}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
    </Layout>
  )
}
