import "./SpecialStyles.css"
import SpecialData from "./SpecialData";
import SpecialOffer1 from "../assets/budget-hotel-special-offer-img-1-min.jpg"
import SpecialOffer2 from "../assets/budget-hotel-special-offer-img-2-min.jpg"


const Special=()=>{
    return(
       <div className="Special">
            <div className="Special-Col1">
                <h3>Special Offers</h3>
                <a href="/">View All Offers</a>
            </div>
            <div className="Special-Col2">
                 <SpecialData
                 image={SpecialOffer1}
                 heading="Stay 3 Nights & Save!"
                 text="Amet elementum vitae ultrices accumsan est nunc, ut 
                 mattis enim leo sed dolor ultrices habitant lacus auctor 
                 lectus sagittis.
                 "
                 more="View Detail &nbsp;&rarr;"
                 />
                    <SpecialData
                 image={SpecialOffer2}
                 heading="Mobile Only Discount"
                 text="
                 Dolor rhoncus malesuada amet, purus mollis adipiscing sit 
                 bibendum in odio a, iaculis eget dui odio mi, dictumst sem viverra.
                 "
                 more="View Detail &nbsp;&rarr;"
                 />

            </div>
       </div>
    )
} 

export default Special; 