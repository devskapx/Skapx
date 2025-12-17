import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ServicesBanner } from "../components/ServicesBanner";
import OurServicestwocard from "../components/OurServicestwocard";
import OurTestimonials from "../components/OurTestimonials";


function Services() {
  return (
    <div>
      <Navbar/>
      <ServicesBanner/>
      <OurServicestwocard/>
      <OurTestimonials/>
      <Footer/>
    </div>
  );
}

export default Services;