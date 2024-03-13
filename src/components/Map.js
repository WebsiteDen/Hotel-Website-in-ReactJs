import "./MapStyles.css"

const Map = () => {
  return (
    <div className="Map">
       <div className="reach">
           <div>
           <h3>How to Reach</h3>
            <p>Nibh tempor euismod nulla risus, elementum sed volutpat</p>
           </div>
           <div className="mapbutton"><a href="/"><i class="fa-solid fa-location-arrow"></i>Get direction</a></div>
       </div>
       <div className="themap">
       <iframe  title="MyFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100941.
       69217478138!2d-122.49956245394371!3d37.75656421532703!2m3!1f0!2f0!3f0!3m2!
       1i1024!2i768!4f13.1!3m3!1m2!1s0x808580953b304983%3A0xf80b9c8c620e6b91!2
       sHoliday%20Inn%20San%20Francisco-Golden%20Gateway%2C%20an%20IHG%20Hotel!
       5e0!3m2!1sen!2sng!4v1708886187840!5m2!1sen!2sng" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
    </div>
  )
}

export default Map;
