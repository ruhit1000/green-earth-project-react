import React from 'react';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import heroLeaf1 from '../../assets/hero-leaf1.png';
import heroLeaf2 from '../../assets/hero-leaf2.png';

const Banner = () => {
    return (
        <div className='py-24 bg-[#CFF0DC] relative'>
            <div className='text-center z-10 relative'>
                <h2 className='font-bold text-4xl mb-2'>Plant a Tree, Grow a Future</h2>
                <p className='mb-6'>Join our mission to plant 1 million trees and make the Earth greener for future <br />
                    generations.</p>
                <ButtonPrimary buttonName='Get Involved'></ButtonPrimary>
            </div>
            <img className='absolute bottom-0 left-0 hidden sm:inline w-xs xl:w-md' src={heroLeaf1} alt="Tree planting" />
            <img className='absolute bottom-0 right-0 hidden sm:inline w-xs xl:w-md' src={heroLeaf2} alt="Tree planting" />
        </div>
    );
};

export default Banner;