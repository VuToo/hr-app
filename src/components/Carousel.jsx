import React from 'react'

function Carousel() {
    return (
    <>
        <div className="container-fluid p-0 pb-5 mb-5">
            <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#header-carousel" data-slide-to="1"></li>
                    <li data-target="#header-carousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{maxHeight: '600px'}}>
                        <img className="position-relative w-100" src="img/carousel-05.jpg" style={{minHeight: '300px', objectFit: 'cover'}}/>
                        <div className="carousel-caption d-flex align-items-center justify-content-center">
                            <div className="p-5" style={{width: '100%', maxWidth: '900px'}}>
                                <h5 className="text-white text-uppercase mb-md-3">V-Talent Solution</h5>
                                <h1 className="display-3 text-white mb-md-4">Best Consulting Services and Solutions</h1>
                                <a href="#contact" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{maxHeight: '600px'}}>
                        <img className="position-relative w-100" src="img/carousel-04.jpg" style={{minHeight: '300px', objectFit: 'cover'}}/>
                        <div className="carousel-caption d-flex align-items-center justify-content-center">
                            <div className="p-5" style={{width: '100%', maxWidth: '900px'}}>
                                <h5 className="text-white text-uppercase mb-md-3">Faster - Smarter</h5>
                                <h1 className="display-3 text-white mb-md-4">NOW HIRING</h1>
                                <a href="#contact" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{maxHeight: '600px'}}>
                        <img className="position-relative w-100" src="img/carousel-05.jpg" style={{minHeight: '300px', objectFit: 'cover'}}/>
                        <div className="carousel-caption d-flex align-items-center justify-content-center">
                            <div className="p-5" style={{width: '100%', maxWidth: '900px'}}>
                                <h5 className="text-white text-uppercase mb-md-3">V-Talent Solution</h5>
                                <h1 className="display-3 text-white mb-md-4">New Way To Find Your Job</h1>
                                <a href="#contact" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Carousel
