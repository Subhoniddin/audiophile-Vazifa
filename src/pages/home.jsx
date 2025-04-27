import BestAudioGear from "../components/best-audiio-gear/bestAudioGear"
import Header from "../components/header/header"
import Hero from "../components/hero/hero"
import HomeMainSection from "../components/homeMainSection/homeMainSection"
import OtherPageReferense from "../components/other-page-referense/otherPageReferense"

function Home() {
  return (
    <>
        <Header bgColor={'header-dark'}>
            <Hero/>
        </Header>
        <OtherPageReferense/>
        <HomeMainSection/>
        <BestAudioGear/>
    </>
  )
}

export default Home