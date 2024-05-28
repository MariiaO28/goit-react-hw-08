import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
    return (
        <div className = {css.container}> 
            <p>Page is not found! Sorry!</p>
               <p> Please visit our <Link to='/' className={css.link}>home page</Link>!</p>  
        </div>
    )
}