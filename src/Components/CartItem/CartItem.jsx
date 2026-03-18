import React from 'react';

const CartItem = ({ product, handleCartDelete }) => {

    return (
        <div className='flex justify-between items-center py-2 px-3 bg-[#F0FDF4] rounded-lg mb-3'>
            <div>
                <h3 className='font-semibold text-sm mb-1'>{product.name}</h3>
                <p className='text-[#1F2937]'>৳{product.price} x {product.quantity}</p>
            </div>
            <div>
                <button onClick={() => handleCartDelete(product.id)} className='btn btn-ghost btn-sm'>x</button>
            </div>
        </div>
    );
};

export default CartItem;