import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import instagram from '../images/icon-instagram.svg';
import pinterest from '../images/icon-pinterest.svg';

const Footer = () => (
  <footer className="text-center bg-primary-300 grid place-items-center">
    <h4 className="text-primary-100 font-semibold text-4xl py-10">sunnyside</h4>
    <nav className="mb-10">
      <ul className="flex gap-8 text-primary-100">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
    <ul className="flex gap-4 mx-auto py-10">
      <li className="cursor-pointer">
        <img src={facebook} alt="facebook" />
      </li>
      <li className="cursor-pointer">
        <img src={instagram} alt="instagram" />
      </li>
      <li className="cursor-pointer">
        <img src={twitter} alt="twitter" />
      </li>
      <li className="cursor-pointer">
        <img src={pinterest} alt="pinterest" />
      </li>
    </ul>
  </footer>
);

export default Footer;
