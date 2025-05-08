import css from './SearchBox.module.css'
import { useSelector,useDispatch } from "react-redux";
import {filterChange} from '../../redux/filtersSlice'

export default function SearchBox () {
    const filter = useSelector(state=>state.filters.name);
    const dispatch = useDispatch();
    const handleFilterChange = (evt) => {
        dispatch(filterChange(evt.target.value));
    } 
    return (
        <div>
            <p className={css.textSearch}>Find contacts by name</p>
            <input className={css.inputSearch} type="text" value={filter}   onChange={handleFilterChange}/>
        </div>
    )
}