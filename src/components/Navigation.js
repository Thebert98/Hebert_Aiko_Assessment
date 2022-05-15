import React from 'react';
import {NavLink} from 'react-router-dom';

import '../App.css';


const Navigation = () => { 
 
    return (
      <nav className='navigation'>
        <NavLink className='weblink' to='/'>
         Home
        </NavLink>
      </nav>
    );
  
  
}

export default Navigation;
