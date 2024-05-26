import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu'
import Navigation from '../Navigation/Navigation';
import css from './AppBar.module.css';

export default function AppBar() {
    return (
        <div className={css.container}>
            <Navigation />
            <AuthNav />
            <UserMenu />
        </div>
    )
}