import React from 'react'
import logo from "../assets/images/logo.svg"
import { Link } from "react-router-dom";

import "./Header.css"

const Header = () => {
    return (
            <header className="header-header">
        <img src={logo} className="header-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Link  className="header-link" to="/"> Home </Link>
        <Link  className="header-link" to="/characters">Characters </Link>
        <Link  className="header-link" to="/Staff">Staff </Link>

      </header>
    )
}

export default Header
