import Nav from './Nav';
import downArrow from '../images/icon-arrow-down.svg';


const Header = () => (
  <header
    className={` bg-mobile-header sm:bg-desktop-header h-screen bg-bottom bg-cover`}
  >
    <Nav />
    <div className="text-center">
      <h1 className="text-neutral-100 text-5xl tracking-widest font-serif uppercase my-12">
        we are creatives
      </h1>
      <img className="inline-block" src={downArrow} alt="down arrow" />
    </div>
  </header>
);

export default Header;
