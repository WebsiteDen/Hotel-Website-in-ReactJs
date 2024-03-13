import "./SpecialStyles.css"

function SpecialData(props){
    return(
       <div className="s-card">
            <div className="s-image">
              <img alt="img" src={props.image}/>
           </div>
             <h4>{props.heading}</h4>
              <p>{props.text}</p>
              <a href="/">{props.more}</a>
       </div>
    )
}   


export default SpecialData;