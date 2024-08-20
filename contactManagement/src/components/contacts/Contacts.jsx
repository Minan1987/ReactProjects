import React from 'react'
import { FiPlusSquare } from "react-icons/fi";
import Spinner from '../Spinner';
import Contact from './Contact'
import notFound from '../../../public/images/no-found.gif'
import { PINK } from '../../helpers/colors';

const Contacts = ({ loading, contacts }) => {
  return (
    <>
      <section className='container' >
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 text-center my-3">
                <button className='btn' style={{ backgroundColor: PINK }}>ساخت مخاطب جدید <FiPlusSquare /></button>
              </p>
            </div>
          </div>
        </div>
      </section>
      {loading ? <Spinner /> :
        <section className="container">
          <div className="row">
            {contacts.length > 0 ?
              contacts.map(c => (<Contact  key={c.id} contact={c}/>)) 
              :
              <div className='text-center'>
                <p>مخاطب یافت نشد!</p>
                <img src={notFound} alt="پیدا نشد" className="w-25" />
              </div>

            }
          </div>
        </section>
      }
    </>
  )
}

export default Contacts
