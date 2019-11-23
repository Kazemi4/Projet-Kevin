import React from 'react'
import { Link } from "react-router-dom";

import "./Header.css"

const Header = () => {
    return (
            <header className="header-header">
        
        <Link  className="header-link" to="/"> Home </Link>
        <Link  className="header-link" to="/characters">Characters </Link>
      </header>
    )
}

export default Header
