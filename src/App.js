import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Studies from './components/Studies';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <div className='h-[100px]'></div>
      <About />
      <div className='h-[300px]'></div>
      <Studies />
      <Services />
      <div className='h-[500px]'></div>
      <Work />
      <div className='h-[1000px]'></div>
      <Contact />
      <div className='h-[500px]'></div>
    </div>
  );
};

export default App;
