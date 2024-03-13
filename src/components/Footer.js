import "./FooterStyles.css"

const Footer = () =>{
    return(
      <div className="footer">
          
            <div className="footertop">
                <div> 
                    <h3>Crown Hotel</h3>
                    <p>Rhoncus blandit mollis vulputate tellus, 
                    quam enim urna neque, eu varius aliquam id quisque
                     eget at lorem tellus ac tincidunt.</p>
                     <span>
                        <a href="/">
                                <i className="fa-brands fa-facebook-square"></i>
                            </a>
                            <a href="/">
                                <i className="fa-brands fa-instagram-square"></i>
                            </a>
                            <a href="/">
                                <i className="fa-brands fa-behance-square"></i>
                            </a>
                            <a href="/">
                                <i className="fa-brands fa-twitter-square"></i>
                            </a>
                   </span>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">About Us</a>
                    <a href="/">Reviews</a>
                    <a href="/">Directions</a>
                    <a href="/">News</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>


                    <h4>Customer Help</h4>
                    <a href="/">Customer Support</a>
                    <a href="/">Guest Feedback</a>
                    <a href="/">Sitemap</a>
                    <a href="/">Responsible Disclosurep</a>
                    <a href="/">FAQs</a>
                </div>
                <div className="ourcontact">
                    <h4>Contact</h4>
                    <p>Sea Scape Hotel</p>
                    <p>1234 Market Street,</p>
                    <p>San Fransisco, CA 98765</p>
                    <p>1-123-456-7890</p>
                    <p>mail@example.com</p>
                   
                </div>
           </div>
           <hr/>

           <div className="footerbottom"> 
                <p>Copyright &copy; 2024 Budget Hotel | Powered by Budget Hotel</p>
           </div>
      </div>     
 

    );
} 

export default Footer;