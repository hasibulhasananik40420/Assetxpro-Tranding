import Header from "../Header"
import FooterEnd from "./FooterEnd"
import Gallery from "./Gallery"
import Hero from "./Hero"
import HomeFooter from "./HomeFooter"
import TradeWithAward from "./TradeWithAward"
import TrandingHero from "./TrandingHero"
import Trends from "./Trends"


const Home = () => {
  return (
    <div className="bg-black">
        <Header/>
        <Gallery/>
        <Trends/>
        <TrandingHero/>
        <Hero/>
        <TradeWithAward/>
        <HomeFooter/>
        <FooterEnd/>
    </div>
  )
}

export default Home