import React from 'react'
import heroImg from '../assets/heroPage.jpg';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className='bg-homeGreen'>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={heroImg}
            className="w-lg h-1/3 rounded-lg shadow-2xl mr-16 "
          />
          <div className='ml-20'>
            <h1 className="text-6xl font-bold">Fresh Groceries Delivered To Your  
              <span className='text-primaryGreen'> Doorstep</span>
              </h1>
            <p className="py-6 text-2xl">
              Get the freshest vegetables, juicy fruits and all yout daily essentials delivered right to your doorstep. Shop anytime, anywhere fast, easy and hassle-free.
            </p>
            <Link to="/shop">
              <button className="btn bg-secondaryGreen hover:bg-black hover:text-primaryGreen">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
