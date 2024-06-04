import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackTop from '../components/BackTop';
import News from '../components/News';

function FirstService() {
    return (
    <>
        <Navbar/>
        {/* <!-- Header Start --> */}
        <div className="container-fluid page-header" style={{marginBottom: '120px'}}>
            <div className="container">
                <div className="d-flex flex-column justify-content-center text-center" style={{minHeight: "120px"}}>
                    <h3 className="display-4 text-white text-uppercase">HEADHUNTING SERVICE</h3>
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
                        <div className='py-3 text-justify'>
                            <i className="fa-solid fa-circle-check text-success pr-xl-3 pr-1"></i>
                            <span style={{ lineHeight: "1.8" }}>Discovering top-tier leadership is more than just searching—it's about unearthing hidden gems who will drive your organization forward. At V Talent Solution, our Headhunting Service is dedicated to pinpointing individuals perfectly suited for your specific needs. We're committed to curating a powerhouse of leaders, ensuring your business thrives with a team brimming with energy and expertise.</span>
                        </div>
                    </div>
                    <div className="col-lg-6 my-3">
                        <img className="img-fluid rounded mb-2 mb-lg-0" src="../img/headhunt-1.jpg" alt=""/>
                    </div>
                    <div className="col-lg-6 my-3">
                        <img className="img-fluid rounded mb-4 mb-lg-0" src="../img/headhunt-2.jpg" alt=""/>
                    </div>
                    <div className="col-lg-6 my-3 text-justify">
                        <h4>Values:</h4>
                        <div className='py-2'>
                            <i className="fa-solid fa-circle-check text-success pr-xl-3 pr-1"></i>
                            <span>Talent Discovery: Identifying potential leaders aligned with your strategic goals and specific positions.</span>
                        </div>
                        <div className='py-2'>
                            <i className="fa-solid fa-circle-check text-success pr-xl-3 pr-1"></i>
                            <span>Quality Assurance: Providing only the highest quality candidates, bringing long-term value to your organization.</span>
                        </div>
                        <div className='py-2'>
                            <i className="fa-solid fa-circle-check text-success pr-xl-3 pr-1"></i>
                            <span>Efficient Recruitment: Streamlining the hiring process to quickly find the right candidates, saving you valuable time.</span>
                        </div>
                        <div className='py-2'>
                            <i className="fa-solid fa-circle-check text-success pr-xl-3 pr-1"></i>
                            <span>Extensive Network: Leveraging our vast network to connect with the best talent in the industry.</span>
                        </div>
                    </div>
                    <div className="col-lg-12 mb-3 mt-5 text-center">
                        <h3>RECRUITMENT PROCESS</h3>
                        <img className="img-fluid rounded mb-4 mb-lg-0" src="../img/RECRUITMENT-PROCESS.jpg" alt=""/>
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

export default FirstService
