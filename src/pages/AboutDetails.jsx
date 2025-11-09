
import Navbar from '../Components/Navbar'
import landingpage from '../assets/landing page.png'
import mycart from '../assets/my cart.png'
import signup from '../assets/sing up.png'
import { CgCloseO } from "react-icons/cg";





import Footer from '../Components/Footer'

function AboutDetails({setshowdetails}) {
  return (
    <div>

               
        <div onClick={ ()=>setshowdetails(true)} >
           <CgCloseO className=' hover:bg-gray-500 rounded-2xl hover:text-white cursor-pointer text-2xl ml-10' />
            </div>        
   <div className='   sm:relative'>
     
<div className=' sm:flex justify-around '>
          <img className='w-80'  src={signup}  />     
       <img className='w-80' src={signup}  />
    <img className='w-80' src={mycart}  />
</div>
<div className=' sm:flex  '>
      <img className=' w-80 sm:absolute left-1/2 top-40' src={landingpage}  />
    <img className='w-80 sm:absolute left-50 top-40' src={landingpage}  />
</div>


   </div>


   <h6 className='text-blue-600 font-bold ml-14 mt-40 '>Case study:</h6>
   
   
     <p className='ml-10 mt-4'>
 
    cing elit. Laudantium dignissimos possimus facere facilis aut saepe. Repellendus officia molestiae illum iusto minima excepturi dolore consequuntur eveniet eos nesciunt quibusdam aliquam, laboriosam dolores rerum quam rem cum? Reiciendis harum earum obcaecati nesciunt iure quidem assumenda natus, et laborum libero sint molestias excepturi dignissimos necessitatibus eius ut repellendus qui


   </p>
 <br />
    <p className='ml-10'>
   
    cing elit. Laudantium dignissimos possimus facere facilis aut saepe. Repellendus officia molestiae illum iusto minima excepturi dolore consequuntur eveniet eos nesciunt quibusdam aliquam, laboriosam dolores rerum quam rem cum? Reiciendis harum earum obcaecati nesciunt iure quidem assumenda natus, et laborum libero sint molestias excepturi dignissimos necessitatibus eius ut repellendus qui

    dent molestiae inven
    tore tenetur? Illo, reiciendis nobis?
   </p>
            
      

    </div>
  )
}

export default AboutDetails