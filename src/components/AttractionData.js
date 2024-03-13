import  "./AttractionStyles.css";

function AtrractionData(props){
     return(
        <div className="attraction-col">
            <div className="a-image">
              <img alt="img" src={props.image}/>
           </div>
             <div className="a-text">
               <h4>{props.number}</h4>
               <h3>{props.heading}</h3>
                <p>{props.text}</p>
               <a href="/">{props.direction}</a>
             </div>
        </div> 
     )
}

export default AtrractionData;
