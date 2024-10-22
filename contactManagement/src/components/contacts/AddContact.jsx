import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../../public/images/add-contact-img.png"

const AddContact = ({ contact, setContactInfo, groups, createContactForm }) => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <form onSubmit={createContactForm} className='form-group my-5'>
            <input className='form-control'
              placeholder='نام و نام خانوادگی'
              type='text'
              name='fullname'
              value={contact.fullname}
              onChange={setContactInfo}
              required={true}
            />
            <input className='form-control-file mt-2'
              type='file'
              name='photo'
              value={contact.photo}
              onChange={setContactInfo}
              required={true}
            />
            <input className="form-control mt-2"
              placeholder='موبایل'
              type="text"
              name='mobile'
              value={contact.mobile}
              onChange={setContactInfo}
              required={true}
            />
            <input className="form-control mt-2"
              placeholder='ایمیل'
              type="email"
              name='email'
              value={contact.email}
              onChange={setContactInfo}
              required={true}
            />
            <input className="form-control mt-2"
              placeholder='شغل'
              type="text"
              name='job'
              value={contact.job}
              onChange={setContactInfo}
              required={true}
            />
            <select className='form-control mt-2'
              name='group'
              value={contact.group}
              onChange={setContactInfo}
              required={true}
            >
              <option>انتخاب گروه</option>
              {
                groups.length > 0 && groups.map((group) => (
                  <option key="group.id" value="group.id">{group.name}</option>
                )
                )
              }
            </select>
            <div className='mt-3 d-flex justify-content-between'>
              <input className='btn btn-primary'
                type='submit'
                value="ساخت مخاطب"
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
  )
}

export default AddContact
