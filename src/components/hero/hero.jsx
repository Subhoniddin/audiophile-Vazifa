import Button from '../button/button'
import './hero.css'

function Hero() {
  return <>
        <div className='hero'>
            <div className='hero-info'>
                <div className='condition'>NEW PRODUCT</div>
                <h1 className='title'>XX99 Mark II Headphones</h1>
                <p className='descr'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Button btnClass='btn btnOrange' name='See Product'/>
            </div>
        </div>
    </>
  
}

export default Hero