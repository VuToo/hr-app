import React from 'react'

function Topbar() {
    return (
    <>
    
        {/* <!-- Topbar Start --> */}
        <div className="container-fluid d-none d-lg-block">
            <div className="row align-items-center px-xl-5">
                <div className="col-lg-3" >
                    <a href="/" className="text-decoration-none">
                        {/* <h1 className="m-0"><span className="text-primary">V </span>TALENT</h1> */}
                        <img  className="img-fluid rounded  mx-auto d-block mb-4 mb-lg-0" src="img/vtalent2.png" alt="Logo" style={{ height: "70px", width: "100%" }}/>
                        {/* <img className="img-fluid rounded mb-4 mb-lg-0" src="img/about.jpg" alt=""/> */}
                    </a>
                </div>
                <div className="col-lg-3 text-right">
                    <div className="d-inline-flex align-items-center">
                        <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                        <div className="text-left">
                            <h6 className="font-weight-semi-bold mb-1">Our Office</h6>
                            <small></small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 text-right">
                    <div className="d-inline-flex align-items-center">
                        <i className="fa fa-2x fa-envelope text-primary mr-3"></i>
                        <div className="text-left">
                            <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
                            <small>info@vtalentsolution.com</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 text-right">
                    <div className="d-inline-flex align-items-center">
                        <i className="fa fa-2x fa-phone text-primary mr-3"></i>
                        <div className="text-left">
                            <h6 className="font-weight-semi-bold mb-1">Call Us</h6>
                            <small>+84382 068 609</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Topbar End --> */}
    </>
    )
}

export default Topbar
