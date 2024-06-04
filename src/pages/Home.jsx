import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import About from '../components/About';
import JobList from '../components/JobList';
import News from '../components/News';
import BackTop from '../components/BackTop';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
        <Navbar/>
        <Carousel/>
        <About/>
        <JobList/>
        <News/>
        <Footer/>
        <BackTop/>
    </>
  )
}

export default Home
