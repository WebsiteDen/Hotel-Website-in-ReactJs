import TestimonialData from "./TestimonialData";
import  "./TestimonialStyles.css";
import Reviewer1 from "../assets/budget-hotel-reviewer-1.jpg";
import Reviewer2 from "../assets/budget-hotel-reviewer-2.jpg";
import Reviewer3 from "../assets/budget-hotel-reviewer-3.jpg";
import Reviewer4 from "../assets/budget-hotel-reviewer-4.jpg";


const Testimonial=()=>{
    return(
       <div className="Reviewers">
           <div className="testimonial">
            <div className="guest">
                 <h3>What Our Guests Say</h3>
                 <p>Neque ut et velit dictum molestie at pellentesque aliquet
                   magna<br/> ut tincidunt ullamcorper mauris mi et.</p>
            </div>
             <div className="rating">
                   <div>
                       <h2>4.6</h2>
                       <p>Out of 5</p>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star-half"></i></span>
                       
                   </div>
                   <hr/>
                   <div className="ratingIcons">
                     <p><span><i class="fa-brands fa-google  guesticon"></i><span className="text">1920 Ratings</span></span></p> 
                      <p><span><i class="fa-brands fa-google guesticon"></i><span className="text">920 Ratings</span></span></p>
                      <p> <span><i class="fa-brands fa-facebook guesticon"></i><span className="text">1024 Likes</span></span></p>
                   </div>
                 </div>
            </div>
            <div className="t-guest">
                  <TestimonialData
                    text='“Pharetra ut commodo dui at consequat, vitae imperdiet id quisque faucibus erat erat nulla a amet.”'
                     image={Reviewer1}
                     name="MORGAN JONATHAN"
                  />
                    <TestimonialData
                    text='"Proin nulla mauris et volutpat adipiscing suspendisse 
                    vehicula blandit sagittis orci etiam morbi elit etiam semper 
                    eu lacus pretium hac nisl leo amet ullamcorper."'
                     image={Reviewer2}
                     name="EMILY HUNT"
                  />
             </div>
             <div className="t-guest">
                  <TestimonialData
                    text='“Pharetra ut commodo dui at consequat, vitae imperdiet id quisque faucibus erat erat nulla a amet.”'
                     image={Reviewer3}
                     name="MORGAN JONATHAN"
                  />
                    <TestimonialData
                    text='"Proin nulla mauris et volutpat adipiscing suspendisse 
                    vehicula blandit sagittis orci etiam morbi elit etiam semper 
                    eu lacus pretium hac nisl leo amet ullamcorper."'
                     image={Reviewer4}
                     name="EMILY HUNT"
                  />
             </div>


       </div>

    )
}

export default Testimonial;