import { Component } from "react";
import "./AbouthotelStyles.css";



class AbouthotelData extends Component{
    render(){
        return(
        
            <div className={this.props.className}>
                  <div className="image">
                   <img alt="img" src={this.props.image}/>
                 </div>
               <div className="abouttext">
                   <h2>{this.props.heading}</h2>
                    <h5>{this.props.text1}</h5>
                   <p>{this.props.text2}</p>
                   <a href="/">{this.props.button}</a>
               </div>
             
          </div>
        );
    };
}

export default AbouthotelData;