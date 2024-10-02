import React, { useState } from 'react';
import { NavData } from './NavData';
import './NavBar.css'
import AahladhLogo from '../../Assets/Aahladhlogo.png'

const NavBar = () => {
    const [state = { clicked : false}, setState] = useState();
    const handleClick = () => {
        setState({ clicked: !state.clicked})
    }
  return (
    <nav>
        <nav className="NavbarItems">
            <div>
                <img src={AahladhLogo} alt="Aahladh-Logo" className='Aahladh-logo' />     
            </div>
                <div className="menu-icons" onClick={handleClick}>
                    <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
                    {NavData.map((item, index) => {
                        return (
                                <li key={index}>
                                    <a href={item.url} className={item.cName}>
                                        <i className={item.icon}></i>
                                        {item.title}
                                    </a>
                                </li>
                        )
                    }
                    )}
                </ul>
            </nav>
    </nav>
  )
}

export default NavBar