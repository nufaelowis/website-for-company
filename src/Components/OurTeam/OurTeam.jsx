import { useState } from "react";
import Employ from "./employ"
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import  employ1 from '../../assets/Group 10.png'
import teama from '../../assets/teama.png'
 import safa from '../../assets/saffa.png'
const images=[teama,employ1,safa]
 

const OurTeam = () => {
  const [showmore,setshowmore]=useState(false)
  function shownmore()
  {
    setshowmore(true)

  }
  return (
    <div  id="Ourteam" className="container mx-auto mt-24">
        


         <div className='flex justify-center  items-center  '>
            <h1 className='font-bold text-3xl'> Meet Our Team</h1>
         <div className='w-15 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-white-500 absolute  right-[500px] '> </div>
         <div className='w-15 h-1 bg-gradient-to-r from-white-500 via-purple-500 to-blue-500 absolute  left-[500px] '> </div>

        </div>
        <div>
            <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, ad!
            </p>
        </div>

 <div className="   grid sm:grid-cols-3 mt-4 ml-30  ">

        <Employ employ1={images[0]} />
       <Employ employ1={images[1]} />
       <Employ  employ1={images[2]}/>

 </div>
 {
  showmore &&
  <div>
  <div className=" sm:grid sm:grid-cols-3 mt-4 ml-30">

             <Employ employ1={images[0]} />
       <Employ employ1={images[1]} />
       <Employ  employ1={images[2]}/>
</div>
  <div className=" sm:grid sm:grid-cols-3 mt-4 ml-30">

             <Employ employ1={images[0]} />
       <Employ employ1={images[1]} />
       <Employ  employ1={images[2]}/>
</div>



                   <button 
       
       onClick={()=>setshowmore(false)}
       className={`${ showmore }  hover:bg-[#8646a1]  bg-[#6D0997] flex items-center justify-center gap-1  text-cyan-50  rounded-3xl  cursor-pointer  py-2 px-11 absolute right-22 buttom-0 `}> 
         <HiArrowNarrowLeft className="mt-1" />
         see less
       </button>
            
            </div>
 }
  
  {
    !showmore &&
    <button 
       
       onClick={shownmore}
       className={`${ showmore }  hover:bg-[#8646a1]  bg-[#6D0997] flex items-center justify-center gap-1  text-cyan-50  rounded-3xl  cursor-pointer mt-9 py-2 px-11 absolute right-22 `}> see more 
         <HiArrowNarrowRight className="mt-1" />
       </button>
  }
       
       
      
 
    </div>
  )
}

export default OurTeam