import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import FacilitiesImg from "../assets/facilities.png"
import Footer from "../components/Footer";
import FacilitiesStay from "../components/FacilitiesStay";
import HotelInfo from "../components/Hotelinfo";
import Reservation from "../components/Reservation";


function Facilities (){
    return(
       <>
            <Navbar/>
            <Hero cName="hero-mid"
            heroImg={FacilitiesImg} 
            title="Facilities"
            text="Eu quam vulputate mollis vitae egestas 
            facilisi mauris urna faucibus suspendisse at 
            tempor orci felis eu nascetur."
            btnClass="hide"
            />
            <FacilitiesStay/>
            <HotelInfo/>
            <Reservation/>
            <Footer/>
       </>
 
 
    );
 }
 
 export default Facilities;