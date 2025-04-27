import CatigoryHero from "../components/catigory-hero/catigoryHero"
import Header from "../components/header/header"
import Product from "../components/product/product"

// images
import image1 from '../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
import image2 from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import image3 from '../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'
import OtherPageReferense from "../components/other-page-referense/otherPageReferense"
import BestAudioGear from "../components/best-audiio-gear/bestAudioGear"

const productInfo = {
  isNew: true,
  title: "XX99 Mark II Headphones",
  descr: `The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.`,
}

const productInfo2 = {
  title: "XX99 Mark I Headphones",
  descr: `As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.`,
}

const productInfo3 = {
  title: "XX59 Headphones",
  descr: `Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.`,
}

const imgInfo = {
  imgSrc: image1,
  alt: productInfo.title
}
const imgInfo2 = {
  imgSrc: image2,
  right: true,
  alt: productInfo2.title
}

const imgInfo3 = {
  imgSrc: image3,
  alt: productInfo.title
}

function Headphones() {
  return <>
      <Header bgColor='header-black'>
          <CatigoryHero pages='HEADPHONES'/>
      </Header>
      <Product info={productInfo} img={imgInfo}/>
      <Product info={productInfo2} img={imgInfo2}/>
      <Product info={productInfo3} img={imgInfo3}/>
      <OtherPageReferense/>
      <BestAudioGear/>
    </>
}

export default Headphones