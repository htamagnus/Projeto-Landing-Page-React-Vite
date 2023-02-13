import Header from "./components/Header/Header"
import BannerPrincipal from "./components/BannerPrincipal/BannerPrincipal"
import Banner2 from "./components/Banner2/Banner2"
import Banner3 from "./components/Banner3/Banner3"
import Cards from "./components/Cards/Cards"
import ProvaSocial from "./components/ProvaSocial/ProvaSocial"
import Footer from "./components/Footer/Footer"
import ReactGA from "react-ga";

const TRACKING_ID = "G-9NJD55D22B"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {

  return (
    <div className="App">
      <Header />
      <BannerPrincipal />
      <Banner2 />
      <Banner3 />
      <Cards />
      <ProvaSocial />
      <Footer />
    </div>
  )
}

export default App
