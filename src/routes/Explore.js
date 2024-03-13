import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ExploreImg from "../assets/explore.jpg";
import Footer from "../components/Footer";
import Atrraction from "../components/Attraction";
import Reservation from "../components/Reservation";


function Explore (){
    return(
       <>

       <Navbar/>
      <Hero cName="hero-mid"
       heroImg={ExploreImg} 
       title="Things to Do"
       text="Eu quam vulputate mollis vitae egestas facilisi mauris urna faucibus 
       suspendisse at tempor orci felis eu nascetur."
       btnClass="hide"
       />
      <Atrraction/>
      <Reservation/>
       <Footer/>
       </>
 
    );
 }
 
 export default Explore;