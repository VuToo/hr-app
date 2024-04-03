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
        <div class="container-fluid page-header" style={{marginBottom: '30px'}}>
            <div class="container">
                <div class="d-flex flex-column justify-content-center" style={{minHeight: "150px"}}>
                    <h3 class="display-4 text-white text-uppercase">Contact</h3>
                    <div class="d-inline-flex text-white">
                        <p class="m-0 text-uppercase"><a class="text-white" href="/home">Home</a></p>
                        <i class="fa fa-angle-double-right pt-1 px-3"></i>
                        <p class="m-0 text-uppercase">Contact</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}
        <div class="container-fluid py-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <h5 class="text-primary text-uppercase mb-4" style={{letterSpacing: "5px"}}>Get In Touch</h5>
                        <p><i class="fa fa-map-marker-alt mr-2"></i>123 Street, Quận 1, Thành Phố Hồ CHí Minh</p>
                        <p><i class="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                        <p><i class="fa fa-envelope mr-2"></i>info@example.com</p>
                        <div class="d-flex justify-content-start mt-4">
                            <a class="btn btn-outline-primary btn-square mr-2" href="#"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-primary btn-square mr-2" href="#"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-primary btn-square mr-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-outline-primary btn-square" href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="text-center mb-5">
                            <h5 class="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Contact</h5>
                            <h1>Contact For Any Query</h1>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <div class="contact-form bg-secondary rounded p-5">
                                    <div id="success"></div>
                                    <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                        <div class="control-group">
                                            <input type="text" class="form-control border-0 p-4" id="name"  placeholder="Full Name" required data-validation-required-message="Please enter your name" />
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="control-group">
                                            <input type="email" class="form-control border-0 p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="control-group">
                                            <input type="text" class="form-control border-0 p-4" id="phone" placeholder="Your Phone" required="required" data-validation-required-message="Please enter your phone" />
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="control-group">
                                            <input type="text" class="form-control border-0 p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter your subject" />
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="control-group">
                                            <textarea class="form-control border-0 py-3 px-4" rows="5" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="text-center">
                                            <button class="btn btn-primary py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>
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
