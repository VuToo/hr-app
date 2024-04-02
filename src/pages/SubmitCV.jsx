import React from 'react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackTop from '../components/BackTop';


function SubmitCV() {
    return (
    <>
        <Topbar/>
        <Navbar/>
        {/* <!-- Header Start --> */}
        <div class="container-fluid page-header" style={{marginBottom: '30px'}}>
            <div class="container">
                <div class="d-flex flex-column justify-content-center" style={{minHeight: "150px"}}>
                    <h3 class="display-4 text-white text-uppercase text-center">SUBMIT YOUR CV</h3>
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}
        <div class="container-fluid py-5 my-3">
            <div class="container">
                <div class="row">
                    {/* <div class="col-lg-5">

                    </div> */}
                    <div class="col-lg-12">
                        <div class="text-center mb-5">
                            <h5 class="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Contact</h5>
                            <h1>Contact For Any Query</h1>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
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
                                            <input type="text" class="form-control border-0 p-4" id="recent-job" placeholder="Recent job" required="required" data-validation-required-message="Please enter recent job" />
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

export default SubmitCV
