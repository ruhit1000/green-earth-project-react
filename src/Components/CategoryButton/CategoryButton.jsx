import React from 'react';

const CategoryButton = ({ category, buttonName, setButtonName, handleSelectedCategory }) => {

    const { category_name, id } = category

    const handleClick = () => {
        setButtonName(category_name)
        handleSelectedCategory(id)
    }

    return (
        <button
            onClick={handleClick}
            className={`btn w-full ${buttonName === category_name ? 'bg-[#15803D] text-white' : 'btn-ghost'}`}
        >{category_name}</button>
    );
};

export default CategoryButton;  