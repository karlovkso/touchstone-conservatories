import React, { useState } from 'react'
import { Link } from 'react-scroll'

function Header() {
const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                {/* <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a> */}
                {/* <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div> */}
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to='Home' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='Welcome' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Welcome</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='About' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='Feedback' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Feedback</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header