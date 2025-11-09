import Navbar from "./Components/Navbar"
import Aboutus from "./pages/Aboutus"
import {Ourproject}  from "./Components/Ourproject"
import Hero from "./Components/Hero"
import Ourservices from "./Components/services/Ourservices"
import OurTeam from "./Components/OurTeam/OurTeam"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutDetails from "./pages/AboutDetails"
import ServicesDetails from "./pages/ServicesDetails"

 import React, { useState } from 'react'
 import Footer from "./Components/Footer"

function App() {

  const [showdetails,setshowdetails]=useState("true");
  const [showdetailsservice,setshowdetailsservice]=useState("true");

  return (
    <>


    <BrowserRouter>

    <div className="">
    
  <div className=" br">
         <Navbar/>
        <Hero/>
  </div>
          {showdetails? <Aboutus showdetails={showdetails}
           setshowdetails={setshowdetails} /> :<AboutDetails  setshowdetails={setshowdetails}/> }  
          <Ourproject/>  
           {showdetailsservice? <Ourservices showdetailscervice={showdetailsservice}
           setshowdetailsservice={setshowdetailsservice} /> :  <ServicesDetails setshowdetailsservice={setshowdetailsservice}/> } 
        {/* <Ourservices/> */}
         <OurTeam/>
    </div>

    
    <Routes>


      <Route  path="/ad" element={<AboutDetails/>}   />
    </Routes>
    
    <Footer/>


    {/* <Ourservices/> */}
    </BrowserRouter>
        
    </>
  )
}

export default App
