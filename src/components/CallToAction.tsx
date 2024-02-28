import React from 'react'

const CallToAction = () => {
  return (
    <div className="bg-black text-white rounded-md 
    flex flex-col justify-center items-center gap-5 text-center p-8 lg:flex-row lg:justify-between lg:text-left lg:p-14 ">

      <div className='lg:w-2/3 space-y-5'>
        <h2 className='text-3xl font-bold lg:text-5xl'>Book a call with me</h2>
        <p className='text-base px-3 lg:px-0 lg:text-lg'>
          I’d love to have a chat to see how I can help you.
          The best first step is for us to discuss your project
          during a free consultation. Then we can move forward from there.
        </p>
      </div>

      <div className=''>
        <button className='bg-custom-red text-white 
      rounded-full px-5 py-2 font-bold flex justify-center items-center
      hover:bg-custom-orange lg:py-3 lg:px-7'>Free Consultation
        </button>
      </div>
    </div>
  )
}

export default CallToAction