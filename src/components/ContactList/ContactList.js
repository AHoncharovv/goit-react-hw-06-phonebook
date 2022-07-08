import s from './ContactList.module.css';
import { useSelector, useDispatch } from "react-redux/es/exports";
import { remove } from '../../redux/actions';

function ContactList() {
    
    const users = useSelector(state => state.items);
    const filteredValue = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const handleDeleteUser = event => {
        const deleteUserId = event.currentTarget.value;
        dispatch(remove(deleteUserId));
    }

    const normalizedFilter = filteredValue.toLowerCase();
    const visibleContacts = users.filter(user => user.name.toLowerCase().includes(normalizedFilter));
    
    return (
        <ul className={s.list}>
            {visibleContacts.map((user) => (
                <li key={user.id} className={s.item}>
                    <span className={s.text}>{user.name} : {user.number}</span>
                    <button type="button" value={user.id} onClick={handleDeleteUser} className={s.btn}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default ContactList;