import { Component } from "react";
import "./NavbarStyles.css"
import { Menuitems } from "./Menuitems";
import { Link } from "react-router-dom";

class Navbar extends Component{
    
     state =  {clicked: false}
     handleClicked = () =>{
        this.setState({ clicked: !this.state.clicked})
     }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Crown Hotel</h1>
                    
                 <div className="menu-icons" onClick={this.handleClicked}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                 </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {Menuitems.map((item, index)=>{
                        return(
                        <li key={index}>
                         <Link className={item.cName} to={item.url}>
                            {item.title}
                          </Link>
                          </li>
                        );
                    })}
                     <button>Reservation</button>
                </ul>
            </nav>
        );
    }
}

export default Navbar;