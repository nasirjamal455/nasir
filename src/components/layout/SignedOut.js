import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedOut() {
    return (
        <div>
           <ul className="right">
               <li><NavLink to="/">New Project</NavLink></li>
               <li><NavLink to="/">Log Out</NavLink></li>
               <li><NavLink to="/" className="btn btn-floating pink lighten-1">MN</NavLink></li>
           </ul>
        </div>
    )
}

export default SignedOut;
