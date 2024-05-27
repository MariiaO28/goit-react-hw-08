import { selectNameFilter } from '../../redux/filters/selectors';
import {changeFilter} from '../../redux/filters/slice'
import { useSelector, useDispatch } from 'react-redux';
import css from './SearchBox.module.css';

export default function SearchBox() {
    const dispatch = useDispatch()

    const filter = useSelector(selectNameFilter);
    const handleFilter = (event) => dispatch(changeFilter(event.target.value))

    return (
        <div className={css.search}>
            <p className={css.text}>Find contacts by name {' '}
            <span size="24px" role="img" aria-label="Waving hand">
             🔎
            </span>
            </p>
            <input
                className={css.field}
                type="text"
                name="filter"
                value={filter}
                onChange={handleFilter}>
            </input>
        </div>
    )
}