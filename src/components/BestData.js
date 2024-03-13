import "./BestStyles.css"

function BestData(props){
    return(
        <div className="b-card">
            <div className="b-image">
              <img alt="img" src={props.image}/>
           </div>
             <h4>{props.heading}</h4>
              <p>{props.text}</p>
              <a href="/">{props.more}</a>
        </div>
    )
}

export default BestData;