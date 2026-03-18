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

    // let categorizedPlantsPromise = fetch
    // if (selectedCategory !== null) {
    //     categorizedPlantsPromise = fetch(`https://openapi.programming-hero.com/api/category/${selectedCategory}`)
    // }

    return (
        <div className='w-[95%] md:container mx-auto my-10 md:my-16'>
            <h2 className='text-center font-semibold text-3xl mb-10'>Choose Your Trees</h2>
            <div className='grid grid-cols-1 lg:grid-cols-6 gap-7'>
                <Suspense fallback={<span className="loading loading-spinner text-success block mx-auto"></span>}>
                    <CategorySelection handleSelectedCategory={handleSelectedCategory} categoriesPromise={categoriesPromise}></CategorySelection>
                </Suspense>
                <Suspense fallback={<span className="loading loading-spinner text-success block lg:col-span-4 mx-auto"></span>}>
                    <AllPlantsContainer allPlantsPromise={selectedCategory === null? allPlantsPromise : categorizedPlantsPromise}></AllPlantsContainer>
                </Suspense>
                <CartSection></CartSection>
            </div>
        </div>
    );
};

export default ChooseTrees;