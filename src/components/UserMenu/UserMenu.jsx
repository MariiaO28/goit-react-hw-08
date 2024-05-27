import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';


export default function UserMenu() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    function handleLogout() {
        dispatch(logout());
    }

    return (
        <div className={css.container}>
            <p className={css.username}>Welcome, {user.name}!{' '}
            <span role="img" aria-label="Waving hand">
             👋
            </span>
            </p>
            <button className={css.logout} type='button' onClick= {handleLogout} >Logout</button>
        </div>
    )
}