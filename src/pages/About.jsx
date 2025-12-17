import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AboutBanner } from "../components/AboutBanner";
import Aboutcontent from "../components/Aboutcontent";
import Aboutourworks from "../components/Aboutourworks";


function About() {
  return (
    <div>
      <Navbar/>
      <AboutBanner/>
      <Aboutcontent/>
      <Aboutourworks/>
      <Footer/>
    </div>
  );
}

export default About;
