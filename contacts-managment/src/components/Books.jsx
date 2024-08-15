import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { getBooks } from '../data/data'
import { IoSearchOutline } from "react-icons/io5";

const Books = () => {
  const books = getBooks()
  return (
    <div className="container">
      <nav className="bg-light p-3 mt-3">
        <div className="d-block">
          <div className="col-4">
            <form className="form-inline my-2 my-lg-0 d-flex">
              <input className="form-control mr-sm-2" type="search" placeholder="نام کتاب..." aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><IoSearchOutline /></button>
            </form>
          </div>
          <div className='mt-3 row' style={{ marginRight: "1rem" }}>
            <div className='col-lg-4'>
              <ul className="d-block" style={{ borderLeft: "1px solid #ccc" }}>
                {
                  books.map((book) => (
                    <li key={book.number}>
                      <NavLink style={({isActive}) =>{
                        return{
                          color: isActive? "red" : ""
                        }
                      }}
                        to={`/books/${book.number}`}>{book.name}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
            <Outlet />
          </div>
        </div>
      </nav>
    </div>
  )
}



export default Books
