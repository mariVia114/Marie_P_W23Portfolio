import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Academic from './components/Academic';
import Work from './components/Work';
import Professional from './components/Professional';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Academic />
      <Work />
      <Professional />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
