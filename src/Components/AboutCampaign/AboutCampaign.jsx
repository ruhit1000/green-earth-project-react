import React from 'react';
import aboutImage from '../../assets/about.png'

const AboutCampaign = () => {
    return (
        <div className='w-[95%] md:container mx-auto my-10 md:my-16'>
            <h2 className='font-semibold text-3xl text-center mb-10'>About the Campaign</h2>
            <div className="grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-2 items-center">
                <div className="mx-auto">
                    <img src={aboutImage} alt="" />
                </div>
                <div className="w-[95%] mx-auto">
                    <p className="opacity-70 mb-5">
                        Green Earth is a global tree plantation initiative dedicated to fighting
                        climate change. Since our start, we’ve planted over 500,000 trees
                        worldwide. By joining our campaign, you help restore forests, create
                        habitats for wildlife, and combat global warming.
                    </p>
                    <ul className="opacity-70 list-disc list-inside space-y-2">
                        <li>Restoration of natural habitats</li>
                        <li>Improvement of air quality</li>
                        <li>Support for local communities</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default AboutCampaign;