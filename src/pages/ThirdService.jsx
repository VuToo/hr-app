import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackTop from '../components/BackTop';
import News from '../components/News';

function ThirdService() {
    return (
    <>
        <Navbar/>
        {/* <!-- Header Start --> */}
        <div className="container-fluid page-header" style={{marginBottom: '120px'}}>
            <div className="container">
                <div className="d-flex flex-column justify-content-center text-center" style={{minHeight: "120px"}}>
                    <h3 className="display-4 text-white text-uppercase">Organizational Restructuring</h3>
                    {/* <div className="d-inline-flex text-white">
                        <p className="m-0 text-uppercase"><a className="text-white" href="/">Home</a></p>
                        <i className="fa fa-angle-double-right pt-1 px-3"></i>
                        <p className="m-0 text-uppercase">About</p>
                    </div> */}
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}
        <div className="container-fluid">
            <div className="container py-2">
                <div className="row align-items-center">
                    <div className="col-lg-6 my-3">
                        <div className='py-3 text-justify'>
                            <i class="fa-solid fa-circle-check text-success pr-xl-3 pr-1"></i>
                            <span style={{ lineHeight: "2" }}>Transforming a business requires more than just assembling talent—it demands a comprehensive restructuring to drive growth and success. At V Talent Solution, our Company System Building service is dedicated to revamping your entire organization, focusing on creating value and fostering sustainable growth. From optimizing processes to developing strategic initiatives, we partner with you to build a dynamic and resilient company.</span>
                        </div>
                    </div>
                    <div className="col-lg-6 my-3">
                        <img className="img-fluid rounded mb-4 mb-lg-0" src="../img/Organizational-Restructuring-1.jpg" alt=""/>
                    </div>
                    <div className='col-lg-6 my-3'>
                        <img className="img-fluid rounded mb-4 mb-lg-0" src="img/Organizational-Restructuring-2.jpg" alt=""/>
                    </div>
                    <div className='col-lg-6 my-3 text-justify'>
                        <h4>Values:</h4>
                        <div className='py-1'>
                            <i class="fa-solid fa-circle-check text-success pr-xl-3 pr-1"></i>
                            <span>Comprehensive Restructuring: Offering complete organizational restructuring to enhance efficiency and drive growth.</span>
                        </div>
                        <div className='py-1'>
                            <i class="fa-solid fa-circle-check text-success pr-xl-3 pr-1"></i>
                            <span>Sustainability: Building a solid foundation for your organization to grow and adapt in any circumstances.</span>
                        </div>
                        <div className='py-1'>
                            <i class="fa-solid fa-circle-check text-success pr-xl-3 pr-1"></i>
                            <span>Process Optimization: Streamlining and optimizing business processes to boost productivity and effectiveness.</span>
                        </div>
                        <div className='py-1'>
                            <i class="fa-solid fa-circle-check text-success pr-xl-3 pr-1"></i>
                            <span>Strategic Development: Developing long-term strategies that align with your business goals and promote sustainable growth.</span>
                        </div>
                        <div className='py-1'>
                            <i class="fa-solid fa-circle-check text-success pr-xl-3 pr-1"></i>
                            <span>Cultural Transformation: Cultivating a positive and vibrant organizational culture that enhances employee engagement and retention.</span>
                        </div>
                        <div className='py-1'>
                            <i class="fa-solid fa-circle-check text-success pr-xl-3 pr-1"></i>
                            <span>Long-term Growth: Establishing systems and practices that support long-term growth and adaptability.</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <News/>
        <Footer/>
        <BackTop/>
    </>
    )
}

export default ThirdService
