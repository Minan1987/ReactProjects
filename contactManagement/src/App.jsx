import React, { useState, useEffect } from 'react'
import { Route, Routes, Navigate, useNavigate } from "react-router-dom"
import { Navbar, Contact, Contacts, AddContact, EditContact, ViewContact } from './components'
import { createContact, getAllContacts, getAllGroups } from './services/contactServices'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [getContacts, setContacts] = useState([])
  const [getGroups, setGroups] = useState([])
  const [getContact, setContact] = useState({
    fullname: "",
    photo: "",
    mobile: "",
    email: "",
    job: "",
    group: ""
  })
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data: contactsData } = await getAllContacts()
        const { data: groupsData } = await getAllGroups()
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

  const createContactForm = async (event) => {
    event.preventDefault()
    try {
      const {status} = await createContact(getContact)
      setContact({})
      navigate("/contacts")
      
    } catch (err) {
      console.log(err.message)
    }
  }

  const setContactInfo = (event) => {
    setContact({ ...getContact, [event.target.name]: event.target.value })
  }

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route
          path="/contacts"
          element={<Contacts contacts={getContacts} loading={loading} />}
        />
        <Route path="/contacts/add" element={
          <AddContact
            contact={getContact}
            setContactInfo={setContactInfo}
            groups={getGroups}
            createContactForm={createContactForm}
          />
        } />
        <Route path="/contacts/:contactId" element={<Contact />} />
        <Route path="/contacts/edit/:contactId" element={<EditContact />} />
      </Routes>
    </div>
  )
}

export default App
