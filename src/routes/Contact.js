import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/contactus.jpg";
import Footer from "../components/Footer";
import Reservation from "../components/Reservation";
import ContactUs from "../components/ContactUs";


function Contact (){
    return(
       <>

       <Navbar/>
      <Hero cName="hero-mid"
       heroImg={ContactImg} 
       title="Contact"
       text="Eu quam vulputate mollis vitae egestas facilisi mauris urna faucibus 
       suspendisse at tempor orci felis eu nascetur."
       btnClass="hide"
       />
      <ContactUs/>
      <Reservation/>
       <Footer/>
       </>
 
    );
 }
 
 export default Contact;