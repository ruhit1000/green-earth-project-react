import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import AboutCampaign from './Components/AboutCampaign/AboutCampaign';
import OurImpact from './Components/OurImpact/OurImpact';
import PlantTree from './Components/PlantTree/PlantTree';
import CopyRight from './Components/CopyRight/CopyRight';
import ChooseTrees from './Components/ChooseTrees/ChooseTrees';

const App = () => {
  return (
    <div className='bg-[#F0FDF4]'>
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
        <section>
          <Banner></Banner>
        </section>
      </header>

      <main>
        <section>
          <ChooseTrees></ChooseTrees>
        </section>

        <section>
          <AboutCampaign></AboutCampaign>
        </section>

        <section>
          <OurImpact></OurImpact>
        </section>

        <section>
          <PlantTree></PlantTree>
        </section>
      </main>
      <footer>
        <CopyRight></CopyRight>
      </footer>
    </div>
  );
};

export default App;