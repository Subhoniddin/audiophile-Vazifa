import BestAudioGear from "../components/best-audiio-gear/bestAudioGear"
import CatigoryHero from "../components/catigory-hero/catigoryHero"
import Header from "../components/header/header"
import OtherPageReferense from "../components/other-page-referense/otherPageReferense"

// images
import image1 from '../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'
import image2 from '../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg'
import Product from "../components/product/product"

const productInfo = {
  isNew: true,
  title: "ZX9 SPEAKER",
  descr: `Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.`,
}
const productInfo2 = {
  title: "ZX7 SPEAKER",
  descr: `Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.`,
}
const imgInfo = {
    imgSrc: image1,
    alt: productInfo.title
}
const imgInfo2 = {
    imgSrc: image2,
    right: true,
    alt: productInfo.title
}

function Speaker() {
  return <>
      <Header bgColor='header-black'>
          <CatigoryHero pages='Speaker'/>
      </Header>
      <Product info={productInfo} img={imgInfo}/>
      <Product info={productInfo2} img={imgInfo2}/>
      <OtherPageReferense/>
      <BestAudioGear/>
  </>
}

export default Speaker