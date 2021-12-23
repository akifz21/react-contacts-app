import { useEffect, useState } from 'react';
import './App.css';
import Contacts from './components/contacts';


function App() {
  return(
    <div className='App'>
     
     <div>
     <h1>Contacts App</h1>
       </div> 
      <Contacts/>
    </div>

  )

}

export default App;
