import React from 'react';

const OurImpact = () => {
    return (
        <div className='bg-[#CFF0DC] py-15'>
            <div className="w-[95%] md:container mx-auto">
                <h2 className="font-semibold text-3xl text-center mb-10">Our Impact</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
                    <div className="bg-white rounded-lg py-10">
                        <h2 className="text-[#15803D] text-3xl font-semibold">500k+</h2>
                        <p className="text-[#09090B] text-sm">Trees Planted</p>
                    </div>
                    <div className="bg-white rounded-lg py-10">
                        <h2 className="text-[#15803D] text-3xl font-semibold">100k+</h2>
                        <p className="text-[#09090B] text-sm">Communities Supported</p>
                    </div>
                    <div className="bg-white rounded-lg py-10">
                        <h2 className="text-[#15803D] text-3xl font-semibold">50%</h2>
                        <p className="text-[#09090B] text-sm">Air Quality Improvement</p>
                    </div>
                    <div />
                </div>
            </div>

        </div>
    );
};

export default OurImpact;