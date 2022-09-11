import {useState, useEffect} from 'react';

import List from './List/listIndex';
import Form from './Form/formIndex';

import './style.css';

const initialStateValues = [ 
    {
        fullname:'Sadık Çavdar',
        phone_number:'05** *** ** **'
    },
    {
        fullname:'NAME SURNAME',
        phone_number:'05** *** ** **'
    },
    {
        fullname:'NAME SURNAME',
        phone_number:'05** *** ** **'
    },
    {
        fullname:'NAME SURNAME',
        phone_number:'05** *** ** **'
    },
    {
        fullname:'NAME SURNAME',
        phone_number:'05** *** ** **'
    },
    {
        fullname:'NAME SURNAME',
        phone_number:'05** *** ** **'
    },
    
]

function Contacts(){

    const storage = JSON.parse(localStorage.getItem("Contacts"))   

    const [contacts, setContacts] = useState(storage, initialStateValues); //Remove and run storage to use initial values then add storage :)

    localStorage.setItem("Contacts", JSON.stringify(contacts))

    useEffect (() => {
        console.log(contacts)  
    },[contacts]);

    const removeItem = i => {
        const clear = contacts.filter((item, idx) => idx !== i)
        setContacts(clear)
      }
    
    return(
        <div id="container">

        <h1 className='headerText'>Contacts</h1>

        <List contacts={contacts} removeItem={removeItem}/>
        <Form addContact={setContacts} contacts={contacts}/>
      
        </div>
    )
}


export default Contacts;