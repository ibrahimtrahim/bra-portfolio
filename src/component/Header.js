import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faBriefcase, faEnvelope, faSun } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="flex bg-dark-primary text-white p-4 rounded items-center mr-2 z-50">
      <nav className="flex flex-row justify-center items-center font-lekton font-medium">
        <ul>
        <NavLink icon={faSun}/>
        <NavLink icon={faHome} label="Home" to="/home" />
        <NavLink icon={faUser} label="About" to="/about" />
        <NavLink icon={faBriefcase} label="Projects" to="/projects" />
        <NavLink className='hover:text-blue-400' icon={faEnvelope} label="Contact" to="/contact" />
        </ul>
      </nav>
    </header>
  );
};

const NavLink = ({ icon, label, to }) => {
  return (
    <li>
      <a href={to} className="flex flex-col hover:text-blue-400 hover:duration-200 hover:ease-in-out items-center py-2 my-6">
        <FontAwesomeIcon icon={icon} className="mb-2" />
        <span className='text-xs uppercase'>{label}</span>
      </a>
    </li>
  );
};

export default Header;