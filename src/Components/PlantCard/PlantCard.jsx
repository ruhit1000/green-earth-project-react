import React from 'react';

const PlantCard = ({plant, handleAddToCart}) => {
    const {category, description, id, image, name, price} = plant

    return (
        <div className='p-4 bg-base-100 rounded-lg shadow-md space-y-3'>
            <div className='h-44.5 w-full overflow-hidden rounded-lg'>
                <img className='w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300' src={`${image}`} alt={`${plant.name}`} />
            </div>
            <div className='space-y-2'>
                <h3 className='font-semibold text-sm'>{name}</h3>
                <p className="text-[#71717A] text-xs line-clamp-2">{description}</p>
                <div className='flex justify-between'>
                    <div className="badge badge-soft badge-success text-sm font-medium">{category}</div>
                    <p className="font-semibold text-sm">৳{price}</p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(name, price, id)} className="btn w-full bg-[#15803D] text-white rounded-full">Add to Cart</button>
        </div>
    );
};

export default PlantCard;