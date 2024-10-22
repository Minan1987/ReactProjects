import React from 'react'
import { GrUserManager } from "react-icons/gr";
import { CURRENTLINE, PURPLE } from "../helpers/colors"
import SearchContact from './contacts/SearchContact';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar" style={{backgroundColor: CURRENTLINE}}>
            <div className="container-fluid">
                <Link to="/" className='text-decoration-none'><h1 className="navbar-brand h3 text-light"><GrUserManager style={{ color: PURPLE }} /> پروژه مدیریت <span style={{ color: PURPLE }}>مخاطبین</span></h1></Link>
                <SearchContact />
            </div>
        </nav>
    )
}

export default Navbar
