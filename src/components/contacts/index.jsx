import React, { useEffect, useState } from 'react'
import List from './List/List'
import Form from './Form/Form'
import "./style.css"
function Contacts() {
    const [contacts, setContacts] = useState([
        {
          name:"Akif",
          phone_number:"987879"
        },
        {
          name:"Mehmet",
          phone_number:"151561"
        },
        {
            name:"Lorem",
            phone_number:"39658"
        },
        {
            name:"Tyler",
            phone_number:"211213"
        }
      ])
      useEffect(() => {
        console.log(contacts)
    
      }, [contacts])
    
      return (
        <div id='container'>
         <List contacts={contacts}/>
         <Form addContact={setContacts} contacts={contacts} />
        </div>
      );
}

export default Contacts
