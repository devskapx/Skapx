// import Blog from "../components/Blog";
import Counting from "../components/Counting";
import Footer from "../components/Footer";
import { HomeBanner } from "../components/HomeBanner";
import Navbar from "../components/Navbar";
import OurClients from "../components/OurClients";
import OurTestimonials from "../components/OurTestimonials";
import OurServicesCard from "../components/OurServicesCard";
import Whowehelp from "../components/Whowehelp";
import { WhyChoose } from "../components/WhyChoose";
import WorkSection from "../components/WorkSection";

function Home() {
  return (
    <div>
      <Navbar/>
      <HomeBanner/>
      <WhyChoose/>
      <OurServicesCard/>
      <WorkSection/>
      <Counting/>
      <OurClients/>
      <Whowehelp/>
      <OurTestimonials/>
      {/* <Blog/> */}
      <Footer/>
    </div>
  );
}

export default Home;
