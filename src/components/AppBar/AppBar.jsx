import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu'
import Navigation from '../Navigation/Navigation';
import css from './AppBar.module.css';

export default function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <div className={css.container}>
            <Navigation />
            {!isLoggedIn ?
                <AuthNav />
                :
                <UserMenu />}
        </div>
    )
}