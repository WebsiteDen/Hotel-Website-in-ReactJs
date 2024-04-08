import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Map from "../components/Map"
import hero from "../assets/hero.png"
import AboutHotel from "../components/AboutHotel";
import Ourfacilities from "../components/Ourfacilities";
import Best from "../components/Best";
import Special from "../components/Special";
import Testimonial from "../components/Testimonial"
import HotelInfo from "../components/Hotelinfo";
import Gallery from "../components/Gallery";
import Reservation from "../components/Reservation";

function Home (){
   return(
      <>
       <Navbar/>
       <Hero
       cName="hero"
       heroImg={hero}
       welcome="Welcome To"
       title="Crown Hotel"
       title1="San fransisco"
       text = "Gravida maecenas mi iaculis non, posuere mattis urna, ac risus sit porta nunc."
       buttonText="Check Rooms"
       url = "/Hotel-Website-in-ReactJs"
       btnClass="show"
       />
       <AboutHotel/>
       <Map/>
       <Ourfacilities/>
       <Best/>
       <Special/>
       <Testimonial/>
       <HotelInfo/>
       <Gallery/>
       <Reservation/>
       <Footer/>
   
      </>

   );
}

export default Home;