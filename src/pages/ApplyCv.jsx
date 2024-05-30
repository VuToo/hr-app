import React, { useEffect, useState, useRef } from 'react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackTop from '../components/BackTop';
import "../assets/css/app.css";
import { FileUploader } from "react-drag-drop-files";


function ApplyCv() {
    const [file, setFile] = useState(null);
    // console.log(file);
    const [showFile, setShowFile] = useState('');
    const fileTypes = [
        'doc', 'docx', 'pdf'
    ];
    const uploadFile = (file) => {
        setFile(file);
        var url = URL.createObjectURL(file);
        setShowFile(url);
    }
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [checked, setChecked] = useState(0);

    return (
    <>
        <Topbar/>
        <Navbar/>
        <div className="container-fluid page-header" >
            <div className="container">
                <div className="d-flex flex-column justify-content-center" style={{minHeight: "200px"}}>
                    <h3 className="display-4 text-white text-uppercase text-center">Apply CV Form</h3>
                </div>
            </div>
        </div>
        <div className="container-fluid py-2">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="border rounded  border-dark">
                            <div className='m-3'>
                                <h4><i class="fa-solid fa-briefcase mr-2 text-primary"></i>Job Information</h4>
                                <hr className=""/>
                                <h5>Trưởng phòng nhân sự (HRM)</h5>
                                <p className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Salary : 4000 USD - 5000 USD</p>
                                <p className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Location : Hồ Chí Minh</p>
                                <p className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Industry : <small>Olis - Gas</small></p>
                            </div>
                        </div>
                        <div className="border rounded  border-dark my-2">
                            <div className="m-3">
                                <h6><i class="fa-solid fa-notes-medical text-primary mr-2"></i>Note:</h6>
                                <ol>
                                    <li>In order to attract Employers to see CV soon, Candidates should choose to apply by CV Online & write your expectations in the cover letter.</li>
                                    <li>Please carefully review the job and company information in the "Company Information" display at each vacancy before applying.</li>
                                    <li>For the best experience, it is recommended to use popular browsers such as Google Chrome or Firefox to access the website https://v-talent.com.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="border rounded border-dark">
                            <div className='m-2'>
                                <h4><i class="fa-solid fa-briefcase mr-2 text-primary"></i>Candidate Information</h4>
                                <hr className=""/>
                                <div className="control-group">
                                    <label htmlFor="fullname"><b style={{ color: "black" }}>FullName <span style={{color: "red"}}>*</span></b></label>
                                    <input type="text" className="form-control p-3" id='fullname' value={fullName} onChange={(e)=>setFullName(e.target.value)}  placeholder="Full Name" required data-validation-required-message="Please enter your name"/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <label htmlFor="email"><b style={{ color: "black" }}>Your Email <span style={{color: "red"}}>*</span></b></label>
                                    <input type="email" className="form-control border p-3" id='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <label htmlFor="phone"><b style={{ color: "black" }}>Your Phone <span style={{color: "red"}}>*</span></b></label>
                                    <input type="text" className="form-control border p-3" id='phone' value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Your Phone" required="required" data-validation-required-message="Please enter your phone" />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                        </div>
                        <div className="border rounded border-dark my-2">
                            <div className='m-2'>
                                <div className="control-group my-4">
                                    <h4><i class="fa-solid fa-upload mr-2 mb-3 text-primary"></i>Upload your CV</h4>
                                    <FileUploader handleChange={uploadFile} name="file" types={fileTypes} multiple={false}/>
                                </div>
                                <div className="control-group mb-2">
                                {
                                    showFile !== '' &&
                                    <h5>{file.name}</h5>
                                }
                                </div>
                            </div>
                        </div>
                        <div className="my-2 mt-4">
                            <div className=''>
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
                                    <button className="btn btn-primary py-2 px-5 my-3" type="submit">Submit</button>
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

export default ApplyCv
