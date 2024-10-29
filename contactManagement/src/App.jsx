import React, { useState, useEffect } from 'react'
import { Route, Routes, Navigate, useNavigate } from "react-router-dom"
import { Navbar, Contacts, AddContact, EditContact, ViewContact } from './components'
import { createContact, getAllContacts, getAllGroups, getGroup } from './services/contactServices'

const App = () => {
  const [forceRender, setForceRender] = useState(false)
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
  },[forceRender])

  const createContactForm = async (event) => {
    event.preventDefault()
    try {
      const {status} = await createContact(getContact)
      setContact({})
      setForceRender(!forceRender)
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
        <Route path="/contacts/:contactId" element={<ViewContact loading={loading} contact={getContact} group={getGroup} />} />
        <Route path="/contacts/edit/:contactId" element={<EditContact />} />
      </Routes>
    </div>
  )
}

export default App
