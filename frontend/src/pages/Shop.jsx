import React from 'react'
import Navbar from '../components/Navbar';
import img1 from '../assets/ShopHero/img1.jpg'
import img2 from '../assets/ShopHero/img2.jpg'
import img3 from '../assets/ShopHero/img3.jpg'
import img4 from '../assets/ShopHero/img4.jpg'
import { useProducts } from '../context/ProductContext';
import ShopProducts from '../components/ShopProducts';

const Shop = () => {

    const {products} = useProducts();

  return (
    <>
    <div className='bg-custWhite'>
        <div className=''>
            <Navbar />
            <div
                className="hero h-72"
                style={{
                    backgroundImage:
                    `url(${img2})`,
                }}
                >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content ">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Find Products</h1>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Search items</legend>
                        <input type="text" className="input" placeholder="Search" />
                        <p className="label">You can search and get the list of items here.</p>
                    </fieldset>
                    </div>
                </div>
            </div> 
        </div>

        <div className='pl-2 pr-2 text-black'>
            <div className="navbar shadow-sm bg-homeWhite rounded-md flex justify-center items-center p-2 gap-10">
                <div className="navbar-center hidden lg:flex">
                    <div className="menu menu-horizontal flex gap-2">
                    <button className="btn btn-md btn-ghost text-xl shadow-2xl hover:bg-secondaryGreen">Home</button>
                    <button className="btn btn-md btn-ghost text-xl hover:bg-secondaryGreen">Orders</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-wrap gap-5 justify-center p-5'>
            <ShopProducts/>
        </div>
    </div>
    </>
  )
}

export default Shop
