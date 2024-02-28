import React from 'react'
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
      <img src={logo} alt="logo" width='80px' />
      <button className=' flex items-center justify-center bg-black text-white 
      rounded-full px-5 py-3 font-bold 
      hover:bg-custom-purple lg:px-10 lg:py-4'>Free Consultation</button>
    </div>
  )
}

export default Header