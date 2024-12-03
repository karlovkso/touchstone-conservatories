import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className="header" id="Header">
      <nav className="navbar justify-between px-14 py-6">
        <a href="/" className="logo">
          <img src={logo} alt="logo" width="300" />
        </a>

        {/* <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div> */}

        <ul
          className={`nav-menu ${
            click ? "active" : ""
          } space-x-10 text-lg text-cyan-700`}
        >
          <li className="nav-item hover:font-bold">
            <button>
              <Link
                to="Header"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Home
              </Link>
            </button>
          </li>
          <li className="nav-item hover:font-bold">
            <button>
              <Link
                to="Welcome"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Welcome
              </Link>
            </button>
          </li>
          <li className="nav-item hover:font-bold">
            <button>
              <Link
                to="About"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                About
              </Link>
            </button>
          </li>
          <li className="nav-item hover:font-bold">
            <button>
              <Link
                to="Feedback"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Feedback
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
