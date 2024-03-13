import aboutHotel from "../assets/about-hotel.jpg"
import AbouthotelData from "./AbouthotelData";


const AboutHotel= () =>{
    return(
        <div className="abouthotel"> 
        <AbouthotelData
      
          className = "ourhotel"
          image={aboutHotel}
         heading="Get Comfy in The Near of San Fransisco shoreline"
         text1="Purus mattis massa, ut nulla eu facilisi nascetur eu risussed
                dolor auctor arcu turpis elementum, nam venenatis nibh fusce 
                pellentesque habitant donec consequat."
        text2="
        Cursus tempus, tincidunt quis sem sapien id non eget sed in consequat 
        tellus phasellus orci in semper elit porttitor eget metus, aliquet egestas
         aliquet erat congue eget urna diam, tellus at leo, enim eu enim, in nisl,
          facilisi volutpat lacus."
        button="Discover more"
      
        />


        </div>

    );
}; 

export default AboutHotel;