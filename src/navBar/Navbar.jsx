import { Link } from 'react-router-dom';
import '../styles/navBar.css';

export const Navbar = () => {
  return (
    <div className='nav'>
      <input type='checkbox' id='nav-check' />
      <div className='nav-header'>
        <div className='nav-title'>Liquor list</div>
      </div>
      <div className='nav-btn'>
        <label htmlFor='nav-check'>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/Cocktail'>Cocktail</Link>
        <Link to='/OrdinaryDrink'>Ordinary Drink</Link>
        <Link to='/about'>About</Link>

        <a href='https://jsfiddle.net/user/jo_Geek/' target='_blank'>
          JsFiddle
        </a>
      </div>
    </div>
  );
};
