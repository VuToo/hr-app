import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackTop from '../components/BackTop';
import Swal from 'sweetalert2';
import Spinner from '../components/Spinner';
import axios from 'axios';


function Contact() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }                                    
    });
    const [show1, setShow1] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [checked, setChecked] = useState(false);
    const formatPhoneNumber = /(0[3|5|7|8|9]+([0-9]{8}))\b/g;
    // console.log(fullName, email, phone, subject, message, checked);
    const submitContact = () =>{
        if(fullName === '' && email === '' && phone === '' && subject === '' && message === '') { 
            Toast.fire({
                icon: 'error',
                title: 'Please enter information !!'
            });
        } else if(!phone.match(formatPhoneNumber)) {
            Toast.fire({
                icon: 'error',
                title: 'Your phone number format is incorrect !!'
            });
        } else if(checked === false) {
            Toast.fire({
                icon: 'error',
                title: 'Do you agree to our terms and conditions?'
            });
        } else {
            setShow1(true);
            var data = new FormData();
            data.append('fullName', fullName);
            data.append('email', email);
            data.append('phone', phone);
            data.append('subject', subject);
            data.append('message', message);
            axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/contactUs",
                data: data, 
            }).then((res)=>{
                setShow1(false);
                if(res.data.check === true){
                    Toast.fire({
                        icon: 'success',
                        title: 'Send Success!!!'
                    }).then(()=>{
                        setFullName('');
                        setEmail('');
                        setPhone('');
                        setSubject('');
                        setMessage('');
                        setChecked(false);
                    })
                }else if(res.data.msg.fullName){
                    Toast.fire({
                        icon: 'error',
                        title: res.data.msg.fullName
                    });
                }else if(res.data.msg.email){
                    Toast.fire({
                        icon: 'error',
                        title: res.data.msg.email
                    });
                }else if(res.data.msg.phone){
                    Toast.fire({
                        icon: 'error',
                        title: res.data.msg.phone
                    });
                }else if(res.data.msg.subject){
                    Toast.fire({
                        icon: 'error',
                        title: res.data.msg.subject
                    });
                }else if(res.data.msg.message){
                    Toast.fire({
                        icon: 'error',
                        title: res.data.msg.message
                    });
                }
            })
        }
    }
    return (
    <>
        {
            show1 && 
            <Spinner/>
        }
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

        {/* <div className="container-fluid py-5">
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
        </div> */}

        <div className="container-fluid bg-registration py-5" style={{margin: "90px 0"}}>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="mb-4">
                            <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>GET IN TOUCH</h5>
                            <h3 className="text-white">V TALENT SOLUTION</h3>
                        </div>
                        <p className='text-white'><i className="fa fa-map-marker-alt text-primary mr-2"></i>No. 20, Street 8, Ward 11, Go Vap District, Ho Chi Minh City</p>
                        <p className='text-white'><i className="fa fa-phone-alt text-primary mr-2"></i>0382 068 609</p>
                        <p className='text-white'><i className="fa fa-envelope text-primary mr-2"></i>info@vtalentsolution.com</p>
                        
                        <ul className="list-inline text-white m-0">
                            <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Vision: To be the leading provider of top-tier talent solutions, fostering growth and innovation in organizations worldwide </li>
                            <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Mission: To connect exceptional talent with dynamic organizations, driving mutual growth and success through strategic and customized HR solutions.</li>
                        </ul>
                        <div className="d-flex justify-content-start mt-4">
                            <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card border-0">
                            <div className="text-center mb-5">
                                <h5 className="text-primary text-uppercase my-3" style={{letterSpacing: "5px"}}>Contact</h5>
                                <h1>Contact For Any Query</h1>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                    <div className="contact-form bg-secondary rounded p-5">
                                        <div id="success"></div>
                                            <div className="control-group">
                                                {/* <label htmlFor="fullName" className='font-weight-bold text-black'>Full Name <span className='text-red'>*</span></label> */}
                                                <input type="text" className="form-control border-0 p-4" id='fullName' onChange={(e)=>setFullName(e.target.value)} value={fullName}  placeholder="Full Name" required data-validation-required-message="Please enter your name" />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="control-group mt-4">
                                                {/* <label htmlFor="email" className='font-weight-bold text-black'>Your Email <span className='text-red'>*</span></label> */}
                                                <input type="email" className="form-control border-0 p-4" id='email' onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="control-group mt-4">
                                                {/* <label htmlFor="phone" className='font-weight-bold text-black'>Your Phone <span className='text-red'>*</span></label> */}
                                                <input type="text" className="form-control border-0 p-4" id='phone' onChange={(e)=>setPhone(e.target.value)} value={phone} placeholder="Your Phone" required="required" data-validation-required-message="Please enter your phone" />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="control-group mt-4">
                                                {/* <label htmlFor="subject" className='font-weight-bold text-black'>Your Subject <span className='text-red'>*</span></label> */}
                                                <input type="text" className="form-control border-0 p-4" id='subject' onChange={(e)=>setSubject(e.target.value)} value={subject} placeholder="Subject" required="required" data-validation-required-message="Please enter your subject"/>
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="control-group mt-4">
                                                {/* <label htmlFor="message" className='font-weight-bold text-black'>Message <span className='text-red'>*</span></label> */}
                                                <textarea className="form-control border-0 py-3 px-4" rows="5" id='message' onChange={(e)=>setMessage(e.target.value)} value={message} placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            {
                                                checked === false ?
                                                <div className="control-group">
                                                    
                                                    <label className='ml-2'  htmlFor="apcept-policy">
                                                        <input className="mr-2" type="checkbox" required="required" id='apcept-policy' onChange={()=>setChecked(true)} data-validation-required-message="Please checked"/>
                                                        I have read and agree to the <a href="/terms-of-use" target='_blank'>Terms of Use</a> and <a href="/terms-of-use" target='_blank'>Privacy Statement</a> of V Talent Solution.
                                                    </label>
                                                </div>
                                                :
                                                <div className="control-group">
                                                    <label className='ml-2'  htmlFor="apcept-policy">
                                                        <input className="mr-2" type="checkbox" required="required" id='apcept-policy' onChange={()=>setChecked(false)} data-validation-required-message="Please checked"/>
                                                        I have read and agree to the <a href="/terms-of-use" target='_blank'>Terms of Use</a> and <a href="/terms-of-use" target='_blank'>Privacy Statement</a> of V Talent Solution.
                                                    </label>
                                                </div>
                                            }
                                            
                                            <div className="text-center">
                                                <button className="btn btn-primary py-3 px-5" type="submit" onClick={(e)=>submitContact()}>Send Message</button>
                                            </div>
                                          
                                    </div>
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
