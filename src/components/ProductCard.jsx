import React from 'react';
import { Link } from 'react-router-dom';


const ProductCard = ({image, name, price, description, slug }) => {
  return (
    <div className='bg-white shadow-md rounded-xl p-6 text-center hover:scale-105 transition'>
        <div>
            <img src={image} alt={name} className='w-3xl h-50 object-cover rounded-lg mb-4' />
            <div>
                <h3 className='text-2xl font-bold font-baked'>{name}</h3>
                <p className='mt-2 text-sm text-gray-600 font-baked'>{description}</p>
            </div>
            <Link to={`/product/${slug}`}>
            <button className='border border-gray-600 mt-4 px-4 py-2 bg-retro text-retro rounded-full shadow hover:bg-opacity-90'>
                View Details
            </button>
            </Link>
        </div>
    </div>
  )
};

export default ProductCard;