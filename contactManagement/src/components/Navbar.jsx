import React from 'react'
import { GrUserManager } from "react-icons/gr";
import { PURPLE } from "../helpers/colors"
import SearchContact from './contacts/SearchContact';

const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <h1 className="navbar-brand h5"><GrUserManager style={{ color: PURPLE }} /> پروژه مدیریت <span>مخاطبین</span></h1>
                <SearchContact />
            </div>
        </nav>
    )
}

export default Navbar
