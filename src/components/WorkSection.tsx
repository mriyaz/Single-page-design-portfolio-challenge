import React from 'react'
import Carousel from "./Carousel";
import img1 from '../assets/image-slide-1.jpg';
import img2 from '../assets/image-slide-2.jpg';
import img3 from '../assets/image-slide-3.jpg';
import img4 from '../assets/image-slide-4.jpg';
import img5 from '../assets/image-slide-5.jpg';



const WorkSection = () => {
  const images = [
    img1,img2,img3,img4,img5
  ];

  return (
    <div className='text-center space-y-5  md:space-y-10 lg:space-y-16'>
      <h2 className='text-2xl font-bold  md:text-3xl lg:text-5xl'>My Work</h2>

      <div className="container mx-auto">
        <Carousel images={images} />
      </div>

    </div>
  )
}

export default WorkSection