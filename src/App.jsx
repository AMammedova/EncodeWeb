import "./App.css";
import Header from "../components/Header/Header";
import About from "./About/About";
import AboutContent from "./AboutContent/AboutContent";
import AboutTools from "./AboutTools/AboutTools";
import Intro from "./Intro/Intro";
import WhyUs from "./WhyUs/WhyUs";
import Functional from "./Functional/Functional";
import Galeria from "./Galeria/Galeria";
import Slider from "./Slider/Slider";
import Contact from "./Contact/Contact";
import Footer from "../components/Footer/Footer";
import CustomSlider from "./CustomSlider/CustomSlider";
import IntroMobile from "./IntroMobile.svg/IntroMobile";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    // Set the custom scrollbar design to the body
    document.body.style.overflow = "overlay";
    document.body.style.scrollbarWidth = "thin";
  }, []);
  return (
    <div className="App">
      <div className="Container">
        <Header />
        <Intro />
       
      </div>
      <IntroMobile/>

      <div className="Container">
      <section id="about">
          <About />
        </section>
      </div>
      <AboutContent />
      <div className="Container">
        <AboutTools />
      </div>
        <WhyUs/>
        <div className="Container">
        <Functional />
        <Slider/>
        <Galeria/>
       
      </div>
      <Contact/>
      <div className="Container">
        {/* <CustomSlider/> */}
        <Footer/>
       
      </div>
      
    </div>
  );
}

export default App;
