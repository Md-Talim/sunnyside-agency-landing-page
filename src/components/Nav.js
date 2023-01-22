import Button from './Button';
import Link from './Link';
import logo from '../images/logo.svg';
import hamburgerMenu from '../images/icon-hamburger.svg';
import { useState } from 'react';
import '../styles/Nav.css';

const links = ['About', 'Services', 'Projects'];

const Nav = () => {
  const [isExpanded, setExpanded] = useState(false);

  function handleMenuVisibility() {
    setExpanded(!isExpanded);
  }

  return (
    <nav className="flex items-center justify-between p-8">
      <img src={logo} alt="logo" />
      <img
        src={hamburgerMenu}
        alt="menu icon"
        className="sm:hidden cursor-pointer"
        onClick={handleMenuVisibility}
      />
      {/* <ul className="hidden sm:flex gap-8 items-center">      */}
      <ul className="primary-navigation sm:flex sm:gap-8 sm:items-center" data-expanded={isExpanded}>
        {links.map((link, index) => (
          <Link key={index} name={link} />
        ))}
        <Button value="Contact" />
      </ul>
    </nav>
  );
};

export default Nav;
