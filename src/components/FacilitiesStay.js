import FacilitiesStayData from "./FacilitiesStayData";
import "./FacilitiesStayStyles.css";

const FacilitiesStay=()=>{
    return(
        <div className="facilitiesStay">
                 <div className="Facilitiescol-1">
                  <h2>Facilities to Enhance<br/> Your Stay</h2>
                  <p>Amet, est laoreet mollis ligula luctus 
                    nibh bibendum convallis elementum semper<br/> 
                    scelerisque risus tellus sed gravida.</p>
                </div>

                <div className="facilitiesCol2">
                        <FacilitiesStayData
                         icon="fa-solid fa-wifi"
                         heading="Free Wi-Fi"
                         text="Magna sagittis faucibus mauris, sit enim 
                         varius sem ultricies sed netus tortor tortor fusce."

                        />
                           <FacilitiesStayData
                         icon="fa-solid fa-ban-smoking"
                         heading="Smoke-Free"
                         text="Magna sagittis faucibus mauris, sit enim 
                         varius sem ultricies sed netus tortor tortor fusce."

                        />
                           <FacilitiesStayData
                         icon="fa-solid fa-p"
                         heading="Free Parking"
                         text="Magna sagittis faucibus mauris, sit enim 
                         varius sem ultricies sed netus tortor tortor fusce."

                        />
                </div>
                <div className="facilitiesCol2">
                        <FacilitiesStayData
                         icon="fa-solid fa-dog"
                         heading="Pet Friendly"
                         text="Magna sagittis faucibus mauris, sit enim 
                         varius sem ultricies sed netus tortor tortor fusce."

                        />
                           <FacilitiesStayData
                         icon="fa-solid fa-mug-saucer"
                         heading="Free Breakfast"
                         text="Magna sagittis faucibus mauris, sit enim 
                         varius sem ultricies sed netus tortor tortor fusce."

                        />
                           <FacilitiesStayData
                         icon="fa-solid fa-dumbbell"
                         heading="Fitness Center"
                         text="Magna sagittis faucibus mauris, sit enim 
                         varius sem ultricies sed netus tortor tortor fusce."

                        />
                </div>
        </div>
    )
}

export default FacilitiesStay;