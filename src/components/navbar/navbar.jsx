import './navbar.css'

// images
import logoImg from '../../assets/home/desktop/audiophile 2.png'
import cart from '../../assets/shared/desktop/icon-cart.svg'
import hamburger from '../../assets/shared/tablet/icon-hamburger.svg'

import { Link, NavLink } from 'react-router-dom'

function Navbar(props) {
  return <div className='container'>
          <div className='nav'>
                <div className='menu-logo'>
                  <img className='hamburger-menu' src={hamburger} alt="menu" />
                  <Link to='/'><img src={logoImg} alt="logo" /></Link>
                </div>
                <ul className='nav-list'>
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/headphones">HEADPHONES</NavLink></li>
                    <li><NavLink to="/speaker">SPEAKERS</NavLink></li>
                    <li><NavLink to="/earphones">EARPHONES</NavLink></li>
                </ul>
                {props.cart && <img className='nav-cart' src={cart} alt="cart"/>}
            </div>
            <div className={props.underLine}></div>
        </div>
}

export default Navbar