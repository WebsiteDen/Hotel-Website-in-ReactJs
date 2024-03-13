import  "./TestimonialStyles.css";

function TestimonialData(props){
     return(
      <div className="t-data">
            <div className="t-rating">
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star-half"></i></span>
           </div>
            <p>{props.text}</p>
             <div className="ourguest">
                <img src={props.image} alt="/"/>
                <h4>{props.name}</h4>
             </div>

      </div>
     )
}

export default TestimonialData;