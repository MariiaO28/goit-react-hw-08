import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from "clsx";
import css from './Navigation.module.css'

const activeClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
}

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav className={css.navigation}>
            <NavLink to='/' className={activeClass}>Home</NavLink>
            {isLoggedIn && 
           (<NavLink to='/contacts' className={activeClass}>Contacts</NavLink>)}
        </nav>
    )
}