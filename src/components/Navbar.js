import React from "react";
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
       <nav className="nav-wrapper red darken-3">
           <div className="container">
                <a className="brand-logo">Poke'Times</a>
                <ul className="right">
                    <li><Link to="/">HOME</Link></li>
                    <li><NavLink to="/about">ABOUT</NavLink></li>
                    <li><NavLink to="/contact">CONTACT</NavLink></li>
                </ul>
           </div>
       </nav>
    )
}

export default Navbar;