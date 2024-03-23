import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
const Navbar=()=>
{
    return(
<nav className='Navbar'>
    <Link to="/"><button className='Navbar-button'>Home</button></Link>
    <Link to="/contact"><button className='Navbar-button'>Contact</button></Link>
</nav>
    );

};
export default Navbar;