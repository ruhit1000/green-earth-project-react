import React from 'react';
import CartItem from '../CartItem/CartItem';

const CartSection = ({ cart, handleCartDelete }) => {
    const sumTotal = (arr) => {
        let total = 0;
        arr.forEach(product => {
            const price = product.price * product.quantity
            total = total + price
        })
        return total;
    }


    return (
        <div className='lg:col-span-1 bg-base-100 rounded-lg max-h-175 p-4'>
            <h2 className="font-semibold text-xl mb-4">Your Cart</h2>
            <div className='overflow-y-auto pr-2'>
                <div className={`text-center text-gray-500 mt-10 ${cart.length !== 0 && 'hidden'}`}>
                    <p>Your Cart is Empty</p>
                    <p>Add trees to your cart!</p>
                </div>
                {
                    cart.map(product => <CartItem handleCartDelete={handleCartDelete} key={product.id} product={product}></CartItem>)
                }
                <div className='flex justify-between border-t mt-4 pt-4'>
                    <p>Total:</p>
                    <p>৳<span className='font-medium'>{sumTotal(cart)}</span></p>
                </div>
            </div>
        </div>
    );
};

export default CartSection;