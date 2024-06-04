import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackTop from '../components/BackTop';
import News from '../components/News';

function SecondService() {
    return (
    <>
        <Navbar/>
        {/* <!-- Header Start --> */}
        <div className="container-fluid page-header" style={{marginBottom: '120px'}}>
            <div className="container">
                <div className="d-flex flex-column justify-content-center text-center" style={{minHeight: "120px"}}>
                    <h3 className="display-4 text-white text-uppercase">TALENT SOURCING</h3>
                    {/* <div className="d-inline-flex text-white">
                        <p className="m-0 text-uppercase"><a className="text-white" href="/">Home</a></p>
                        <i className="fa fa-angle-double-right pt-1 px-3"></i>
                        <p className="m-0 text-uppercase">About</p>
                    </div> */}
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}
        {/* <!-- About Start --> */}
        <div className="container-fluid">
            <div className="container py-2">
                <div className="row align-items-center">
                    <div className="col-lg-6 my-3">
                        <div  className='py-3 text-justify'>
                            <i className="fa-solid fa-circle-check text-success pr-xl-3 pr-1"></i>
                            <span style={{ lineHeight: "2.3" }}>In the realm of talent acquisition, time is of the essence. That's why at V Talent Solution, our Talent Sourcing service is designed to save you precious hours by presenting a diverse pool of top-quality candidates. From innovative thinkers to seasoned professionals, we harness cutting-edge technology to connect you with the best, empowering you to build a dynamic and inclusive team ready to tackle any challenge.</span>
                        </div>
                    </div>
                    <div className="col-lg-6 my-3">
                        <img className="img-fluid rounded mb-4 mb-lg-0" src="../img/talent-sourcing-1.jpg" alt=""/>
                        {/* <img className="img-fluid rounded mb-4 mb-lg-0" src="../img/blog-1.jpg" alt=""/> */}
                    </div>
                    <div className="col-lg-6 my-3">
                        <img className="img-fluid rounded mb-4 mb-lg-0" src="../img/talent-sourcing-2.jpg" alt=""/>
                    </div>
                    <div className="col-lg-6 my-3 text-justify">
                        <h4>Values:</h4>
                        <div  className='py-2'>
                            <i className="fa-solid fa-circle-check text-success pr-xl-3 pr-1"></i>
                            <span>Time Saving: Helping you save time in sourcing potential candidates, from screening to engagement.</span>
                        </div>
                        <div  className='py-2'>
                            <i className="fa-solid fa-circle-check text-success pr-xl-3 pr-1"></i>
                            <span>Diverse Candidate Pool: Creating a diverse candidate pool from various sources, providing you with a wide and diverse selection.</span>
                        </div>
                        <div  className='py-2'>
                            <i className="fa-solid fa-circle-check text-success pr-xl-3 pr-1"></i>
                            <span>Quality Talent Sourcing: Ensuring access to a pool of high-quality candidates who meet your specific needs.</span>
                        </div>
                        <div  className='py-2'>
                            <i className="fa-solid fa-circle-check text-success pr-xl-3 pr-1"></i>
                            <span>Talent Mapping: Utilizing analytics to map talent by skills, qualifications, and location, ensuring you are always ready to hire.</span>
                        </div>
                        <div  className='py-2'>
                            <i className="fa-solid fa-circle-check text-success pr-xl-3 pr-1"></i>
                            <span>Candidate Review: Improving the quality of your candidate pipeline and boosting your employer brand with comprehensive candidate reviews.</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}
        <News/>
        <Footer/>
        <BackTop/>
    </>
    )
}

export default SecondService
