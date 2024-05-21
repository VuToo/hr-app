import React from 'react'

function About() {
    return (
    <>
        {/* <!-- About Start --> */}
        <div className="container-fluid py-3">
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <img className="img-fluid rounded mb-4 mb-lg-0" src="img/about.jpg" alt=""/>
                    </div>
                    <div className="col-lg-7">
                        <div className="text-left mb-4">
                            <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>About Us</h5>
                            <h1>V-Talent Solution</h1>
                        </div>
                        <p>At V-Talent Solution, we specialize in delivering comprehensive human resource services that add significant value to your business. Our offerings include headhunting, talent sourcing, and consulting, all designed to meet the diverse needs of our clients.</p>
                        <p>Our approach is centered on understanding your unique requirements and providing tailored solutions that drive success. With a team of experienced professionals and a robust network of top talent, we are committed to helping you achieve your business goals.</p>
                        <p>Choose V-Talent Solution for effective, reliable, and innovative HR services that empower your organization to thrive in a competitive landscape. Experience the difference of partnering with a team dedicated to excellence and value creation.</p>
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
