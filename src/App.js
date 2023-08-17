import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Routers from "./Routers";
import Switch from 'react-ios-switch'
import React from "react";
//import Advanced from './components/Advanced'
import './custom.css';





function App() {
  const location = useLocation();
 
  return <Routers />;
}

export default App;
