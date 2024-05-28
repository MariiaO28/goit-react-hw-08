import { Link } from 'react-router-dom';
import img from '../../components/img/Phonebook.png'
import css from './HomePage.module.css';

export default function HomePage() {
    return (
        <div className={css.container}>
            <h3 className={css.text}>This web application will help you to manage your contacts. Please <Link to='/login' className={css.link}>login</Link> to start adding contacts in your personal phonebook!</h3>
            <img src={img} alt='phonebook' className={css.picture}/>
        </div>
    )
}