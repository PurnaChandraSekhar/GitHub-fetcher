import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

 const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="logo">
                <h1><Link to="/" className="link"><i className="icon fab fa-github"></i> {props.title}</Link></h1>
            </div>
            <ul className="list-items">
               <li className="list-item"><Link to="/" className="link">Home</Link></li>
               <li className="list-item"><Link className="link" to="/about">About</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
