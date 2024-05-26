import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from './Navigation.module.css'

const activeClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
}

export default function navigation() {
    return (
        <nav className={css.navigation}>
            <NavLink to='/' className={activeClass}>Home</NavLink>
            <NavLink to='/contacts' className={activeClass}>Contacts</NavLink>
        </nav>
    )
}