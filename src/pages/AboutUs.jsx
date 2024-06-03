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
                        <h1 className='text-center mb-5'>V TALENT SOLUTION</h1>
                <div className="row align-items-start">
                    <div className="col-lg-7">
                        <p>At V-Talent Solution, we specialize in connecting exceptional talent with leading organizations across industries. With a commitment to excellence and a passion for people, we strive to be your trusted partner in navigating the dynamic landscape of recruitment. Our approach is rooted in understanding your unique needs, whether you are a top-tier company seeking top-tier talent or a professional searching for your next career milestone. We believe in building lasting relationships, providing tailored solutions, and delivering results that exceed expectations. Backed by a team of industry experts and a network of top-notch professionals, we are dedicated to empowering growth, fostering innovation, and driving success for both candidates and clients. Experience the difference with V-Talent Solution – where talent meets opportunity, and partnerships thrive.</p>
                        
                    </div>
                    <div className="col-lg-5">
                        <img className="img-fluid rounded mb-4 mb-lg-0" src="../img/about-V.jpg" alt=""/>
                    </div>
                    <div className="col-lg-12">
                        <h4>About us</h4>
                        <p>At V-Talent Solution, we specialize in delivering comprehensive human resource services that add significant value to your business. Our offerings include headhunting, talent sourcing, and consulting, all designed to meet the diverse needs of our clients.</p>
                        <p>Our approach is centered on understanding your unique requirements and providing tailored solutions that drive success. With a team of experienced professionals and a robust network of top talent, we are committed to helping you achieve your business goals.</p>
                        <p>Choose V-Talent Solution for effective, reliable, and innovative HR services that empower your organization to thrive in a competitive landscape. Experience the difference of partnering with a team dedicated to excellence and value creation.</p>
                        
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
                        <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-black mr-2"></i><b>Phone : 0382 068 609</b></h6>
                        <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-black mr-2"></i><b>Address: No. 20, Street 8, Ward 11, Go Vap District, Ho Chi Minh City</b></h6>
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
