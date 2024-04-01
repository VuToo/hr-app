import React from 'react'

function About() {
    return (
    <>
        {/* <!-- About Start --> */}
        <div class="container-fluid py-3">
            <div class="container py-5">
                <div class="row align-items-center">
                    <div class="col-lg-5">
                        <img class="img-fluid rounded mb-4 mb-lg-0" src="img/about.jpg" alt=""/>
                    </div>
                    <div class="col-lg-7">
                        <div class="text-left mb-4">
                            <h5 class="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>About Us</h5>
                            <h1>V-Talent Solution</h1>
                        </div>
                        <p>At V-Talent Solution, we specialize in connecting exceptional talent with leading organizations across industries. With a commitment to excellence and a passion for people, we strive to be your trusted partner in navigating the dynamic landscape of recruitment.</p>
                        <p>Our approach is rooted in understanding your unique needs, whether you are a top-tier company seeking top-tier talent or a professional searching for your next career milestone. We believe in building lasting relationships, providing tailored solutions, and delivering results that exceed expectations.</p>
                        <p>Backed by a team of industry experts and a network of top-notch professionals, we are dedicated to empowering growth, fostering innovation, and driving success for both candidates and clients.</p>
                        <p>Experience the difference with V-Talent Solution – where talent meets opportunity, and partnerships thrive.</p>
                        <a href="/about" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">View More</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}
    </>
    )
}

export default About
