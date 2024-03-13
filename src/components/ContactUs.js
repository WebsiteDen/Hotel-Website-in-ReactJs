import "./ContactStyles.css";

const ContactUs=()=>{
    return(
        <div className="ContactUs">
             <div className="ContactUsCol">
                   <div className="getintouch">
                          <h3>Get in Touch</h3>
                          <p>Sed volutpat vestibulum, non leo molestie eu
                             justo mauris quis eu, at pretium rutrum amet, 
                             mauris euismod eu facilisis enim, at non
                              scelerisque dolor.</p>
                            <div className="ReachUs">
                                <span><i className="fa-solid fa-location-dot"></i><span className="text">123 Beach St, San Francisco, CA 1234</span></span>
                                <span><i className="fa-solid fa-phone"></i><span className="text">+1 123 456 7890</span></span>
                                <span><i className="fa-solid fa-message"></i><span className="text">mail@example.com</span></span>
                                <span><i className="fa-solid fa-clock"></i><span className="text">8:30 AM – 5:30 PM</span></span>
                            </div>
                   </div>
                   <div className="ContactMap">
                   <iframe  title="MyFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100941.
                            69217478138!2d-122.49956245394371!3d37.75656421532703!2m3!1f0!2f0!3f0!3m2!
                            1i1024!2i768!4f13.1!3m3!1m2!1s0x808580953b304983%3A0xf80b9c8c620e6b91!2
                            sHoliday%20Inn%20San%20Francisco-Golden%20Gateway%2C%20an%20IHG%20Hotel!
                             5e0!3m2!1sen!2sng!4v1708886187840!5m2!1sen!2sng" width="100%" height="450" 
                             allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div className="mapbutton contactbutton">
                        <a href="/"><i class="fa-solid fa-location-arrow"></i>Get direction</a>
                        </div>

                   </div>
             </div>


        <div className="ContactMessage">
            <h3>Send a Message</h3>
            <p className="c-text">Volutpat eu mauris, arcu, consectetur 
            nulla massa interdum<br/> interdum ornare
             senectus adipiscing eget nibh aliquam.</p>
              
            <div className="ContactInputs">
                  <div className="Name">
                       <p className="text">Name:</p>
                       <div className="namecol">
                       <div>
                          <input type="name"/>
                          <p>First</p>
                      </div>
                        <div>
                           <input type="name"/>
                           <p>Last</p>
                        </div>
                        </div>
                  </div>
                  <div className="Email">
                       <p className="text">Email:</p>
                    <input type="email"/>
                  </div>
                  <div className="Subject">
                       <p className="text">Subject:</p>
                    <input type="text"/>
                  </div>
                  <div className="Message" >
                       <p className="text">Comment or Message:</p>
                      <textarea name="" id="" cols="30" rows="10"></textarea>
                  </div>
            </div>   
               

        </div>
              
        </div>
    )
}

export default ContactUs;