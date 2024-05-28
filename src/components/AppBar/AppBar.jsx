import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { RiContactsBook3Fill } from "react-icons/ri";
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu'
import Navigation from '../Navigation/Navigation';
import css from './AppBar.module.css';

export default function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <div className={css.bar}>
            <div className={css.phonebook}>
                <h1 className={css.header}>Phonebook</h1>
                <RiContactsBook3Fill className={css.icon} size='36' />
            </div>
            <div className={css.container}>
            <Navigation />
            {!isLoggedIn ?
                <AuthNav />
                :
                <UserMenu />}
            </div>        
        </div>
    )
}