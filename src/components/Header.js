import React from 'react'
import { Link } from "react-router-dom";

import "./Header.css"

const Header = () => {
    return (
            <header className="header-header">
        <Link  className="header-link" id="header-home-title" to="/"> Home </Link>
        <Link  className="header-link" id="header-characters-title"to="/characters">Characters </Link>
        <Link className="header-link" id="header-staff-title" to="/staff">Staff</Link>
        <Link className="header-link" id="header-students-title" to="/students">Students</Link>
      </header>
    )
}

export default Header
