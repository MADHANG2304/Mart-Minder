import React from 'react'
import carousleImg1 from '../assets/carousle1.jpg';
import carousleImg2 from '../assets/carousle2.jpg';
import carousleImg3 from '../assets/carousle3.jpg';
import carousleImg4 from '../assets/carousle4.jpg';

const About = () => {
  return (
    <div className='bg-custWhite w-full hero min-h-screen '>
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className='ml-20 mr-20'>
            <h1 className="text-6xl font-bold text-black">Make healthy life with 
              <span className='text-primaryGreen '> Fresh </span>
              grocery
              </h1>
            <p className="py-6 text-xl text-black">
              Get the best quality and most delicious grocery food in the world, you can get them of with out website.
            </p>
          </div>


        {/* carousel */}
        <div className="carousel carousel-center rounded-box gap-5 ">
          <div className="carousel-item w-lg ">
            <img src={carousleImg4} alt="Drink" className='rounded-sm' />
          </div>
          <div className="carousel-item w-lg ">
            <img
              className='rounded-sm'
              src={carousleImg2}
              alt="Drink" />
          </div>
          <div className="carousel-item w-lg">
            <img
              className='rounded-sm'
              src={carousleImg3}
              alt="Drink" />
          </div>
          <div className="carousel-item w-lg">
            <img
              className='rounded-sm'
              src={carousleImg4}
              alt="Drink" />
          </div>
          <div className="carousel-item w-lg">
            <img 
              src={carousleImg2} 
              alt="Drink" 
              className='rounded-sm'
            />
          </div>
          <div className="carousel-item w-lg">
            <img 
              src={carousleImg3} 
              alt="Drink" 
              className='rounded-sm'
              />
          </div>
          <div className="carousel-item w-lg">
            <img
              className='rounded-sm'
              src={carousleImg4}
              alt="Drink" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
