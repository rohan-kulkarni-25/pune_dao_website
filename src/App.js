import logo from "./logo.svg";
import "./App.css";
import Hero_section from "./components/HeroSection/Hero_section";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import Section5 from "./components/Section5/Section5";
import ReactGA from "react-ga";
import React, { useEffect} from 'react'
import { StickyContainer, Sticky } from 'react-sticky';
import UseAnalyticsEventTracker from "./useAnalyticsEventTracker";
const TRACKING_ID = "G-TE9BQY34KL"; // OUR_TRACKING_ID


ReactGA.initialize(TRACKING_ID);
function App() {
  useEffect(() => {
    console.log('load');
   load();
  }, []);

  const load = () =>  UseAnalyticsEventTracker("reload");

  return (
    <div className="App">
      <Hero_section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />

 <a className="bottom-0 right-20 sticky " href="https://bio.link/punedao"><img className="h-24 w-24 " src="https://i.ibb.co/Ch81MxH/Untitled-design-1.png"/></a>

            
          
      
      
    </div>
  );
}

export default App;
