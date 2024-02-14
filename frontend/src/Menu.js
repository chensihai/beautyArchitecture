// Profile, Canvas, Logout
import React from 'react';
import { Link } from 'react-router-dom';



const Menu = () => {
    
    
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('email');
        window.location.reload();
    }
    
    const gotomenu = (path) => {
        return window.location.href; // Add a return statement to fix the error
    }
    return (
        <div  className='menu'>
        <ul>
            <li><Link to="/" onClick={gotomenu("/profile")}>Profile</Link></li>
            <li><Link to="/canvas" onClick={gotomenu("/profile")}>Canvas</Link></li>
            <li><button onClick={logout}>Logout</button></li>
        </ul>
        </div>
        

        
    );
}

export default Menu;

