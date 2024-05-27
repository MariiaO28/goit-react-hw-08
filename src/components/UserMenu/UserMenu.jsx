// import { useDispatch } from '@reduxjs/toolkit';
// import { logout } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

export default function UserMenu() {

    // const dispatch = useDispatch();

    return (
        <div className={css.container}>
            <p className={css.username}>Welcome, { }</p>
            <button type='button' >Logout</button>
        </div>
    )
}

// onClick= {} 