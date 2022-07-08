import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { filter } from '../../redux/actions';
import s from "./Filter.module.css";

function Filter() {

    const filteredValue = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const handlerFilter = event => {
    const filtered = event.currentTarget.value;
    dispatch(filter(filtered));
  }
    
    return (
        <label className={s.label}>
            Find contacts by name
            <input value={filteredValue} onChange={handlerFilter} className={s.input}></input>
        </label>
    )
}

export default Filter;