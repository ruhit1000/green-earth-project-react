import React from 'react';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

const PlantTree = () => {
    return (
        <div className='bg-[#166534] py-15'>
            <div className="w-[95%] md:container mx-auto">
                <h2 className="font-semibold text-3xl text-white text-center mb-6">
                    Plant a Tree Today
                </h2>
                <div className="bg-[#15803D] p-10 max-w-162.5 mx-auto rounded-xl space-y-3">
                    <input
                        className="w-full bg-white rounded-lg p-3"
                        type="text"
                        name=""
                        id=""
                        placeholder="Your Name"
                    />
                    <input
                        className="w-full bg-white rounded-lg p-3"
                        type="email"
                        name=""
                        id=""
                        placeholder="Your Email Address"
                    />
                    <button className="btn bg-[#FACC15] text-[#15803D] rounded-full border-0 w-full">
                        Donate Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlantTree;