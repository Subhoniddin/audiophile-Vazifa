import './navbar.css'
import cart from '../../assets/shared/desktop/icon-cart.svg'

function Navbar() {
  return (
    <>
        <div className='nav'>
              <div className="nav-logo">audiophile</div>
              <ul className='nav-list'>
                  <li><a href="#">HOME</a></li>
                  <li><a href="#">HEADPHONES</a></li>
                  <li><a href="#">SPEAKERS</a></li>
                  <li><a href="#">EARPHONES</a></li>
              </ul>
              <img className='nav-cart' src={cart} alt="cart" />
          </div>
          <div className='underLine'></div>
    </>
  )
}

export default Navbar