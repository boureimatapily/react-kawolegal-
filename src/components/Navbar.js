import React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = (props) => {
    return (
        <nav className={props.navclassName}>
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <NavLink classNameName="navbar-brand" to="/"><img src="assert/images/logo.png" width="200px" height="90px" /></NavLink>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right nav-item-menu">
                        <li className="nav-active-item"><NavLink to="/">Home </NavLink></li>
                        <li><NavLink to="/startup">{props.startup}</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
