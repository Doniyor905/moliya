import React from 'react';

// import logo from "./image/logo.png";
import './App.scss';

import 'swiper/css';
import 'swiper/css/pagination';


import HeaderMenu from './components/HeaderMenu';
import HeaderSlider from './components/HeaderSlider';
import Services from './components/Services';
import Teams from './components/Teams';
import Testimonials from './components/Testimonials';
import Order from './components/Order';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeaderMenu/>
      <HeaderSlider/>
      <Services/>
      <Order/> 
      <Teams/>
      <Testimonials/>
      <Clients/>
      <Footer/>
    </div>
  );
}

export default App;
