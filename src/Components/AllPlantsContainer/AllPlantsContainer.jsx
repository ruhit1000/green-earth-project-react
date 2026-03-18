import React, { use } from 'react';
import PlantCard from '../PlantCard/PlantCard';

const AllPlantsContainer = ({ allPlantsPromise }) => {
    const allPlantsRes = use(allPlantsPromise);
    const allPlantsData = allPlantsRes.plants;
    return (
        <div className='lg:col-span-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    allPlantsData.map(plant => <PlantCard key={plant.id} plant={plant}></PlantCard>)
                }
            </div>
        </div>
    );
};

export default AllPlantsContainer;