import React, { useState } from 'react'
import { Route, Routes ,Navigate} from "react-router-dom"
import { Navbar, Contact, Contacts, AddContact, EditContact, ViewContact } from './components'

const App = () => {
  const [loading, setLoading] = useState(false)
  const[getContacts, setContacts] = useState([])

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route
          path="/contacts"
          element={<Contacts contacts={getContacts} loading={loading} />}
        />
        <Route path="/contacts/add" element={<AddContact />} />
        <Route path="/contacts/:contactId" element={<Contact />} />
        <Route path="/contacts/edit/:contactId" element={<EditContact />} />
      </Routes>
    </div>
  )
}

export default App
