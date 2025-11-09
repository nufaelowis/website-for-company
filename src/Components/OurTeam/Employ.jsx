import React from 'react'

import tema from '../../assets/teama.png'
import montier from '../../assets/monitor.png'
import { FaFigma } from "react-icons/fa";
function Employ({employ1}) {
  return (
    <div>

          <div className=' '>
        
                    <img  src={employ1} alt="" />
                   
                  <div className='ml-7'>
                     <h3 className=' ml-5 text-xl text-blue-300 font- font-extrabold mt-4'>Lorem  ipsum</h3>
                      <p className='mt-3'>
                        Nam elemtum volutpat
                    </p>
                    <div className='flex gap-10 items-center justify-center mt-3 mr-48'>
                        <img src={montier} alt="" />
                    <FaFigma className='text-2xl font-bold ' />
                    </div>
                  </div>

                  </div>
         </div>
  )
}

export default Employ