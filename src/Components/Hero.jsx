import React from 'react'
import img from '../assets/img1.png'
const Hero = () => {
     const scroll = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id='home' className='   container mx-auto  mt-0 '>
        
           <section className=" flex  items-center justify-center px-10 relative">
 
        <div className=' sm:h-70 text-black-300 sm:w-15 border border-r-0 mb-19 absolute left-30  '>
            
        </div>
        <div className=' sm:h-10 text-black-300 border-r-1 mb-10 absolute top-29 left-45 '>

        </div>
        <div className=' sm:h-5 text-black-300  border-r-1 mb-6 absolute top-94 left-45 '>

        </div>
        <div className="max-w-lg">
          <h1 className="sm:text-7xl font-bold leading-tight z-20  text-3xl ">
            MAD <br /> SOLUTION
          </h1>
          <p className="mt-4 text-gray-600">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nemo vel eos magni vitae optio porro et doloremque voluptate?
          </p>
          <button onClick={()=>scroll("AboutUs")} className=" bg-[#6D0997]  hover:bg-[#8646a1] text-cyan-50  rounded-3xl  cursor-pointer mt-9 py-2 px-11 transition-transform duration-500 ease-out hover:scale-110 " >
            GET STARTED
          </button>
        </div>
 
 
         
        <div className=" sm:flex items-center gap-8  ">
             <img className=' w-[800px] sm:w-[500px]  py-30' src={img}  />
          
        </div>
      </section>



    </div>
  )
}

export default Hero