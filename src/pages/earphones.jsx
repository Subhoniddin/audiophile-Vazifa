import BestAudioGear from "../components/best-audiio-gear/bestAudioGear"
import CatigoryHero from "../components/catigory-hero/catigoryHero"
import Header from "../components/header/header"
import OtherPageReferense from "../components/other-page-referense/otherPageReferense"

// images
import image1 from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'
import Product from "../components/product/product"

const productInfo = {
  title: "YX1 WIRELESS EARPHONES",
  descr: `Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.`,
}
const imgInfo = {
    imgSrc: image1,
    alt: productInfo.title
}

function Earphones() {
  return <>
    <Header bgColor='header-black'>
        <CatigoryHero pages='Earphones'/>
    </Header>
    <Product info={productInfo} img={imgInfo}/>
    <OtherPageReferense/>
    <BestAudioGear/>
  </>
}

export default Earphones