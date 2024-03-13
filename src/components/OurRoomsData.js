import "./OurRoomsStyles.css";

function OurRoomsData(props){
    return(
        <div className="r-card">
            <div className="r-image">
              <img alt="img" src={props.image}/>
             </div>
             <h4>{props.heading}</h4>
              <p>{props.text}</p>
              <div className="r-icons">
                    <div className="r-icon">
                      <p><i className={props.icon1}></i><span className="icon">{props.iconname1}</span></p>
                       <p><i className={props.icon2}></i><span className="icon">{props.iconname2}</span></p>
                    </div>
                    <div className="r-icon">
                      <p><i className={props.icon3}></i><span className="icon">{props.iconname3}</span></p>
                       <p><i className={props.icon4}></i><span className="icon">{props.iconname4}</span></p>
                    </div>
                    <div className="r-icon">
                      <p><i className={props.icon5}></i><span className="icon">{props.iconname5}</span></p>
                       <p><i className={props.icon6}></i><span className="icon">{props.iconname6}</span></p>
                    </div>
                 
              </div>
              <a href="/">{props.reserve}</a>
        </div>

    )
}

export default OurRoomsData;