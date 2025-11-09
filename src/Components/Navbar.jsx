import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
export default function Navbar() {
    const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const [shownav,setshownav]=useState(false)
   function handleshow()
   {
    setshownav(!shownav)
   }
  return (
    <div className=" container mx-auto mt-0  z-30  ">


       <div className="  md:hidden sm:block ml-[430px]  ">
        <CiMenuBurger onClick={handleshow} className=" cursor-pointer " />
       </div>
      <nav className="    flex items-center justify-around ">
           <div className=" sm:ml-1   md:text-xl mr-30  ">Logo</div>
        <div className={`  ${shownav ? "flex":"hidden"} md:flex items-center  `}>
          
        <ul className="  sm:flex gap-15 text-gray-700 font-medium   ">
          <li onClick={() => scrollTo("home")} className="cursor-pointer hover:underline hover:decoration-blue-500 hover:decoration-2 hover:text-purple-200">Home</li>
          <li onClick={() => scrollTo("AboutUs")} className="cursor-pointer hover:text-purple-200 hover:underline hover:decoration-blue-500 hover:decoration-2">About Us</li>
          <li onClick={() => scrollTo("Ourproject")} className="cursor-pointer hover:text-purple-200 hover:underline hover:decoration-blue-500 hover:decoration-2">Our Project</li>
          <li onClick={()=> scrollTo("Ourservices")} className="cursor-pointer hover:text-purple-200 hover:underline hover:decoration-blue-500 hover:decoration-2"> our Services</li>
          {/* <li className="cursor-pointer hover:text-purple-200 hover:underline hover:decoration-blue-200 hover:text-purple-200 hover:decoration-2">Training</li> */}
          <li  onClick={()=> scrollTo("Ourteam")} className="cursor-pointer hover:text-purple-200 hover:underline hover:decoration-blue-200 hover:decoration-2">Careers</li>

        </ul>
      <div className=" flex items-center ml-30 justify-between cursor-pointer border-2  border-purple-900 text-purple-600 sm:px-20 md:px-7 py-2 rounded-full hover:bg-purple-600 hover:text-white transition">
        
            <BsFillTelephoneFill className="mr-3" />
              <button className="    cursor-pointer text-purple-+\2z00">
      
          Contact Us
        </button>
      </div>
        </div>
     
      </nav>
  
    </div>
  );
}
