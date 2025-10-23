import React from 'react'
import carousleImg1 from '../assets/ShopHero/img2.jpg';
import { useProducts } from '../context/ProductContext';

const ProductCard = () => {
    const { products } = useProducts();

  return (
    <div className='w-full  flex flex-row gap-5 justify-center items-center flex-wrap p-10 border-2 border-custWhite'>
        <span className='w-full text-4xl font-bold text-custWhite flex justify-baseline mb-10 hover:text-secondaryGreen'>
            <h1>Green & Fresh</h1>
        </span>
        {products.length === 0 ? (
            <p className='text-custWhite'>Loading Products...</p>
        ) : (
            products.map((product) => (
                <div className="card bg-custWhite text-black shadow-sm w-72 h-96 hover:scale-105 transition-transform duration-300" key={product._id}>
                    <figure>
                        <img className='max-h-44 w-full object-cover'
                        src={product.imageUrl}
                        alt={product.name} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-black">
                        {product.name}
                        <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{product.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn hover:bg-secondaryGreen ">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))
        )}
    </div>
  )
}

export default ProductCard
