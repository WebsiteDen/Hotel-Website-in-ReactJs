import "./FacilitiesStayStyles.css";

function FacilitiesStayData(props){
    return(
        <div className="f-data">
             <span><i className={props.icon}></i></span>
             <h3>{props.heading}</h3>
             <p>{props.text}</p>
        </div>
    )
}

export default FacilitiesStayData;