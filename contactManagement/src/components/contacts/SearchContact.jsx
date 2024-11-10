import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { PURPLE } from "../../helpers/colors"

const SearchContact = ({query, search}) => {
  return (
    <div className="d-flex justify-content-center" role="search">
      <input className="form-control me-2"
        type="search"
        value={query.text}
        onChange={search}
        placeholder="جستجو"
        aria-label="Search"
        style={{ borderRadius: "0 5px 5px 0" }}
      />
      <span className='d-flex justify-content-center align-items-center' style={{backgroundColor: PURPLE, borderRadius:"5px 0 0 5px"}}><IoSearchSharp style={{margin:"0 10px"}}/></span>
    </div>
  )
}

export default SearchContact
