import React from 'react';

const ButtonSecondary = ({ handleShowMore, buttonName }) => {
    return (
        <button onClick={handleShowMore} className='btn bg-[#15803D] text-white'>{buttonName}</button>
    );
};

export default ButtonSecondary;