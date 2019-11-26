import React from 'react'
import logo from "../assets/images/harry-potter-logo.png"
import { Link } from "react-router-dom";

import "./Header.css"

const Header = () => {
    return (
        <>
        <header className="header-header">
        <img src={logo} className="header-logo" alt="logo" />
        <p className="bienvenue">
          Bienvenue sur le site 9 3/4 d'Harry Potter !
        </p>
        <nav className="menu">
        <Link  className="header-link1" to="/"> Home </Link>
        <Link  className="header-link2" to="/characters">Characters </Link>
        <Link  className="header-link" to="/staff">Staff</Link>
        </nav>
        </header>
        </>
      
    )
}

export default Header
