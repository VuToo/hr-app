import React from 'react'

function Footer() {
    return (
    <>
        <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{borderColor:'rgba(256, 256, 256, .1) !important'}}>
            {/* <div className="row justify-content-center">
                <div className="col-lg-4">
                    <div className="d-inline-flex align-items-center">
                        <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                        <div className="text-left m-0">
                            <h6 className="font-weight-semi-bold mb-1 text-white">Our Office</h6>
                            <small>No. 20, Street 8, Ward 11, Go Vap District, Ho Chi Minh City</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-inline-flex align-items-center">
                        <i className="fa fa-2x fa-envelope text-primary mr-3"></i>
                        <div className="text-left">
                            <h6 className="font-weight-semi-bold mb-1 text-white">Email Us</h6>
                            <small>info@vtalentsolution.com</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-inline-flex align-items-center justify-content-center">
                        <i className="fa fa-2x fa-phone text-primary mr-3"></i>
                        <div className="text-left">
                            <h6 className="font-weight-semi-bold mb-1 text-white ">Call Us</h6>
                            <small>+84382 068 609</small>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="row justify-content-between">
                <div className="col-12 col-md-3">
                    {/* <h3 className='text-white bolder'>V-Talent Solution</h3> */}
                    <p><i className="fa fa-map-marker-alt text-primary mr-3"></i><small>No. 20, Street 8, Ward 11, Go Vap District, Ho Chi Minh City</small></p>
                    <p><i className="fa fa-envelope text-primary mr-3"></i><small>info@vtalentsolution.com</small></p>
                    <p><i className="fa fa-phone text-primary mr-3"></i><small>+84382 068 609</small></p>
                    <div className="d-flex justify-content-start mt-4">
                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="col-12 col-md-3 mt-4">
                    <h3 className='text-white bolder'>Our service</h3>
                    <ul className='p-0' style={{ listStyleType: "none" }}>
                        <li><a href="/headhunting-service" className='text-white'>Headhunting</a></li>
                        <li><a href="/talent-sourcing" className='text-white'>Talent Sourcing</a></li>
                        <li><a href="/organizational-restructuring" className='text-white'>Organizational Restructuring</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-3 mt-4">
                    <h3></h3>
                    <h6><a href="/about" className='text-white'>About Us</a></h6>
                    <h6><a href="/search-job" className='text-white'>Career Opportunities</a></h6>
                    <h6><a href="/news" className='text-white'>News</a></h6>
                    <h6><a href="/contact" className='text-white'>Contact Us</a></h6>
                    <h6><a href="/uploadcv" className='text-white'>Submit CV</a></h6>
                </div>
            </div>
            <hr className='bg-light'/>
            <div className="row justify-content-center">
                <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                    <p className="m-0 text-white text-center ">&copy; <b>All Rights Reserved by <a href="/" className="text-decoration-none">Vtalentsolution.com.vn</a></b>
                    </p>
                </div>
            </div>
        </div>
    </>
    )
}

export default Footer
