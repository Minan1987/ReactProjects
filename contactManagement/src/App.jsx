import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import { Navbar, Contact, Contacts, AddContact, EditContact, ViewContact } from './components'

const App = () => {
  const [loading, setLoading] = useState(false)
  const[getContacts, setContacts] = useState([])

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/contacts' element={<Contacts loading = {loading} contacts={getContacts}/>} />
      </Routes>
    </div>
  )
}

export default App
