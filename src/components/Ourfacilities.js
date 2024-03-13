import "./OurfacilitiesStyles.css"

const Ourfacilities=()=>{
    return(
      <div className="Ourfacilities">
               <div>
               <h3>Facilities</h3>
                <p>Interdum curabitur platea turpis orci auctor in scelerisque
                   <br/>ac ut eleifend at at leo laoreet at ut semper eget laoreet 
                  vestibulum a elementum nec</p>
               </div>
               <div className="facilities1">
                  <div className="icons">
                    <span><i class="fa-solid fa-p"></i></span>
                  <h4>Free Parking</h4>
                  </div>
                  <div className="icons">
                    <span><i class="fa-solid fa-wifi"></i></span>
                  <h4>Free Wi-fi</h4>
                  </div>
                  <div className="icons">
                    <span><i class="fa-solid fa-dog"></i></span>
                  <h4>Pet Friendly</h4>
                  </div>
                  <div className="icons">
                    <span><i class="fa-solid fa-filter"></i></span>
                  <h4>Minibar</h4>
                  </div>

               </div>
               <div className="facilities1">
                  <div className="icons">
                    <span><i class="fa-solid fa-clock"></i></span>
                  <h4>24-hours Front Desk</h4>
                  </div>
                  <div className="icons">
                    <span><i class="fa-solid fa-bus"></i></span>
                  <h4>Shuttle Bus Service</h4>
                  </div>
                  <div className="icons">
                    <span><i class="fa-solid fa-bicycle"></i></span>
                  <h4>Bicycle Rental</h4>
                  </div>
                  <div className="icons">
                    <span><i class="fa-solid fa-location-dot"></i></span>
                  <h4>Downtown Location</h4>
                  </div>

               </div>
      </div>
    )
}

export default Ourfacilities;