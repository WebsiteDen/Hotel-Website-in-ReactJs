import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Room from "../assets/room.png"
import Footer from "../components/Footer";
import OurRooms from "../components/OurRooms";
import HotelInfo from "../components/Hotelinfo";
import Special from "../components/Special";
import Testimonial from "../components/Testimonial";
import Reservation from "../components/Reservation";


function Rooms (){
    return(
       <>
       <Navbar/>
       <Hero cName="hero-mid"
       heroImg={Room} 
       title="Rooms"
       text = "Gravida maecenas mi iaculis non, posuere mattis urna, ac risus sit porta nunc."
       btnClass="hide"
       />
       <OurRooms/>
       <HotelInfo/>
        <Special/>
      <Testimonial/>
      <Reservation/>
       <Footer/>
       </>
 
    );
 }
 
 export default Rooms;