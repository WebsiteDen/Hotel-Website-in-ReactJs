import "./styles.css";
import Home from "./routes/Home";
import Rooms from "./routes/Rooms";
import Explore from "./routes/Explore"
import { Route, Routes } from "react-router-dom";
import Facilities from "./routes/Facilities";
import Contact from "./routes/Contact";




export default function App() {
  return (
    <div className="App">
        
        <Routes basenam="/Hotel-Website-in-ReactJs">
          <Route path="/Hotel-Website-in-ReactJs" element={<Home/>}/>
          <Route path="/rooms" element={<Rooms/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route  path="/facilities" element={<Facilities/>} />
          <Route  path="/contact" element={<Contact/>} />
          
        </Routes>
        
    </div>
  );
}
