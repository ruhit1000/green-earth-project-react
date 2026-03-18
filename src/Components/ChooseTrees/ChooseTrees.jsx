import React, { Suspense, useState } from 'react';
import CategorySelection from '../CategorySelection/CategorySelection';
import AllPlantsContainer from '../AllPlantsContainer/AllPlantsContainer';
import CartSection from '../CartSection/CartSection';
const categoriesPromise = fetch('https://openapi.programming-hero.com/api/categories').then(res => res.json())
const allPlantsPromise = fetch('https://openapi.programming-hero.com/api/plants').then(res => res.json())

const ChooseTrees = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const categorizedPlantsPromise = fetch(`https://openapi.programming-hero.com/api/category/${selectedCategory}`).then(res => res.json())

    const handleSelectedCategory = (id) => {
        setSelectedCategory(id)
    }

    const [cart, setCart] = useState([]);

    const handleAddToCart = (name, price, id) => {
        setCart((prevCard) => {
            const existingItem = prevCard.find(item => item.id === id);
            if (existingItem) {
                return prevCard.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item)
            }
            return [...prevCard, {name, price, id, quantity: 1}]
        })
    }


    const handleCartDelete = (productID) => {
        setCart((prevCard => {
            const newCart = prevCard.filter(item => item.id !== productID)
            return newCart
        }))
    }

    return (
        <div className='w-[95%] md:container mx-auto my-10 md:my-16'>
            <h2 className='text-center font-semibold text-3xl mb-10'>Choose Your Trees</h2>
            <div className='grid grid-cols-1 lg:grid-cols-6 gap-7'>
                <Suspense fallback={<span className="loading loading-spinner text-success block mx-auto"></span>}>
                    <CategorySelection handleSelectedCategory={handleSelectedCategory} categoriesPromise={categoriesPromise}></CategorySelection>
                </Suspense>
                <Suspense fallback={<span className="loading loading-spinner text-success block lg:col-span-4 mx-auto"></span>}>
                    <AllPlantsContainer handleAddToCart={handleAddToCart} allPlantsPromise={selectedCategory === null ? allPlantsPromise : categorizedPlantsPromise}></AllPlantsContainer>
                </Suspense>
                <CartSection handleCartDelete={handleCartDelete} cart={cart}></CartSection>
            </div>
        </div>
    );
};

export default ChooseTrees;