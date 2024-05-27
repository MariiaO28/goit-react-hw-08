import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { refreshUser } from '../../redux/auth/operations.js';
import { selectIsRefreshing } from '../../redux/auth/selectors.js'
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Layout/Layout';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute.jsx';
import PrivateRoute from '../PrivateRoute/PrivateRoute.jsx';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage.jsx'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage.jsx'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage.jsx'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage.jsx'));
import './App.module.css';


export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  return (
    isRefreshing ?
    '' :
    (<Layout>
      <Routes>
        <Route path='/' element ={<HomePage/>}></Route>
        <Route path='/register' element ={<RestrictedRoute component={ <RegistrationPage /> } redirectTo='/'/>}></Route>
        <Route path='/login' element={<RestrictedRoute component={<LoginPage/>}  redirectTo='/contacts' />}></Route>
        <Route path='/contacts' element={<PrivateRoute component={<ContactsPage />} />}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
        </Routes>
      </Layout>)
    
  )
}
