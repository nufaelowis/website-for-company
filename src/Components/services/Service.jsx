import group from '../../assets/Group 6.png'

function Service({title,text}) {
  return (

   <div className='relative w-[55%] overflow-y-hidden ml-28'   >
    <h3 className='absolute top-17 left-13  text-1xl font-bold text-blue-800 w-20'>{title}</h3>
   <img className=' w-44' src={group} alt='pl' />
   <p className=' top-49  '>
          {text} 
     
   </p>
  </div>
 


  )
}

export default Service