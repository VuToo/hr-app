import React from 'react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackTop from '../components/BackTop';

function Contact() {
    return (
    <>
        <Topbar/>
        <Navbar/>
        {/* <!-- Header Start --> */}
        <div className="container-fluid page-header" style={{marginBottom: '30px'}}>
            <div className="container">
                <div className="d-flex flex-column justify-content-center" style={{minHeight: "150px"}}>
                    <h3 className="display-4 text-white text-uppercase">Contact</h3>
                    <div className="d-inline-flex text-white">
                        <p className="m-0 text-uppercase"><a className="text-white" href="/">Home</a></p>
                        <i className="fa fa-angle-double-right pt-1 px-3"></i>
                        <p className="m-0 text-uppercase">Contact</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h5 className="text-primary text-uppercase mb-4" style={{letterSpacing: "5px"}}>Get In Touch</h5>
                        <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, Quận 1, Thành Phố Hồ CHí Minh</p>
                        <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                        <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                        <div className="d-flex justify-content-start mt-4">
                            <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="text-center mb-5">
                            <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Contact</h5>
                            <h1>Contact For Any Query</h1>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="contact-form bg-secondary rounded p-5">
                                    <div id="success"></div>
                                    <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                        <div className="control-group">
                                            <input type="text" className="form-control border-0 p-4" id="name"  placeholder="Full Name" required data-validation-required-message="Please enter your name" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <input type="email" className="form-control border-0 p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <input type="text" className="form-control border-0 p-4" id="phone" placeholder="Your Phone" required="required" data-validation-required-message="Please enter your phone" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <input type="text" className="form-control border-0 p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter your subject" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <textarea className="form-control border-0 py-3 px-4" rows="5" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="text-center">
                                            <button className="btn btn-primary py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>


        <Footer/>
        <BackTop/>
    </>
    )
}

export default Contact
