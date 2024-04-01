import React from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import Carousel from '../components/Carousel';
import About from '../components/About';
import JobList from '../components/JobList';
import News from '../components/News';
import BackTop from '../components/BackTop';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
        <Topbar/>
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
