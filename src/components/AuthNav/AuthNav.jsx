import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from './AuthNav.module.css'

const activeClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
}

export default function AuthNav() {
    return (
        <div className={css.authnav}>
            <NavLink to='/register' className={activeClass}>Registration</NavLink>
            <NavLink to='/login' className={activeClass}>Login</NavLink>
        </div>
    )
}