import Button from '../button/button'
import './otherPageReferense.css'
import headphonesImg from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakersImg from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphonesImg from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'

function OtherPageReferense() {
  return <>
        <div className='container otherPages'>
            <div className='card'>
                <img src={headphonesImg} alt="" />
               <div className='cardTitle'>
                  <h3 className='title'>HEADPHONES</h3>
                  <Button btnClass='shopBtn' name='SHOP' iconArrow = 'arrow'/>
               </div>
            </div>
            <div className='card'>
                <img src={speakersImg} alt="" />
              <div className='cardTitle'>
                  <h3 className='title'>HEADPHONES</h3>
                  <Button btnClass='shopBtn' name='SHOP' iconArrow = 'arrow'/>
              </div>
            </div>
            <div className='card'>
                <img src={earphonesImg} alt="" />
                <div className='cardTitle'>
                  <h3 className='title'>HEADPHONES</h3>
                  <Button btnClass='shopBtn' name='SHOP' iconArrow = 'arrow'/>
                </div>
            </div>
        </div>
    </>
  
}

export default OtherPageReferense