import "./HotelInfoStyles.css";

const HotelInfo=()=>{
   return(
     <div className="HotelInfo">
          <div className="HotelTop">
             <h1>Hotel Information</h1>
          </div>
          <div className="HotelBottom">
             <div>
                  <div className="alert">
                    <span><i className="fas fa-info-circle"></i></span>
                    <h4>HOTEL ALERT</h4>
                  </div> 
                  <p>
                  Some hotel features,<br/> including vitae, varius
                   ipsum<br/> ultrices adipiscing senectus<br/> turpis 
                   non due to COVID-19.
                  </p>
             </div>
             <div>
                 <div className="alert">
                    <span className="mar"><i className="fas fa-clock"></i></span>
                        <div>
                           <h4>CHECK-IN</h4>
                            <p>04:00 PM</p>
                        </div>
                  </div> 
                  <div className="alert">
                    <span><i class="fas fa-clock"></i></span>
                       <div>
                           <h4>CHECK-OUT</h4>
                            <p>11:00 AM</p>
                        </div>
                  </div> 
             </div>
             <div>
                 <div className="alert">
                    <span className="mar"><i className="fas fa-phone"></i></span>
                       <div>
                           <h4>PHONE NUMBER</h4>
                            <p>(415) 123-4567</p>
                        </div>
                  </div> 
                  <div className="alert">
                    <span><i class="fas fa-fax"></i></span>
                       <div>
                           <h4>FAX NUMBER</h4>
                            <p>(415) 234-5678</p>
                        </div>
                  </div> 
             </div>
             <div>
                 <div className="alert">
                    <span className="mar"><i className="fas fa-fax"></i></span>
                      <div>
                           <h4>NO SMOKING</h4>
                            <p>100% Smoke Free</p>
                        </div>
                  </div> 
                  <div className="alert">
                    <span><i class="fas fa-dog"></i></span>
                       <div>
                           <h4>PET POLICY</h4>
                            <p>Pet Allowed: Yes</p>
                        </div>
                  </div> 
             </div>


          </div>
     </div>
   )

}

export default HotelInfo;