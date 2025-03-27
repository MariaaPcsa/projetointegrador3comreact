

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./componts/Header";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  

  return (
    <>
      
      <BrowserRouter>

<Header/>


 <Routes>
   {/* <Route path="/home" element={<Home/>} />
   <Route path="/events" element={<Events/>} />
   <Route path="/generosity" element={<Generosity/>} />
   <Route path="/location" element={<Location  />} /> */}
   
   
   
 </Routes>

</BrowserRouter>
    </>
  )
}

export default App
