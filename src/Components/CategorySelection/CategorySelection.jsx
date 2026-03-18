import React, { use, useState } from 'react';
import CategoryButton from '../CategoryButton/CategoryButton';

const CategorySelection = ({ categoriesPromise }) => {
    const [buttonName, setButtonName] = useState('All Trees')

    const categoriesRes = use(categoriesPromise);
    const allCategories = categoriesRes.categories;
    return (
        <div className='lg:col-span-1'>
            <h2 className='font-semibold text-center text-xl mb-4'>Categories</h2>
            <div>
                <button
                    onClick={() => setButtonName('All Trees')}
                    className={`btn w-full ${buttonName === 'All Trees' ? 'bg-[#15803D] text-white' : 'btn-ghost'}`}
                >All Trees</button>
                {
                    allCategories.map((category) => <CategoryButton
                        buttonName={buttonName}
                        setButtonName={setButtonName}
                        key={category.id}
                        category={category}
                    ></CategoryButton>)
                }
            </div>
        </div>
    );
};

export default CategorySelection;
