import React from 'react'
import carousleImg1 from '../assets/ShopHero/img2.jpg';
import carousleImg2 from '../assets/carousle2.jpg';
import carousleImg3 from '../assets/carousle3.jpg';
import carousleImg4 from '../assets/carousle4.jpg';

const ProductCard = () => {
    const productData = [
        {
            id : 1,
            img : carousleImg1,
            title : "Card Title",
            desc : "A card component has a figure, a body part, and inside body there are title and actions parts"
        },
        {    
            id : 2,
            img : carousleImg2,
            title : "Card Title",
            desc : "A card component has a figure, a body part, and inside body there are title and actions parts"
        },
        {
            id : 3,
            img : carousleImg3, 
            title : "Card Title",
            desc : "A card component has a figure, a body part, and inside body there are title and actions parts"
        },
        {
            id : 4,
            img : carousleImg4,
            title : "Card Title",
            desc : "A card component has a figure, a body part, and inside body there are title and actions parts"
        },
        {
            id : 5,
            img : carousleImg3,
            title : "Card Title",
            desc : "A card component has a figure, a body part, and inside body there are title and actions parts"
        },
        {    
            id : 6,
            img : carousleImg4,
            title : "Card Title",
            desc : "A card component has a figure, a body part, and inside body there are title and actions parts"
        },
        {
            id : 7,
            img : carousleImg3, 
            title : "Card Title",
            desc : "A card component has a figure, a body part, and inside body there are title and actions parts"
        },
        {
            id : 8,
            img : carousleImg2,
            title : "Card Title",
            desc : "A card component has a figure, a body part, and inside body there are title and actions parts"
        },
        {
            id : 9,
            img : carousleImg3,
            title : "Card Title",
            desc : "A card component has a figure, a body part, and inside body there are title and actions parts"
        },
        {    
            id : 10,
            img : carousleImg4,
            title : "Card Title",
            desc : "A card component has a figure, a body part, and inside body there are title and actions parts"
        },
        {
            id : 11,
            img : carousleImg3, 
            title : "Card Title",
            desc : "A card component has a figure, a body part, and inside body there are title and actions parts"
        },
        {
            id : 12,
            img : carousleImg2,
            title : "Card Title",
            desc : "A card component has a figure, a body part, and inside body there are title and actions parts"
        },
    ]
  return (
    <div className='w-full h-full flex flex-row gap-5 justify-center items-center flex-wrap p-10 border-2 border-black'>
        <span className='w-full text-4xl font-bold text-custWhite flex justify-baseline mb-10 hover:text-secondaryGreen'>
            <h1>Green & Fresh</h1>
        </span>
        {productData.map((product) => (
            <div className="card bg-custWhite text-black shadow-sm w-72 hover:scale-105 transition-transform duration-300">
                <figure>
                    <img
                    src={product.img}
                    alt={product.title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {product.title}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{product.desc}</p>
                    <div className="card-actions justify-end">
                        <button className="btn hover:bg-secondaryGreen ">Buy Now</button>
                    </div>
                </div>
            </div>

        ))}
    </div>
  )
}

export default ProductCard
