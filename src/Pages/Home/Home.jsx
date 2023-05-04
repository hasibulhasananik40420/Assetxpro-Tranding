import Header from "../Header"
import FooterEnd from "./FooterEnd"
import Gallery from "./Gallery"
import Hero from "./Hero"
import HomeFooter from "./HomeFooter"
import TrandingHero from "./TrandingHero"


const Home = () => {
  return (
    <div className="bg-black">
        <Header/>
        <Gallery/>
        <TrandingHero/>
        <Hero/>
        <HomeFooter/>
        <FooterEnd/>
    </div>
  )
}

export default Home