import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';

const App = () => {
  return (
    <>
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
        <section>
          <Banner></Banner>
        </section>
      </header>
    </>
  );
};

export default App;