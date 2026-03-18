import React, { Suspense } from 'react';
import CategorySelection from '../CategorySelection/CategorySelection';
const categoriesPromise = fetch('https://openapi.programming-hero.com/api/categories').then(res => res.json())

const ChooseTrees = () => {
    return (
        <div className='w-[95%] md:container mx-auto my-10 md:my-16'>
            <h2 className='text-center font-semibold text-3xl mb-10'>Choose Your Trees</h2>
            <div className='grid grid-cols-1 lg:grid-cols-6 gap-7'>
                <Suspense fallback={<span className="loading loading-spinner text-success block mx-auto"></span>}>
                    <CategorySelection categoriesPromise={categoriesPromise}></CategorySelection>
                </Suspense>
            </div>
        </div>
    );
};

export default ChooseTrees;