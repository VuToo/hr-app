import React, { useEffect, useState } from 'react';
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
    const [locationList, setLocationList] = useState([]);
    const getLocationList = async () => {
        await axios(`http://127.0.0.1:8000/api/getLocationsOn`)
        .then((res)=> {
            setLocationList(res.data);
        })
    }
    const [industryList, setIndustryList] = useState([]);
    const getIndustryList = async () => {
        await axios(`http://127.0.0.1:8000/api/getIndustriesOn`)
        .then((res)=> {
            setIndustryList(res.data)
        })
    }
    const [file, setFile] = useState(null);
    // console.log(file);
    const [showFile, setShowFile] = useState('');
    const fileTypes = [
        'doc', 'docx', 'pdf', 'vnd.openxmlformats-officedocument.wordprocessingml.docume' , 'vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    const uploadFile = (file) => {
        setFile(file);
        var url = URL.createObjectURL(file);
        setShowFile(url);
    }
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [recentJob, setRecentJob] = useState('');
    const [locationId, setLocationId] = useState(0);
    const [industryId, setIndustryId] = useState(0);
    const [message, setMessage] = useState('');
    const [checked, setChecked] = useState(0);
    const formatPhoneNumber = /(0[3|5|7|8|9]+([0-9]{8}))\b/g;
    const SubmitCV = () => {
        if(
            fullName === '' && email === '' 
            && phone === '' && recentJob === '' 
            && locationId === '' && message === '' && industryId === '' 
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
        } else if(checked === 0) {
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
            var data = new FormData();
            data.append('fullName', fullName);
            data.append('email', email);
            data.append('phone', phone);
            data.append('recentJob', recentJob);
            data.append('locationId', locationId);
            data.append('industryId', industryId);
            data.append('fileCV', file);
            data.append('message', message);
            data.append('checked', checked);
            axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/submitCv",
                data: data, 
            }).then((res)=>{
                if(res.data.check === true){
                    Toast.fire({
                        icon: 'success',
                        title: 'Send Success!!!'
                    }).then(()=>{
                        setFullName('');
                        setEmail('');
                        setPhone('');
                        setRecentJob('');
                        setLocationId(0);
                        setIndustryId(0);
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
                }else if(res.data.msg.locationId){
                    Toast.fire({
                        icon: 'error',
                        title: res.data.msg.locationId
                    });
                }else if(res.data.msg.industryId){
                    Toast.fire({
                        icon: 'error',
                        title: res.data.msg.industryId
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
    useEffect(()=>{
        getLocationList();
        getIndustryList();
    },[]);
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
                            <div className="col-12">
                                <div className="contact-form bg-secondary rounded p-5">
                                    <div id="success"></div>
                                   
                                        <div className="control-group">
                                            <label htmlFor="fullname"><b style={{ color: "black" }}>FullName <span style={{color: "red"}}>*</span></b></label>
                                            <input type="text" className="form-control border-0 p-4" id='fullname' value={fullName} onChange={(e)=>setFullName(e.target.value)}  placeholder="Full Name" required data-validation-required-message="Please enter your name"/>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <label htmlFor="email"><b style={{ color: "black" }}>Your Email <span style={{color: "red"}}>*</span></b></label>
                                            <input type="email" className="form-control border-0 p-4" id='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <label htmlFor="phone"><b style={{ color: "black" }}>Your Phone <span style={{color: "red"}}>*</span></b></label>
                                            <input type="text" className="form-control border-0 p-4" id='phone' value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Your Phone" required="required" data-validation-required-message="Please enter your phone" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <label htmlFor="recentJob"><b style={{ color: "black" }}>Recent Job <span style={{color: "red"}}>*</span></b></label>
                                            <input type="text" id='recentJob' className="form-control border-0 p-4" value={recentJob} onChange={(e)=>setRecentJob(e.target.value)} placeholder="Recent Job" required="required" data-validation-required-message="Please enter recent job" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group mt-4">
                                            <label htmlFor="location"><b style={{ color: "black" }}>Expected Work Location <span style={{color: "red"}}>*</span></b></label>
                                            <select name="" id="location" className="form-control mt-1" onChange={(e)=> setLocationId(e.target.value)}>
                                                <option value={locationId}>Select Location</option>
                                            {
                                                locationList && locationList.length > 0 && locationList.map((item, index) => (
                                                    <option key={index} value={item.id}>{item.location}</option>
                                                ))
                                            } 
                                            </select>
                                        </div>
                                        <div className="control-group my-4">
                                            <label htmlFor="industry"><b style={{ color: "black" }}>Expected Work Industry <span style={{color: "red"}}>*</span></b></label>
                                            <select name="" id="industry" className="form-control mt-1" onChange={(e)=> setIndustryId(e.target.value)}>
                                                <option value={industryId}>Select Idustry</option>
                                            {
                                                industryList && industryList.length > 0 && industryList.map((item, index)=> (
                                                    <option key={index} value={item.id}>{item.industry}</option>
                                                ))
                                            }
                                            </select>
                                        </div>
                                        <div className="control-group my-4">
                                            <label htmlFor=""><b style={{ color: "black" }}>Attached resume <span style={{color: "red"}}>*</span></b></label>
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
                                            <label htmlFor="message"><b style={{ color: "black" }}>Your Message</b></label>
                                            <textarea className="form-control border-0 py-3 px-4" id='message' rows="5" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        {
                                            checked === 0 ?
                                            <div className="control-group">
                                                <label className='ml-2'  htmlFor="apcept-policy">
                                                    <input className="mr-2" type="checkbox" required="required" id='apcept-policy' onChange={()=>setChecked(1)} data-validation-required-message="Please checked"/>
                                                    I have read and agree to the <a href="/terms-of-use" target='_blank'>Terms of Use</a> and <a href="/terms-of-use" target='_blank'>Privacy Statement</a> of V-Talent Solution.
                                                </label>
                                            </div>
                                            :
                                            <div className="control-group">
                                                <label className='ml-2'  htmlFor="apcept-policy">
                                                    <input className="mr-2" type="checkbox" required="required" id='apcept-policy' onChange={()=>setChecked(0)} data-validation-required-message="Please checked"/>
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
