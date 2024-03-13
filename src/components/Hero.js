import "./HeroStyles.css";

function Hero (props){
   return(<>
     <div className={props.cName}>
        <img src={props.heroImg} alt="HeroImg" />
      <div className="gradient-overlay"></div>
      </div>
       <div className="hero-text">
           <h4>{props.welcome}</h4>
           <h1>{props.title}</h1>
           <h1>{props.title1}</h1>
           <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>
                {props.buttonText}
            </a>
       </div>
      
      </>

   )
}

export default Hero; 