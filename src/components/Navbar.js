import React from 'react';
import { Link } from 'react-router-dom';



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
                    <Link classNameName="navbar-brand" to="/"><img src="assert/images/logo.png" width="200px" height="90px" /></Link>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right nav-item-menu">
                        <li className="nav-active-item"><Link to="/">Home</Link></li>
                        <li><Link to="/startup">{props.startup}</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
