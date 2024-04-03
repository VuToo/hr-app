import React, { useEffect, useState, useRef } from 'react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackTop from '../components/BackTop';
import { FileUploader } from "react-drag-drop-files";


function SubmitCV() {
    const [file, setFile] = useState(null);
    console.log(file);
    const [showFile, setShowFile] = useState('');
    const fileTypes = [
        'doc', 'docx', 'pdf'
    ];
    const uploadFile = (file) => {
        setFile(file);
        var url = URL.createObjectURL(file);
        setShowFile(url);
    } 
    return (
    <>
        <Topbar/>
        <Navbar/>
        {/* <!-- Header Start --> */}
        <div className="container-fluid page-header" style={{marginBottom: '30px'}}>
            <div className="container">
                <div className="d-flex flex-column justify-content-center" style={{minHeight: "150px"}}>
                    <h3 className="display-4 text-white text-uppercase text-center">SUBMIT YOUR CV</h3>
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}
        <div className="container-fluid py-5 my-3">
            <div className="container">
                <div className="row">
                    {/* <div className="col-lg-5">

                    </div> */}
                    <div className="col-lg-12">
                        <div className="text-center mb-5">
                            {/* <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Contact</h5> */}
                            <h1>FILLING IN THE FORM</h1>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
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
                                            <input type="text" className="form-control border-0 p-4" id="recent-job" placeholder="Recent Job" required="required" data-validation-required-message="Please enter recent job" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <input type="text" className="form-control border-0 p-4" id="work-location" placeholder="Expected Work Location" required="required" data-validation-required-message="Please enter Expected Work Location" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group w-100">
                                            <FileUploader handleChange={uploadFile} name="file" types={fileTypes} multiple={false}/>
                                        </div>
                                        <div className="control-group mb-2">
                                        {
                                            showFile !== '' &&
                                            // <img src={showFile} alt=" " style={{ 'height':'120px', 'width' : 'auto'}}/>
                                            <h5>{file.name}</h5>
                                        }
                                        </div>
                                        <div className="control-group">
                                            <textarea className="form-control border-0 py-3 px-4" rows="5" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <input className="" type="checkbox" value="" required="required" id="apcept-policy" data-validation-required-message="Please checked"/>
                                            <label className='ml-2'  htmlFor="apcept-policy">
                                                I have read and agree to the <a href="/terms-of-use" target='_blank'>Terms of Use</a> and <a href="/terms-of-use" target='_blank'>Privacy Statement</a> of V-Talent Solution.
                                            </label>
                                        </div>
                                        <div className="text-center">
                                            <button className="btn btn-primary py-3 px-5 mt-5" type="submit" id="sendMessageButton">Submit</button>
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
