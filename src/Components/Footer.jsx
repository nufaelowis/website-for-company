import React from 'react'
import shapemaker from '../assets/shapemaker.png'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className=' font-medium relative mt-22'>
       
<div className=' w-full absolute sm:mt-0  mt-10   sm:top-22 flex justify-between items-center px-10'>
    <p>Logo</p>

    <div>

<div className='flex gap-20 mb-4 items-center justify-center'>
  <p className=''> Privacy Policy</p>

<p >Terms and Use</p>
</div>

<div className='flex gap-20  items-center justify-center'>
<div className='flex items-center justify-center gap-1.5'>
    <FaSquareFacebook className='cursor-pointer' />
<FaInstagram className='cursor-pointer' />
</div>
<p> All right reserved 2023</p>
</div>
    </div>
</div>

      <img className=' md:h-40 md:w-full h-25  pb-1' src={shapemaker}  />
    </div>
  )
}

export default Footer