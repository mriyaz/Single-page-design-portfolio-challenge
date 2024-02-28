import React from 'react'
import IBoxComponent, { IComponent } from '../types'
import graphicDesignPattern from '../assets/pattern-graphic-design.svg';
import uiUxPattern from '../assets/pattern-ui-ux.svg';
import appsPattern from '../assets/pattern-apps.svg';
import illustrationsPattern from '../assets/pattern-illustrations.svg';
import photographyPattern from '../assets/pattern-photography.svg';
import motionGraphicsPattern from '../assets/pattern-motion-graphics.svg';



const CategoryCard: React.FC<IComponent> = ({ name, bgColor, image, span }) => {
  return (
    <div className={`${span} px-4 py-24  md:py-16 ${bgColor} rounded-lg shadow-md relative`}>
      <img src={image} alt={`${name} icon`} className="absolute top-5 right-5 h-2/5" />
      <span className="absolute text-white text-2xl font-bold bottom-5 left-5">{name}</span>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className='text-center space-y-5 lg:space-y-10'>
      {/* Hero Text */}
      <div className='text-center space-y-5'>
        <h1 className='text-4xl font-bold lg:text-6xl'>Design solutions made easy</h1>
        <p className='text-lg px-10 text-gray-500 lg:px-48'>With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.
        </p>
      </div>
      
      <div className="grid grid-cols-2 grid-rows-6 md:grid-cols-4 md:grid-rows-3 lg:grid-cols-6 lg:grid-rows-2 gap-4">
        <CategoryCard
          name="Graphic Design"
          bgColor="bg-custom-purple"
          image={graphicDesignPattern}
          span="row-span-2 col-span-2  md:row-span-2  md:col-span-2 lg:row-span-2 lg:col-span-2"
        />
        <CategoryCard
          name="UI/UX"
          bgColor="bg-custom-orange"
          image={uiUxPattern}
          span="lg:col-span-1"
        />
        <CategoryCard
          name="Apps"
          bgColor="bg-custom-pink"
          image={appsPattern}
          span="lg:col-span-1"
        />
        <CategoryCard
          name="Photography"
          bgColor="bg-custom-green"
          image={photographyPattern}
          span="col-span-2 lg:row-span-1 lg:col-span-2"
        />
        <CategoryCard
          name="Illustrations"
          bgColor="bg-custom-red"
          image={illustrationsPattern}
          span="col-span-2 lg:row-span-1 lg:col-span-2"
        />


        <CategoryCard
          name="Motion Graphics"
          bgColor="bg-custom-brown"
          image={motionGraphicsPattern}
          span="col-span-2 lg:row-span-1 lg:col-span-2"
        />
      </div>
    </div>
  );
}

export default HeroSection