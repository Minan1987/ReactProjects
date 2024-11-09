import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getContact, getAllGroups, updateContact } from '../../services/contactServices';
import Spinner from '../Spinner';
import img from "../../../public/images/add-contact-img.png"

const EditContact = ({forceRender, setForceRender}) => {
  const { contactId } = useParams()
  const navigate = useNavigate()
  const [state, setState] = useState({
    loading: false,
    contact: {
      fullname: "",
      photo: "",
      mobile: "",
      email: "",
      job: "",
      group: ""
    },
    groups: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ ...state, loading: true })
        const { data: contactData } = await getContact(contactId)
        const { data: groupsData } = await getAllGroups()
        setState({ ...state, loading: false, contact: contactData, groups: groupsData })
      } catch (err) {
        console.log(err)
        setState({ ...state, loading: false })
      }
    }
    fetchData()
  }, [])
  const { loading, contact, groups } = state;

  const setEditContactInfo = (event) => {
    setState({ ...state, contact: { ...state.contact, [event.target.name]: [event.target.value] } })
  } 

  const editContactForm = async (event) => {
    event.preventDefault()
    try {
      setState({ ...state, loading: true })
      const { data } = await updateContact(state.contact, contactId)
      setState({ ...state, loading: false });
      if (data) {
        setForceRender(!forceRender)
        navigate("/contacts")
      }
    } catch (err) {
      console.log(err)
      setState({ ...state, loading: false })
    }
  }


  return (
    <>
      {loading ? (<Spinner />) : (
        <>
          <div className='container'>
            <div className="row">
              <div className="col-md-6">
                <form onSubmit={editContactForm} className='form-group my-5'>
                <input
                        name="fullname"
                        type="text"
                        className="form-control"
                        value={contact.fullname}
                        onChange={setEditContactInfo}
                        required={true}
                        placeholder="نام و نام خانوادگی"
                      />
                  <input className='form-control mt-2'
                    type='text'
                    name='photo'
                    value={contact.photo}
                    onChange={setEditContactInfo}
                    required={true}
                  />
                  <input className="form-control mt-2"
                    placeholder='موبایل'
                    type="text"
                    name='mobile'
                    value={contact.mobile}
                    onChange={setEditContactInfo}
                    required={true}
                  />
                  <input className="form-control mt-2"
                    placeholder='ایمیل'
                    type="email"
                    name='email'
                    value={contact.email}
                    onChange={setEditContactInfo}
                    required={true}
                  />
                  <input className="form-control mt-2"
                    placeholder='شغل'
                    type="text"
                    name='job'
                    value={contact.job}
                    onChange={setEditContactInfo}
                    required={true}
                  />
                  <select className='form-control mt-2'
                    name='group'
                    value={contact.group}
                    onChange={setEditContactInfo}
                    required={true}
                  >
                    <option>انتخاب گروه</option>
                    {
                      groups.length > 0 && groups.map((group) => (
                        <option key={group.id} value={group.id}>{group.name}</option>
                      )
                      )
                    }
                  </select>
                  <div className='mt-3 d-flex justify-content-between'>
                    <input className='btn btn-primary'
                      type='submit'
                      value="ویرایش مخاطب"
                    />
                    <Link to="/contacts" className="btn btn-secondary">انصراف</Link>
                  </div>
                </form>

              </div>
              <div className="col-6">
                <img src={img} alt="" width="100%" />
              </div>
            </div>
          </div>
        </>
      )
      }
    </>
  )
}

export default EditContact
