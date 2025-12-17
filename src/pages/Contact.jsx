import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ContactBanner } from "../components/ContactBanner";
import Contactusform from "../components/Contactusform";


function Contact() {
  return (
    <div>
      <Navbar/>
      <ContactBanner/>
      <Contactusform/>
      <Footer/>
    </div>
  );
}

export default Contact;