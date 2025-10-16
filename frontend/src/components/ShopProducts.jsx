import React from 'react'
import { useProducts } from '../context/ProductContext'

const ShopProducts = () => {
    const {products} = useProducts();
  return (
    <div>
      <div className='flex flex-wrap gap-5 justify-center p-5 bg-custWhite'>
            {   products.map((card) => (
                    <div key={card.id} className="card  image-full w-96 h-96 shadow-sm hover:scale-105 transition-transform duration-300">
                        <figure>
                            <img className='w-full object-cover'
                            src={card.imageUrl}
                            alt={card.name} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{card.name}</h2>
                            <p>{card.description}</p>
                            <div className="card-actions justify-end">
                            <button className="btn bg-secondaryGreen text-custWhite hover:bg-custWhite hover:text-secondaryGreen">View More</button>
                            </div>
                        </div>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default ShopProducts
