import './navbar.css'
import logoImg from '../../assets/home/desktop/audiophile 2.png'
import cart from '../../assets/shared/desktop/icon-cart.svg'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className='container'>
          <div className='nav'>
                <img src={logoImg} alt="logo" />
                <ul className='nav-list'>
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/headphones">HEADPHONES</NavLink></li>
                    <li><NavLink to="/speaker">SPEAKERS</NavLink></li>
                    <li><NavLink to="/earphones">EARPHONES</NavLink></li>
                </ul>
                <img className='nav-cart' src={cart} alt="cart" />
            </div>
            <div className='underLine'></div>
        </div>
    </>
  )
}

export default Navbar