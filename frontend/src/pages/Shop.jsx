import React from 'react'
import Navbar from '../components/Navbar';
import img1 from '../assets/ShopHero/img1.jpg'
import img2 from '../assets/ShopHero/img2.jpg'
import img3 from '../assets/ShopHero/img3.jpg'
import img4 from '../assets/ShopHero/img4.jpg'

const Shop = () => {
  return (
    <div className=''>
        <Navbar />

        <div
            className="hero h-96"
            style={{
                backgroundImage:
                `url(${img2})`,
            }}
            >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content ">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Search items..</legend>
                    <input type="text" className="input" placeholder="Search" />
                    <p className="label">You can search and get the list of items here.</p>
                </fieldset>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop
