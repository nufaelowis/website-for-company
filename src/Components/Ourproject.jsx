import frame from '../assets/Frame.png'
import { FaAngleLeft } from "react-icons/fa6"
import { FaAngleRight } from "react-icons/fa6";
export const Ourproject = () => {
  return (
    <div id='Ourproject' className=' mt-31'>
         
        <div className='flex justify-center  items-center'>
            <h1 className='font-bold text-5xl sm:text-3xl'>Our Project</h1>
         <div className='w-15 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-white-500 absolute  right-[510px] '> </div>
         <div className='w-15 h-1 bg-gradient-to-r from-white-500 via-purple-500 to-blue-500 absolute  left-[510px] '> </div>

        </div>
 
      <div className=' flex-cols sm:flex justify-center items-center gap-30'>
         <FaAngleLeft className=' hidden sm:block text-4xl cursor-pointer' />
           <div className='mt-20 md:mt-1'>
            <div>
               <h2 className='text-left font-bold text-5xl'> car website</h2>
        

            </div>
             <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p> 
            <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p> 
            <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p> 
            <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p> 
            <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p> 
            <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p> 
            <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p> 
            <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p> 
            <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            <p> Lorem ipsum dolor sit amet. <span className='text-blue-800'> .......see more</span> </p>
           </div>

        <img className='w-[400px] mt-14' src={frame}  />
        <FaAngleRight  className=' hidden sm:block text-4xl cursor-pointer'/>
      </div>
    
    </div>
  )
}
