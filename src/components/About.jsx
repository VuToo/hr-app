import React from 'react'

function About() {
    return (
    <>
        {/* <!-- About Start --> */}
        <div className="container-fluid py-3">
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <img className="img-fluid rounded mb-4 mb-lg-0" src="img/about-V.jpg" alt=""/>
                    </div>
                    <div className="col-lg-7">
                        <div className="text-left mb-4">
                            <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>About Us</h5>
                            <h1>V-Talent Solution</h1>
                        </div>
                        <p>At V-Talent Solution, we specialize in delivering comprehensive human resource services that add significant value to your business. Our offerings include headhunting, talent sourcing, and consulting, all designed to meet the diverse needs of our clients.</p>
                        <p>Our approach is centered on understanding your unique requirements and providing tailored solutions that drive success. With a team of experienced professionals and a robust network of top talent, we are committed to helping you achieve your business goals.</p>
                        <p>Choose V-Talent Solution for effective, reliable, and innovative HR services that empower your organization to thrive in a competitive landscape. Experience the difference of partnering with a team dedicated to excellence and value creation.</p>
                        {/* <p>At V-Talent Solution, we specialize in connecting exceptional talent with leading organizations across industries. With a commitment to excellence and a passion for people, we strive to be your trusted partner in navigating the dynamic landscape of recruitment. Our approach is rooted in understanding your unique needs, whether you are a top-tier company seeking top-tier talent or a professional searching for your next career milestone. We believe in building lasting relationships, providing tailored solutions, and delivering results that exceed expectations. Backed by a team of industry experts and a network of top-notch professionals, we are dedicated to empowering growth, fostering innovation, and driving success for both candidates and clients. Experience the difference with V-Talent Solution – where talent meets opportunity, and partnerships thrive.</p> */}
                        <a href="/about" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">View More</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}
    </>
    )
}

export default About
