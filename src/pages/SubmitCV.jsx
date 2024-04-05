import React, { useEffect, useState, useRef } from 'react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackTop from '../components/BackTop';
import { FileUploader } from "react-drag-drop-files";
import Swal from 'sweetalert2';
import Spinner from '../components/Spinner';
import axios from 'axios';


function SubmitCV() {
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

    const [show1, setShow1] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [recentJob, setRecentJob] = useState('');
    const [location, setLocation] = useState('');
    const [message, setMessage] = useState('');
    const [checked, setChecked] = useState(false);
    const formatPhoneNumber = /(0[3|5|7|8|9]+([0-9]{8}))\b/g;
    const SubmitCV = () => {
        if(
            fullName === '' && email === '' 
            && phone === '' && recentJob === '' 
            && location === '' && message === '' 
        ) {
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
        } else if (file === null) {
            Toast.fire({
                icon: 'error',
                title: 'Select your CV file, Please !!!'
            });
        } else {
            setShow1(true);
            var data = new FormData();
            data.append('fullName', fullName);
            data.append('email', email);
            data.append('phone', phone);
            data.append('recentJob', recentJob);
            data.append('location', location);
            data.append('fileCV', file);
            data.append('message', message);
            axios({
                method: "post",
                url: "https://api.vuxtoo.top/api/contactUs",
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
                        setRecentJob('');
                        setLocation('');
                        setMessage('');
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
                }else if(res.data.msg.recentJob){
                    Toast.fire({
                        icon: 'error',
                        title: res.data.msg.recentJob
                    });
                }else if(res.data.msg.location){
                    Toast.fire({
                        icon: 'error',
                        title: res.data.msg.location
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
                                   
                                        <div className="control-group">
                                            <input type="text" className="form-control border-0 p-4" value={fullName} onChange={(e)=>setFullName(e.target.value)}  placeholder="Full Name" required data-validation-required-message="Please enter your name"/>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <input type="email" className="form-control border-0 p-4" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <input type="text" className="form-control border-0 p-4" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Your Phone" required="required" data-validation-required-message="Please enter your phone" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <input type="text" className="form-control border-0 p-4" value={recentJob} onChange={(e)=>setRecentJob(e.target.value)} placeholder="Recent Job" required="required" data-validation-required-message="Please enter recent job" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <input type="text" className="form-control border-0 p-4" value={location} onChange={(e)=>setLocation(e.target.value)} placeholder="Expected Work Location" required="required" data-validation-required-message="Please enter Expected Work Location" />
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
                                            <textarea className="form-control border-0 py-3 px-4" rows="5" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        {
                                            checked === false ?
                                            <div className="control-group">
                                                <label className='ml-2'  htmlFor="apcept-policy">
                                                    <input className="mr-2" type="checkbox" required="required" id='apcept-policy' onChange={()=>setChecked(true)} data-validation-required-message="Please checked"/>
                                                    I have read and agree to the <a href="/terms-of-use" target='_blank'>Terms of Use</a> and <a href="/terms-of-use" target='_blank'>Privacy Statement</a> of V-Talent Solution.
                                                </label>
                                            </div>
                                            :
                                            <div className="control-group">
                                                <label className='ml-2'  htmlFor="apcept-policy">
                                                    <input className="mr-2" type="checkbox" required="required" id='apcept-policy' onChange={()=>setChecked(false)} data-validation-required-message="Please checked"/>
                                                    I have read and agree to the <a href="/terms-of-use" target='_blank'>Terms of Use</a> and <a href="/terms-of-use" target='_blank'>Privacy Statement</a> of V-Talent Solution.
                                                </label>
                                            </div>
                                        }
                                        <div className="text-center">
                                            <button className="btn btn-primary py-3 px-5 mt-5" type="submit" onClick={()=>SubmitCV()}>Submit</button>
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

export default SubmitCV
