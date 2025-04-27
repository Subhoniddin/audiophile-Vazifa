import './bestAudioGear.css'
import bestAudioGearImg from '../../assets/shared/desktop/image-best-gear.jpg'

function BestAudioGear() {
  return <>
        <div className='container bestAudioGear'>
            <div className='bestAudioGear-info'>
                <h1 className='title'>Bringing you the <span className='best'>BEST</span> audio gear</h1>
                <p className='descr'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
            <img src={bestAudioGearImg} alt="" />
        </div>
    </>
 
}

export default BestAudioGear