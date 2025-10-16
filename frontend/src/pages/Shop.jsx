import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import img2 from '../assets/ShopHero/img2.jpg';
import ShopProducts from '../components/ShopProducts';

const Shop = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="bg-custWhite min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="hero h-72"
        style={{
          backgroundImage: `url(${img2})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content">
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

      {/* Home & Orders Button Bar */}
      <div className="pl-2 pr-2 text-black">
        <div className="navbar shadow-sm bg-homeWhite rounded-md flex justify-center items-center p-2 gap-10">
          <div className="navbar-center hidden lg:flex">
            <div className="menu menu-horizontal flex gap-2">
              <button
                onClick={() => setActiveTab('home')}
                className={`btn btn-md btn-ghost text-xl shadow-2xl  ${
                  activeTab === 'home' ? 'bg-secondaryGreen text-white hover:bg-black hover:text-primaryGreen'  : ''
                }`}
              >
                Home
              </button>

              <button
                onClick={() => setActiveTab('orders')}
                className={`btn btn-md btn-ghost text-xl ${
                  activeTab === 'orders' ? 'bg-secondaryGreen text-white hover:bg-black hover:text-primaryGreen' : ''
                }`}
              >
                Orders
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 justify-center p-5">
        {activeTab === 'home' ? (
          <ShopProducts />
        ) : (
          <div className="text-center text-black p-10">
            <h2 className="text-3xl font-semibold mb-4">Your Orders</h2>
            <p className="text-lg">No orders have been placed yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
