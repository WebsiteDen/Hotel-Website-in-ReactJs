import "./GalleryStyles.css";
import HotelGallery1 from "../assets/budget-hotel-gallery-img-1-min.jpg";
import HotelGallery2 from "../assets/budget-hotel-gallery-img-2-min.jpg";
import HotelGallery3 from "../assets/budget-hotel-gallery-img-3-min.jpg";
import HotelGallery4 from "../assets/budget-hotel-gallery-img-4-min.jpg";
import HotelGallery5 from "../assets/budget-hotel-gallery-img-5-min.jpg";
import HotelGallery6 from "../assets/budget-hotel-gallery-img-6-min.jpg";


const Gallery =()=>{
   return(
        <div className="gallery">
                <h3>Gallery</h3>
               <div className="top">
                 <div className="set1">
                    <img src={HotelGallery1} alt="/"/>
                    <img src={HotelGallery2} alt="/"/>
                 </div>
                 <div className="set2">
                 <img src={HotelGallery3} alt="/"/>
                 </div>
             </div>
             <div className="bottom1">
                 <div className="set2">
                 <img src={HotelGallery4} alt="/"/>
                 </div>
                 <div className="set1">
                     <img src={HotelGallery5} alt="/"/>
                     <img src={HotelGallery6} alt="/"/>
                 </div>
             </div>
        </div>
   )

}

export default Gallery;