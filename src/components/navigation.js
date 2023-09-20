// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
  
function Nav (){
    return <div className='Container flex justify-end items-center gap-10 sticky py-5 bg-grey'>
        <ul className='NavigationItems text-xl flex gap-10'>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li>Home</li>
            <li>Home</li>
        </ul>

        <div className="user">Hallo User</div>
    </div>
}
  
export default Nav;