import { useSelector, useDispatch } from "react-redux/es/exports";
import { nanoid } from 'nanoid';
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter/Filter";
import { add, remove, filter } from '../components/redux/actions';

function Phonebook() {

  const users = useSelector(state => state.items);
  const filteredValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handlerSubmitForm = (name, number) => {
    const newUser = { id: nanoid(5), name, number };
    const newUserNormalized = name.toLowerCase();
    const matchedName = users.find(user => user.name.toLowerCase() === newUserNormalized);
    matchedName ? alert(`${name} is already in contacts.`) : dispatch(add(newUser));
  }

  const handlerFilter = event => {
    const filtered = event.currentTarget.value;
    dispatch(filter(filtered));
  }

  const handleDeleteUser = event => {
    const deleteUserId = event.currentTarget.value;
    dispatch(remove(deleteUserId));
  }
  
  const normalizedFilter = filteredValue.toLowerCase();
  const visibleContacts = users.filter(user => user.name.toLowerCase().includes(normalizedFilter));
   
  return ( 
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101'
      }}
    >
      
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handlerSubmitForm} />
      <h2>Contacts</h2>
      <Filter value={filteredValue} filterChange={handlerFilter} />
      <ContactList users={visibleContacts} onClick={handleDeleteUser} />
    </div>
  ); 
};

export default Phonebook;