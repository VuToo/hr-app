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
            <div className="row justify-content-center">
                <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                    <p className="m-0 text-white text-center ">&copy; <b>All Rights Reserved by <a href="/" className="text-decoration-none">Vtalentglobal.com</a></b>
                    </p>
                </div>
            </div>
        </div>
    </>
    )
}

export default Footer
