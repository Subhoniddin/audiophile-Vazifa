import './product.css'

import Button from '../button/button'
function Product({info:{isNew, title, descr}, img: {imgSrc, right, alt}}) {
  return <div className='container product'>
              {!right && <img src={imgSrc} alt={alt} />}
                  <div className='product-info'>
                      {isNew && <div className='condition'>NEW PRODUCT</div>}
                      <h1 className='title'>{title}</h1>
                      <p className='descr'>{descr}</p>
                      <Button btnClass='btn btnOrange' name='See Product'/>
                  </div>
              {right && <img src={imgSrc} alt={alt} />}
          </div>
}

export default Product