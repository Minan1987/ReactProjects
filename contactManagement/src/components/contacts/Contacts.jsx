import React from 'react'
import { FaPlus } from "react-icons/fa6";
import Spinner from '../Spinner';
import Contact from './Contact'

const Contacts = ({loading, contacts}) => {
  return (
    <>
      <section className='container' >
        <div className="row">
          <div className="col-12">
            <button className='btn'><FaPlus /> ساخت مخاطب جدید</button>
          </div>
        </div>
      </section>
      {loading ? <Spinner /> :
      <section className="container">
          <div className="row">
            {contacts.length > 0 ? 
              Contacts.map((c) => <Contact />) :
              <div className='text-center'> 
                <p>مخاطب یافت نشد!</p>
                <img src={require("../../../public/images/no-found.gif")} />
              </div>
              
            }
          </div>
      </section>
      }
    </>
  )
}

export default Contacts
