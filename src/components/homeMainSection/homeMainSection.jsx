import Button from "../button/button"
import speaker from '../../assets/home/desktop/image-speaker-zx9.png'
import circles from '../../assets/home/desktop/pattern-circles.svg'

import './homeMainSection.css'

function HomeMainSection() {
  return <div className="container">
              <div className="speaker-Zx9 bg-Zx9">
                <img className="circles" src={circles}/>
                <img className="stein" src={speaker} alt="speaker-Zx9" />
                  <div className="info">
                    <h2>ZX9 SPEAKER</h2>
                    <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Button btnClass='btn btnDark' name='See Product'/>
                  </div>
              </div>

              <div className="speaker-Zx7">
                <div className="info">
                  <h2>ZX7 SPEAKER</h2>
                  <Button btnClass='btn btnTransparent' name='See Product'/>
                </div>
              </div>
              
              <div className="earphones-Yx1">
                <div className="earphones-Yx1-img"></div>
                <div className="earphones-Yx1-body">
                  <h2>YX1 EARPHONES</h2>
                  <Button btnClass='btn btnTransparent' name='See Product'/>
                </div>
              </div>
          </div>
}

export default HomeMainSection