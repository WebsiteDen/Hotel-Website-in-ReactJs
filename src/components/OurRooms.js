import "./OurRoomsStyles.css";
import OurRoomsData from "../components/OurRoomsData";
import HotelRooms1 from "../assets/budget-hotel-rooms-img-1.jpg";
import HotelRooms2 from "../assets/budget-hotel-rooms-img-2.jpg";
import HotelRooms3 from "../assets/budget-hotel-rooms-img-3.jpg";
import HotelRooms4 from "../assets/budget-hotel-rooms-img-4.jpg";

const OurRooms =()=>{
    return(
        <div className="ourrooms">
             <h4>SEA SCAPE HOTEL</h4>
             <h2>Find a Perfect Family Budget Hotel in The Near of San Francisco Shoreline</h2>
        <div className="room-card">
           <OurRoomsData
               image={HotelRooms1}
               heading="Single Room"
               text="Tempus mattis posuere urna condimentum
                metus leo adipiscing risus tristique lobortis gravida venenatis."
                icon1="fa-solid fa-bed" iconname1="1 King bed"
                icon2="fa-solid fa-wifi" iconname2="Free wi-fi"
                icon3="fa-solid fa-tv" iconname3="Plasma TV"
                icon4="fa-solid fa-ban-smoking" iconname4="Smoke-free"
               
                reserve="Reserve Now"
           />
               <OurRoomsData
               image={HotelRooms2}
               heading="Double Room"
               text="Nisl ultrices facilisi vitae, ullamcorper curabitur mauris dis 
               lectus quisque congue posuere phasellus mauris amet."
                icon1="fa-solid fa-bed" iconname1="2 King bed"
                icon2="fa-solid fa-wifi" iconname2="Free wi-fi"
                icon3="fa-solid fa-tv" iconname3="Plasma TV"
                icon4="fa-solid fa-ban-smoking" iconname4="Smoke-free"
                icon5="fa-solid fa-newspaper" iconname5="Free newspaper"

               
                reserve="Reserve Now"
           />
        </div>
        <div className="room-card">
           <OurRoomsData
               image={HotelRooms3}
               heading="Super Suite"
               text="Venenatis, aenean egestas iaculis bibendum tristique id urna vel 
               urna, id turpis orci, blandit vitae ultrices."
                icon1="fa-solid fa-bed" iconname1="1 King+Queen"
                icon2="fa-solid fa-wifi" iconname2="Free wi-fi"
                icon3="fa-solid fa-tv" iconname3="Plasma TV"
                icon4="fa-solid fa-ban-smoking" iconname4="Smoke-free"
                icon5="fa-solid fa-newspaper" iconname5="Free newspaper"
                icon6="fa-solid fa-person-shelter" iconname6="Indoor corridor"
               
                reserve="Reserve Now"
           />
               <OurRoomsData
               image={HotelRooms4}
               heading="Deluxe Suite"
               text="Molestie enim, faucibus iaculis diam volutpat volutpat, 
               ac ultrices cras ligula eget sodales euismod dignissim."
                icon1="fa-solid fa-bed" iconname1="2 Queen"
                icon2="fa-solid fa-wifi" iconname2="Free wi-fi"
                icon3="fa-solid fa-tv" iconname3="Plasma TV"
                icon4="fa-solid fa-ban-smoking" iconname4="Smoke-free"
                icon5="fa-solid fa-newspaper" iconname5="Free newspaper"
                icon6="fa-solid fa-person-shelter" iconname6="Indoor corridor"

               
                reserve="Reserve Now"
           />
        </div>


        </div>
    )
}

export default OurRooms;