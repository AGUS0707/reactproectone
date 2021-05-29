import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container d-flex justify-content-between align-items-center">
                <Link to="/" className="navbar-brand">Logo</Link>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/register" className="nav-link">SIGN UP</Link></li>
                    <li className="nav-item"><Link to="/login" className="nav-link">LOGIN</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;