import React from 'react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackTop from '../components/BackTop';
import News from '../components/News';

function FirstService() {
    return (
    <>
        <Topbar/>
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
                        <div className='py-3'>
                            <i className="fa-solid fa-circle-check text-success pr-xl-3"></i>
                            <span>Discovering top-tier leadership is more than just searching—it's about unearthing hidden gems who will drive your organization forward. At V Talent Solution, our Headhunting Service is dedicated to pinpointing individuals perfectly suited for your specific needs. We're committed to curating a powerhouse of leaders, ensuring your business thrives with a team brimming with energy and expertise.</span>
                        </div>
                    </div>
                    <div className="col-lg-6 my-3">
                        <img className="img-fluid rounded mb-2 mb-lg-0" src="../img/headhunt-1.jpg" alt=""/>
                    </div>
                    <div className="col-lg-6 my-3">
                        <img className="img-fluid rounded mb-4 mb-lg-0" src="../img/headhunt-2.jpg" alt=""/>
                    </div>
                    <div className="col-lg-6 my-3">
                        <h4>Value:</h4>
                        <div className='py-3'>
                            <i className="fa-solid fa-circle-check text-success pr-xl-3"></i>
                            <span>Talent Discovery: Identifying potential leaders aligned with your strategic goals and specific positions.</span>
                        </div>
                        <div className='py-3'>
                            <i className="fa-solid fa-circle-check text-success pr-xl-3"></i>
                            <span>Quality Assurance: Providing only the highest quality candidates, bringing long-term value to your organization.</span>
                        </div>
                        <div className='py-3'>
                            <i className="fa-solid fa-circle-check text-success pr-xl-3"></i>
                            <span>Efficient Recruitment: Streamlining the hiring process to quickly find the right candidates, saving you valuable time.</span>
                        </div>
                        <div className='py-3'>
                            <i className="fa-solid fa-circle-check text-success pr-xl-3"></i>
                            <span>Extensive Network: Leveraging our vast network to connect with the best talent in the industry.</span>
                        </div>
                    </div>
                    <div className="col-lg-12 my-3">
                        <div className='mb-3'>
                            <h4>Vision & Mission</h4>
                            <p>Vision: To be the leading provider of top-tier talent solutions, fostering growth and innovation in organizations worldwide </p>
                            <p>Mission: To connect exceptional talent with dynamic organizations, driving mutual growth and success through strategic and customized HR solutions.</p>
                        </div>
                        <div className='mb-3'>
                            <p>Let V Talent Solution help you overcome your challenges in recruitment, talent sourcing, and organizational restructuring.</p>
                            <p>Send your requirement to info@vtalentsolution.com & we will call you as soon as possible.</p>
                        </div>
                        <div className='mb-3'>
                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-black mr-2"></i><b>Email : info@vtalentsolution.com</b></h6>
                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-black mr-2"></i><b>Phone : 0382 068 609</b></h6>
                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-black mr-2"></i><b>Address: No. 20, Street 8, Ward 11, Go Vap District, Ho Chi Minh City</b></h6>
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

export default FirstService
