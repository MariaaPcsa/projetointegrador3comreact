

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './index.css';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";


import Location from "./pages/Location";
import Events from "./pages/Events";
import Generosity from "./pages/Generosity";
import Ctn from "./pages/Ctn";
import Ebnt from "./pages/Ebnt";
import WhoWeAre from "./pages/WhoWeAre";
import Footer from "./components/Footer";
import Sabedoria from "./pages/Sabedoria";
import Home from "./pages/Home";






function App() {
  

  return (
    <>

   
    
      <BrowserRouter>
   
      <Header/>

 <Routes>
 
    <Route path="/" element={<Home/>} />
<Route path="/events" element={<Events/>} />
   <Route path="/generosity" element={<Generosity/>} /> 
   <Route path="/location" element={<Location/>} /> 
   <Route path="/sabedoria" element={<Sabedoria/>} /> 
   <Route path="/ctn" element={<Ctn/>} />
   <Route path="/ebnt" element={<Ebnt/>} />
   <Route path="/whoweare" element={<WhoWeAre/>} />
   
   
   
 </Routes>
<Footer/> 
</BrowserRouter>

    </>


  )
}

export default App
