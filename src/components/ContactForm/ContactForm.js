import { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { add } from '../../redux/actions';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

function ContactForm() {

    const [ name, setName ] = useState('');
    const [number, setNumber] = useState('');
    
    const users = useSelector(state => state.items);
    const dispatch = useDispatch();
    
    const handleInputChange = e => {
        switch (e.currentTarget.name) {
            case "name": return setName(e.currentTarget.value);
            case "number": return setNumber(e.currentTarget.value);
            default: return "";
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        const newUser = { id: nanoid(5), name, number };
        const newUserNormalized = name.toLowerCase();
        const matchedName = users.find(user => user.name.toLowerCase() === newUserNormalized);
        matchedName ? alert(`${name} is already in contacts.`) : dispatch(add(newUser));
        formReset();
    }

    const formReset = () => {
        setName("");
        setNumber("");
        return
    }
    
    return (
        <form onSubmit={handleSubmit} className={s.form}>
                    
            <label className={s.label}>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleInputChange}
                    className={s.input}
                />
            </label>

            <label className={s.label}>
                Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleInputChange}
                    className={s.input}
                />
            </label>

            <button className={s.btn}>Add contact</button>
                    
        </form>   
    );   
};

export default ContactForm;