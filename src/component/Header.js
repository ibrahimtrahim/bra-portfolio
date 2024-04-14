import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faBriefcase, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Switcher from './Switcher';

const Header = () => {

  const [activePage, setActivePage] = useState(window.location.pathname);

  const handleNavLinkClick = (to) => {
    setActivePage(to);
  };

  return (
    <header className="lg:flex bg-white dark:bg-dark-primary text-white p-4 rounded lg:items-center mb-4 lg:mr-2 z-50">
      <nav className="lg:flex lg:flex-row lg:justify-center lg:items-center font-lekton font-medium">
        <ul>
        <Switcher />
        <NavLink icon={faHome} label="Home" to="/home" active={activePage === '/home'} onClick={handleNavLinkClick} />
        <NavLink icon={faUser} label="About" to="/about" active={activePage === '/about'} onClick={handleNavLinkClick} />
        <NavLink icon={faBriefcase} label="Projects" to="/projects" active={activePage === '/projects'} onClick={handleNavLinkClick} />
        <NavLink className='hover:text-blue-400' icon={faEnvelope} label="Contact" to="/contact" active={activePage === '/contact'} onClick={handleNavLinkClick} />
        </ul>
      </nav>
    </header>
  );
};

const NavLink = ({ icon, label, to, active, onClick }) => {
  return (
    <li className='inline'>
      <a href={to} onClick={() => onClick(to)} className={`mx-3 text-black dark:text-white lg:flex lg:flex-col ${active ? 'text-blue-400 dark:text-blue-400' : 'hover:text-blue-400 dark:hover:text-blue-400'} lg:items-center lg:py-2 lg:my-6`}>
        <FontAwesomeIcon icon={icon} className="mr-1 lg:mb-2" />
        <span className='text-xs font-medium uppercase'>{label}</span>
      </a>
    </li>
  );
};

export default Header;