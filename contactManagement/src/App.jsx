import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes, Navigate } from "react-router-dom"
import { Navbar, Contact, Contacts, AddContact, EditContact, ViewContact } from './components'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [getContacts, setContacts] = useState([])
  const [getGroups, setGroups] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const {data : contactsData} = await axios.get("http://localhost:9000/contacts")
        const {data : groupsData} = await axios.get("http://localhost:9000/groups")
        setContacts(contactsData)
        setGroups(groupsData)
        setLoading(false)
      } catch (err) {
        console.log(err.message)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

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
