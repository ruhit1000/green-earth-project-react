import React, { use, useState } from 'react';
import CategoryButton from '../CategoryButton/CategoryButton';

const CategorySelection = ({ categoriesPromise, handleSelectedCategory }) => {
    const [buttonName, setButtonName] = useState('All Trees')

    const categoriesRes = use(categoriesPromise);
    const allCategories = categoriesRes.categories;
    const handleClick = () => {
        setButtonName('All Trees')
        handleSelectedCategory(null)
    }
    return (
        <div className='lg:col-span-1'>
            <h2 className='font-semibold text-center text-xl mb-4'>Categories</h2>
            <div>
                <button
                    onClick={handleClick}
                    className={`btn w-full ${buttonName === 'All Trees' ? 'bg-[#15803D] text-white' : 'btn-ghost'}`}
                >All Trees</button>
                {
                    allCategories.map((category) => <CategoryButton
                        buttonName={buttonName}
                        setButtonName={setButtonName}
                        key={category.id}
                        category={category}
                        handleSelectedCategory={handleSelectedCategory}
                    ></CategoryButton>)
                }
            </div>
        </div>
    );
};

export default CategorySelection;
