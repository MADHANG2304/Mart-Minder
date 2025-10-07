import React from 'react'
import Navbar from '../components/Navbar';
import img1 from '../assets/ShopHero/img1.jpg'
import img2 from '../assets/ShopHero/img2.jpg'
import img3 from '../assets/ShopHero/img3.jpg'
import img4 from '../assets/ShopHero/img4.jpg'

const Shop = () => {
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

        <div className='flex flex-wrap gap-5 justify-center p-5'>
            <div className="card  image-full w-96 shadow-sm">
                <figure>
                    <img
                    src={img1}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                    <button className="btn bg-secondaryGreen text-custWhite hover:bg-custWhite hover:text-secondaryGreen">View More</button>
                    </div>
                </div>
            </div>
            <div className="card  image-full w-96 shadow-sm">
                <figure>
                    <img
                    src={img2}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                    <button className="btn bg-secondaryGreen text-custWhite hover:bg-custWhite hover:text-secondaryGreen">View More</button>
                    </div>
                </div>
            </div>
            <div className="card  image-full w-96 shadow-sm">
                <figure>
                    <img
                    src={img3}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                    <button className="btn bg-secondaryGreen text-custWhite hover:bg-custWhite hover:text-secondaryGreen">View More</button>
                    </div>
                </div>
            </div>
            <div className="card  image-full w-96 shadow-sm">
                <figure>
                    <img
                    src={img4}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                    <button className="btn bg-secondaryGreen text-custWhite hover:bg-custWhite hover:text-secondaryGreen">View More</button>
                    </div>
                </div>
            </div>
            <div className="card  image-full w-96 shadow-sm">
                <figure>
                    <img
                    src={img3}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                    <button className="btn bg-secondaryGreen text-custWhite hover:bg-custWhite hover:text-secondaryGreen">View More</button>
                    </div>
                </div>
            </div>
            <div className="card  image-full w-96 shadow-sm">
                <figure>
                    <img
                    src={img1}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                    <button className="btn bg-secondaryGreen text-custWhite hover:bg-custWhite hover:text-secondaryGreen">View More</button>
                    </div>
                </div>
            </div>
            <div className="card  image-full w-96 shadow-sm">
                <figure>
                    <img
                    src={img4}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                    <button className="btn bg-secondaryGreen text-custWhite hover:bg-custWhite hover:text-secondaryGreen">View More</button>
                    </div>
                </div>
            </div>
            <div className="card  image-full w-96 shadow-sm">
                <figure>
                    <img
                    src={img2}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                    <button className="btn bg-secondaryGreen text-custWhite hover:bg-custWhite hover:text-secondaryGreen">View More</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Shop
