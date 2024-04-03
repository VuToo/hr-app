import React from 'react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackTop from '../components/BackTop';

function AboutUs() {
    return (
    <>
        <Topbar/>
        <Navbar/>
        {/* <!-- Header Start --> */}
        <div className="container-fluid page-header" style={{marginBottom: '90px'}}>
            <div className="container">
                <div className="d-flex flex-column justify-content-center" style={{minHeight: "150px"}}>
                    <h3 className="display-4 text-white text-uppercase">About</h3>
                    <div className="d-inline-flex text-white">
                        <p className="m-0 text-uppercase"><a className="text-white" href="/">Home</a></p>
                        <i className="fa fa-angle-double-right pt-1 px-3"></i>
                        <p className="m-0 text-uppercase">About</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}
        {/* <!-- About Start --> */}
        <div className="container-fluid">
            <div className="container py-5">
                <div className="row align-items-start">
                    <div className="col-lg-7">
                        <p>VTalentGlobal is a reputed name across industries for providing high-value consulting services and business solutions. We help our clients improve their business operations, daily performance, marketing strategy, profitability, business structure and strategy, employee engagement, operations management, and many more. We create the perfect solution by considering the urgent business issues, project obstacles and drawbacks, and also the business goals that our clients want to achieve within the set timeline.</p>
                        <h4>Sharpest Minds and High-End Technology</h4>
                        <p>Our team comprises the sharpest minds in the industry. We take the utmost pride in our expert team who leaves no stones unturned when it comes to finding the right solution and helping your business thrive in the industry. We use state-of-the-art technology and years of industry experience coupled with expertise to devise the right plan of action for your business. We do everything to help you connect with your target group effectively and get conversions of the highest level and achieve all your business goals.</p>
                        <h4>We Work Elaborately on Ground Level</h4>
                        <p>We help our clients in conducting an elaborate market survey to analyze and understand what their target customers want. We also analyze their competitors and their current market share to understand and find a gap in the supply chain to devise the right course of action at the behest of our clients. We do this so that there remains no gap in the demand and supply and make the most of this to rip in the benefits. Remember, running a business successfully always requires a team effort. And, we are here to join our hands so that we can together become a stronger team and bring in all the business success and glory.</p>
                    </div>
                    <div className="col-lg-5">
                        <img className="img-fluid rounded mb-4 mb-lg-0" src="img/about.jpg" alt=""/>
                    </div>
                    <div className="col-lg-12">
                        <h4>Meeting Your Business Goals Is Our Only Goal</h4>
                        <p>We work hard to help each one of our clients work in the right way to achieve their goals and create a strong foothold in the industry. How? We work on their behalf and work dedicatedly to understand the requirements deeply, and accordingly, we come up with a business plan. Whether it is a strategy building, planning for the right marketing path, operations automation, finding the right financial solution, resolving HR issues, adopting the right technology, or following the strictest compliance guidelines; we do it all to help our clients stay afloat in the industry and conduct their business operations in full swing.</p>
                        <h4>Who Benefits from Our Consulting Services?</h4>
                        <p>VTalentGlobal does not restrict its consulting services to any specific industry. We strive to continue with our value addition in your business, no matter which industry you belong to. Right from Healthcare, Information Technology, Media & Advertising, Banking & Financial, Retailing Power & Energy, Telecommunications, and many more industries have gained from our industry experience and expert services</p>
                        <p>Let us discuss your business requirements and analyze the requirements to help you better in growing your business and achieving all your business goals. Let us become the path towards true value addition and business success.</p>
                        <p>Contact us today to know more!</p>
                    
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}
        <Footer/>
        <BackTop/>
    </>
    )
}

export default AboutUs
