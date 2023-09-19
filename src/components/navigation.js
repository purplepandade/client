// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
  
function Nav (){
    return <navigation-bar>
        <ul className='NavigationItems'>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li>Home</li>
            <li>Home</li>
        </ul>

        <div className="user">Hallo User</div>
    </navigation-bar>
}
  
export default Nav;