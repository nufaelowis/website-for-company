import Service from "./service"
function Ourservices({showdetailscervice,setshowdetailsservice}) {
     function showndetailscervice(){
     setshowdetailsservice(false)
               
       window.scrollBy({ top: 200, behavior: "smooth" })

                  }
  return (
    <div  id="Ourservices" className=" bg-[#FFF4F4] container mx-auto mt-20">
        
 <div className='   flex justify-center  items-center  '>
            <h1 className='font-bold text-3xl'>Our Services</h1>
         <div className='w-15 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-white-500 absolute  right-[510px] '> </div>
         <div className='w-15 h-1 bg-gradient-to-r from-white-500 via-purple-500 to-blue-500 absolute  left-[510px] '> </div>

        </div>
        
        <div className=" grid sm:grid-cols-3 mt-5 ">

         <Service title="front-end-developer" text=" they play a crical role in creating
          <br/>ilty mobile applcation that can run
            smoothly on both android and ios"/>
         <Service title="back-end-developer" text=" <br/>ilty mobile applcation that can run<br/>ilty mobile applcation that can run" />
         <Service title="UIUX-developer" text="<br/>ilty mobile applcation that can run<br/>ilty mobile applcation that can run"/>         
        </div>
         <div className="  grid sm:grid-cols-3 mt-5" text=" <br/>ilty mobile applcation that can run<br/>ilty mobile applcation that can run">

         <Service title="Fluter-developer" text="<br/>ilty mobile applcation that can run<br/>ilty mobile applcation that can run"/>
         <Service title="graphic designer" text="<br/>ilty mobile applcation that can run<br/>ilty mobile applcation that can run"/>
         <Service title="Markteng" text="<br/>ilty mobile applcation that can run<br/>ilty mobile applcation that can run"/>         
        </div>



        <button onClick={showndetailscervice} className="bg-[#6D0997]  hover:bg-[#8646a1] text-cyan-50  rounded-3xl  cursor-pointer mt-9 py-2 px-11 absolute right-22"
        
        
        > See Details</button>
        
    </div>
  )
}

export default Ourservices