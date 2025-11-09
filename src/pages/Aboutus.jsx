
import { Link } from 'react-router-dom'
import Group5 from '../assets/Group 5.png'
import AboutDetails from './AboutDetails';
function Aboutus({showdetails,setshowdetails}) {


  function showndetails(){
     setshowdetails(false)

                  }
  return (
    <div id='AboutUs' className=' bg-[#FFF4F4] container mx-auto ' >

        
    <div className='hidden flex-cols sm:flex mt-5 gap-29'>
<img className=' w-[100px] sm:w-[400px] px-5 ' src={Group5} />
   <div>
<div className='  sm:flex'>
      <h1 className='   text-3xl text-blue-400'> About Us </h1>
    <div className='  sm:w-25 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-white-500 absolute  right-[540px] mt-5  '> </div>
</div>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing e
        lit. Dolores quibusdam, maxime eveniet non ex, accusa
        mus atque ipsa magni expedita repudiandae, cupiditate facere rerum aliquid e
        um libero! Consequatur cumque accusantium temporibus i
        mpedit, similique enim debitis atque, doloremque officia vel 
        autem labore tenetur illo maiores nemo, velit delectus! Architect
        o, impedit? Cupiditate, distinctio quasi. Inventore dolorem quasi distinctio sed obcaecati velit id. Reiciendis?
       </p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Dignissimos eum, sapiente nulla doloribus officia commodi
         ! Velit aliquam aperiam, consequuntur harum rem quo ullam, q
         uod porro nulla corporis laborum reprehenderit, nihil volupta
         s beatae unde ad odio? Debitis a, temporibus nulla ipsa aliqua
         m facilis ut minus quidem tenetur, fuga aut similique repellat.</p>
     

      <button onClick={showndetails}
      className='bg-[#6D0997] 
      hover:bg-[#8646a1]
       text-cyan-50  mr-9  absolute right-2
        px-16 py-2 rounded-4xl
       cursor-pointer transition-transform 
       duration-500 ease-out hover:scale-110'> SEE DETAILS
       
       
       <Link to="/ad">  </Link>
        </button>
   </div>

   
    </div>
{/*  */}
    <div className=''>
  <div className=' flex-cols sm:flex md:hidden mt-5 gap-29'>
 <h1 className='   text-5xl text-blue-400'> About Us </h1>
   <div>
<div className='  sm:flex'>
     
      <img className=' mt-19 w-[300px] sm:w-[400px] px-5 ' src={Group5} />
    <div className='  sm:w-25 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-white-500 absolute  right-[540px] mt-5  '> </div>
</div>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing e
        lit. Dolores quibusdam, maxime eveniet non ex, accusa
        mus atque ipsa magni expedita repudiandae, cupiditate facere rerum aliquid e
        um libero! Consequatur cumque accusantium temporibus i
        mpedit, similique enim debitis atque, doloremque officia vel 
        autem labore tenetur illo maiores nemo, velit delectus! Architect
        o, impedit? Cupiditate, distinctio quasi. Inventore dolorem quasi distinctio sed obcaecati velit id. Reiciendis?
       </p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Dignissimos eum, sapiente nulla doloribus officia commodi
         ! Velit aliquam aperiam, consequuntur harum rem quo ullam, q
         uod porro nulla corporis laborum reprehenderit, nihil volupta
         s beatae unde ad odio? Debitis a, temporibus nulla ipsa aliqua
         m facilis ut minus quidem tenetur, fuga aut similique repellat.</p>
     

      <button onClick={showndetails}
      className='bg-[#6D0997] 
      hover:bg-[#8646a1]
       text-cyan-50  mr-9  absolute right-2
        px-16 py-2 rounded-4xl
       cursor-pointer transition-transform 
       duration-500 ease-out hover:scale-110'> SEE DETAILS
       
       
       <Link to="/ad">  </Link>
        </button>
   </div>

   
    </div>
    </div>
  {/*  */}
    </div>
  )
}

export default Aboutus