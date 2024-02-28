import React from 'react';
import imgAmy from '../assets/image-amy.webp';

const IntroSection = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 text-center md:flex-row  md:gap-10 lg:gap-24'>
      <img src={imgAmy} alt="Amy's image" className='w-3/4  md:w-2/5' />

      <div className='flex flex-col justify-center items-center gap-5 text-center md:items-start md:text-left'>

        <h2 className='text-2xl font-bold lg:text-5xl'>I’m Amy, and I’d love to work on your next project
        </h2>
        <p className='text-base px-2 text-gray-500 lg:text-lg'>
          I love working with others to create beautiful design solutions. I’ve designed everything
          from brand illustrations to complete mobile apps. I’m also handy with a camera!
        </p>
        <button className='bg-custom-red text-white rounded-full px-5 py-2 font-bold hover:bg-custom-orange'>
          Free Consultation
        </button>

      </div>

    </div>
  )
}

export default IntroSection