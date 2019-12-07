import React from 'react'
import { BrowerRouter as Router, Link, Route } from 'react-router-dom'

const Navbar = () => {
    return (
        <Router>
            <div>
                <Link to="/">Home</Link>
                <Link to="/startup">Startup</Link>
                <Link to="/login">Startup</Link>
                <Link to="/register">Startup</Link>

                <Route exact path="/" componemt={Home} />
                <Route exact path="/startup" componemt={Startup} />
                <Route exact path="/login" componemt={Home} />
                <Route exact path="/register" componemt={Home} />

            </div>
        </Router>
    )
}

export default Navbar
