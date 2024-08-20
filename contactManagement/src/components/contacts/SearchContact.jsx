import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { PURPLE } from "../../helpers/colors"

const SearchContact = () => {
  return (
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="جستجو" aria-label="Search" />
      <button className="btn" style={{ borderColor: PURPLE, backgroundColor: PURPLE, color: "#fff" }} type="submit"><IoSearchSharp /></button>
    </form>
  )
}

export default SearchContact
