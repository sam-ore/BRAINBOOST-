import { Footer, Header, } from "../../component"
import Blog from "./Blog"
import Features from "./Features"
import HomeHero from "./HomeHero"
import Process from "./Process"


const Homecomp = () => {
  return (
    <div>
      <Header />
        <HomeHero />
        <Process />
        <Features />
        <Blog />
        <Footer />
    </div>
  )
}

export default Homecomp