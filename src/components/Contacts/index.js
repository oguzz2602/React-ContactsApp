import React from 'react'
import "./style.css";
import List from './List'
import Form from './Form'
import { useState, useEffect } from 'react';
function Contacts() {
    const[contacts, setContacts]=useState([
        {
            fullname: "Oğuzhan",
            phone_number:"123123"
        },{
            fullname: "Nuri",
            phone_number:"456456"
        },{
            fullname: "Mehmet",
            phone_number:"789789",
        },
    ]);

    useEffect(()=>{
        console.log(contacts);

    },[contacts]);
  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
