import React, { useState, useEffect } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import { Route, Routes, Navigate, useNavigate } from "react-router-dom"
import { Navbar, Contacts, AddContact, EditContact, ViewContact } from './components'
import { createContact, deleteContact, getAllContacts, getAllGroups, getGroup } from './services/contactServices'
import { RiDeleteBin2Line } from "react-icons/ri";

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
  }, [forceRender])

  const createContactForm = async (event) => {
    event.preventDefault()
    try {
      const { status } = await createContact(getContact)
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

  const confirm = (contactId, contactFullname) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui' dir='rtl'>
            <h2 className='h4'><RiDeleteBin2Line /> حذف مخاطب</h2>
            <hr />
            <p>آیا میخواهید {contactFullname} را پاک کنید؟</p>
            <div className="d-flex justify-content-between">
              <button className='btn btn-primary'
                onClick={() => {
                  removeContact(contactId);
                  onClose();
                }}
              >
                مطمئن هستم!
              </button>
              <button onClick={onClose} className='btn btn-secondary'>انصراف</button>
            </div>
          </div>
        );
      }
    });
  }

  const removeContact = async (contactId) => {
    try {
      setLoading(true)
      const response = await deleteContact(contactId)
      if (response) {
        const { data: contactsData } = await getAllContacts()
        setContacts(contactsData)
        setLoading(false)
      }
    } catch (err) {
      console.log(err.message)
      setLoading(false)
    }
  }

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route
          path="/contacts"
          element={
            <Contacts
              contacts={getContacts}
              loading={loading}
              confirmDelete={confirm}
            />
          }
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
        <Route path="/contacts/edit/:contactId" element={
          <EditContact
            forceRender={forceRender}
            setForceRender={setForceRender}
          />
        }
        />
      </Routes>
    </div>
  )
}

export default App
