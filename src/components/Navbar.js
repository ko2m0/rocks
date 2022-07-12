import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib'

function Navbar() {

    const [click, setClick] = useState(false);
    const [button] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

      



  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <div className="navbar">
          <div className="navbar-container container">
              <Link to='/' className="navbar-logo" onClick={closeMobileMenu} >
              <MdFingerprint className='navbar-icon'/>
              
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                      {click ? <FaTimes /> : <FaBars />}
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'> 
                    <Link to='/#' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'> 
                    <Link to='/experience' className='nav-links' onClick={closeMobileMenu}>
                        Experience
                    </Link>
                </li>
                <li className='nav-item'> 
                    <Link to='/education' className='nav-links' onClick={closeMobileMenu}>
                        Education & Interests
                    </Link>
                </li>
                <li className='nav-btn'>
                    {button ? (
                        <Link to='/hireme' className='btn-link'>
                            <Button buttonStyle='btn--outline'>Contact Me</Button>
                        </Link>
                    ): (
                        <Link to='/hireme' className='btn-link' onClick={closeMobileMenu}>
                            <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                                Hire Me!
                            </Button>
                        </Link>
                    )}
                </li>
              </ul>
          </div>
          </div>  
          </IconContext.Provider>
    </>
  );

}

export default Navbar;
