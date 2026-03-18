import React, { use, useState } from 'react';
import PlantCard from '../PlantCard/PlantCard';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import { ArrowBigDown } from 'lucide';

const AllPlantsContainer = ({ allPlantsPromise, handleAddToCart }) => {
    const [showMoreClicked, setShowMoreClicked] = useState(false)
    const handleShowMore = () => setShowMoreClicked(!showMoreClicked)

    const allPlantsRes = use(allPlantsPromise);
    const allPlantsData = allPlantsRes.plants;
    const plantsToShow = [];
    if (allPlantsData.length > 6) {
        if(showMoreClicked) {
            allPlantsData.forEach((plant) => plantsToShow.push(plant))
        } else {
            const newArr = allPlantsData.slice(0, 6);
            newArr.forEach((plant) => plantsToShow.push(plant))
        }
    } else {
        allPlantsData.forEach((plant) => plantsToShow.push(plant))
    }
    return (
        <div className='lg:col-span-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    plantsToShow.map(plant => <PlantCard handleAddToCart={handleAddToCart} key={plant.id} plant={plant}></PlantCard>)
                }
            </div>
            <div className={`flex justify-center mt-5 ${allPlantsData.length < 6 && 'hidden'}`}>
                <ButtonSecondary handleShowMore={handleShowMore} buttonName={showMoreClicked? 'Show Less' : 'Show More'}></ButtonSecondary>
            </div>
        </div>
    );
};

export default AllPlantsContainer;