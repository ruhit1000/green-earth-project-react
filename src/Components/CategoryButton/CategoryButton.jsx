import React from 'react';

const CategoryButton = ({ category, buttonName, setButtonName }) => {

    const { category_name } = category
    return (
        <button
            onClick={() => setButtonName(category_name)}
            className={`btn w-full ${buttonName === category_name ? 'bg-[#15803D] text-white' : 'btn-ghost'}`}
        >{category_name}</button>
    );
};

export default CategoryButton;  