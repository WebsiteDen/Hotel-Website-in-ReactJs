import  "./AttractionStyles.css";
import AtrractionData from "./AttractionData";
import Explore1 from "../assets/budget-hotel-things-to-do-img-1.jpg";
import Explore2 from "../assets/budget-hotel-things-to-do-img-2.jpg"
import Explore3 from "../assets/budget-hotel-things-to-do-img-3.jpg"
import Explore4 from "../assets/budget-hotel-things-to-do-img-4.jpg"
import Explore5 from "../assets/budget-hotel-things-to-do-img-5.jpg"
import Explore6 from "../assets/budget-hotel-things-to-do-img-6.jpg"



const Atrraction=()=>{
    return(
        <div className="attraction">
            <div className="texts">
                  <h5>EXPLORE SAN FRANSISCO</h5>
                  <h2>Small City. Big Attraction.</h2>
                  <p>Diam volutpat quis ultricies pellentesque nulla molestie 
                    aliquam praesent at consectetur varius<br/> aliquet risus viverra
                     pellentesque metus neque felis.</p>
            </div>
            <div className="attractionCol">
                 <AtrractionData 
                   image={Explore1}
                   number="01."
                   heading="Alcatraz Island"
                   text="Augue sapien in urna cras placerat diam risus tincidunt condimentum 
                   vestibulum tellus sed nunc turpis dignissim nec sagittis, phasellus tellus 
                   nam nibh cursus donec quam mi sem ullamcorper diam hendrerit tortor, sed 
                   faucibus tristique convallis urna, molestie purus tellus id amet, enim 
                   sit phasellus dui integer eros ullamcorper."
                   direction="Get Direction"
                 />
             
                 <AtrractionData
                   image={Explore2}
                   number="02."
                   heading="Fisherman's Wharf"
                   text="Pulvinar venenatis parturient vulputate sit faucibus semper erat
                    ac nulla egestas mi suspendisse aliquam mattis sagittis fermentum euismod
                     tellus feugiat duis ac lacus mauris a id sed ipsum dolor a scelerisque lobortis cursus
                    tincidunt maecenas tellus amet porttitor tincidunt convallis neque massa 
                    sapien montes mollis massa."
                   direction="Get Direction"
                 />
               
               <AtrractionData
                   image={Explore3}
                   number="03."
                   heading="Golden Gate Park"
                   text="Malesuada ut sagittis, consectetur morbi volutpat sit quam ipsum, 
                   nisi arcu, velit amet facilisis cursus eu curabitur tempor, quis pellentesque
                    pellentesque volutpat leo eu ultrices nibh sit pharetra arcu, tempus nibh
                    in interdum ac fermentum cursus amet leo, adipiscing vitae at dolor viverra 
                    consectetur quis dignissim."
                   direction="Get Direction"
                 />
             
             <AtrractionData
                   image={Explore4}
                   number="04."
                   heading="Queen Wilhelmina Tulip Garden"
                   text="Dui sodales aliquam amet velit non amet mi diam pulvinar in tortor 
                   augue sit porta purus orci nisl semper tellus enim lobortis a, sed cras 
                   cras pellentesque aliquet a ultrices sollicitudin et sed feugiat dapibus
                    phasellus tincidunt ullamcorper neque tincidunt urna id donec id ut sed 
                    risus nunc."
                   direction="Get Direction"
                 />
             
             <AtrractionData
                   image={Explore5}
                   number="05."
                   heading="Ocean Beach"
                   text="Tortor duis sit volutpat, et scelerisque et felis proin erat tellus
                    ac at et egestas duis urna risus odio blandit duis molestie cursus ipsum 
                    metus, eget urna mattis dictumst cras felis facilisis vellectus aenean 
                    gravida augue blandit rhoncus ipsum, id rutrum ultrices nulla pellentesque 
                    vitae, eget orci."
                    direction="Get Direction"
                 />
             
             <AtrractionData
                   image={Explore6}
                   number="06."
                   heading="Dutch Windmill"
                   text="Augue odio felis neque, non tortor nisi etiam bibendum duis enim, 
                   proin justo, montes, etiam sit vitae at sit pretium sed ut diam, id aliquam
                    pulvinar tristique sit pharetra, in sagittis, non suspendisse 
                   pulvinar tortor porttitor ipsum, tempus tincidunt mi faucibus 
                   sed nibh nisi sed amet in gravida."
                   direction="Get Direction"
                 />
             

            </div>

        </div>
    )
} 

export default Atrraction;