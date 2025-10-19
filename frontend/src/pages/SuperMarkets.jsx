import React from 'react';
import { useMarkets } from '../context/MarketContext';

const SuperMarkets = () => {
  const { markets } = useMarkets();

  return (
    <div className='w-full flex'>
      {Array.isArray(markets) && markets.length > 0 ? (
        markets.map((market) => (
          <div 
            key={market._id || market.id} 
            className='text-black bg-cloudy flex flex-wrap gap-10 p-5 pl-10'
          >
            <div className="card card-side bg-custWhite shadow-sm ">
              <figure>
                <img
                  src={market.imageUrl}
                  alt={market.name}
                  className="w-60 h-60 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{market.name}</h2>
                <p>{market.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn">Visit</button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No markets available</p>
      )}
    </div>
  );
};

export default SuperMarkets;
