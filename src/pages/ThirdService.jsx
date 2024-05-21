import React from 'react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackTop from '../components/BackTop';
import News from '../components/News';

function ThirdService() {
    return (
    <>
        <Topbar/>
        <Navbar/>
        {/* <!-- Header Start --> */}
        <div className="container-fluid page-header" style={{marginBottom: '120px'}}>
            <div className="container">
                <div className="d-flex flex-column justify-content-center text-center" style={{minHeight: "120px"}}>
                    <h3 className="display-4 text-white text-uppercase">COMPANY SYSTEM BUILDING</h3>
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
                <div className="row align-items-start">
                    <div className="col-lg-7">
                        <div className='py-3'>
                            <i class="fa-solid fa-circle-check text-success pr-xl-3"></i>
                            <span>Building a thriving organization requires more than just assembling talent—it demands a robust infrastructure and a vibrant culture. At V Talent Solution, our Company System Building service goes beyond mere setup; we're your partners in crafting a workplace tailored to your unique vision. From streamlining processes to fostering a supportive environment, we're dedicated to helping you create a sustainable foundation for success.</span>
                        </div>
                        <div className='py-3'>
                            <i class="fa-solid fa-circle-check text-success pr-xl-3"></i>
                            <span>Building a thriving organization requires more than just assembling talent—it demands a robust infrastructure and a vibrant culture. At V Talent Solution, our Company System Building service goes beyond mere setup; we're your partners in crafting a workplace tailored to your unique vision. From streamlining processes to fostering a supportive environment, we're dedicated to helping you create a sustainable foundation for success.</span>
                        </div>
                        <div className='py-3'>
                            <i class="fa-solid fa-circle-check text-success pr-xl-3"></i>
                            <span>Building a thriving organization requires more than just assembling talent—it demands a robust infrastructure and a vibrant culture. At V Talent Solution, our Company System Building service goes beyond mere setup; we're your partners in crafting a workplace tailored to your unique vision. From streamlining processes to fostering a supportive environment, we're dedicated to helping you create a sustainable foundation for success.</span>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <img className="img-fluid rounded mb-4 mb-lg-0" src="img/blog-1.jpg" alt=""/>
                    </div>
                    <div className="col-lg-12">
                        <h4>Why choose us</h4>
                        <p>At our headhunting firm, we prioritize more than just filling vacancies. We believe that exceptional recruitment goes beyond utilizing databases and advanced technology. Our mission is to connect candidates with clients by accurately matching skills and aligning values with every placement.</p>
                        <p>We understand that experience and expertise are vital, but we also recognize the importance of emotional intelligence and an intuitive grasp of each role. Our comprehensive recruitment process ensures that we provide not only the right skills but also the right fit for your organizational culture. This holistic approach guarantees that every candidate we place contributes meaningfully to your team’s success.</p>
                        <p>Choosing us means partnering with a team dedicated to excellence in recruitment, driven by a commitment to find not just any candidate, but the right candidate for your unique needs. We blend data-driven strategies with human insight to deliver results that exceed expectations.</p>
                        <h4>Core Value</h4>
                        <p><b>Value: </b>We are dedicated to delivering real value to our customers through effective and tailored HR solutions. By focusing on high-quality service, we help our clients optimize their resources and achieve their business objectives. Our priority is to ensure that every solution we design and implement offers the best value, meeting and exceeding our customers' expectations.</p>
                        <p><b>Trust: </b>Building and maintaining trust with our customers is fundamental to our success. We emphasize transparency, integrity, and a steadfast commitment to our promises. Our goal is to ensure that customers can always rely on our services and advice, fostering strong, long-term partnerships based on mutual trust.</p>
                        <p><b>Support: </b>We understand the importance of timely and professional support. We are always ready to assist our customers in every situation, from strategic consulting to resolving unexpected challenges. By providing dedicated and comprehensive support, we help our customers overcome obstacles and achieve sustainable growth.</p>
                        <p></p>
                        <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-black mr-2"></i><b>Email : info@vtalentsolution.com</b></h6>
                        <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-black mr-2"></i><b>Phone : 0382068609</b></h6>
                        <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-black mr-2"></i><b>Địa chỉ:</b></h6>
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

export default ThirdService
