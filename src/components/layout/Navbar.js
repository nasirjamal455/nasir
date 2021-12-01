import React from 'react'
import {Link} from "react-router-dom"
import SignedOut from './SignedOut'

function Navbar() {
    return (
        <div>
            <nav className="nav-wrapper grey darken-3 ">
         
                <div className="container">
                     <SignedOut />
                    <Link to="/" className="brand-logo">BrainsPK</Link>
                   
                </div>

            </nav>
        </div>
    )
}

export default Navbar
