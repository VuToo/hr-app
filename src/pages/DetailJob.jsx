import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackTop from '../components/BackTop';
import "../assets/css/app.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from 'moment';
import SpinnerS from '../components/SpinnerS';

function DetailJob() {
    const {id} = useParams ();
    const [job, setJob] = useState({});
    const [requirementList, setRequirementList] = useState([{requirement: ""}]);
    const [industryId, setIndustryId] = useState(0);
    const getSingleJob = async () => {
        await axios.get(`http://127.0.0.1:8000/api/getSingleJob?id=`+id+``)
        .then((res)=>{
            setJob(res.data[0]);
            setRequirementList(JSON.parse(res.data[0].job_requirement_list));
            setIndustryId(res.data[0].industry_id);
        })
    }
    const [jobSimilar, setJobSimilar] = useState([]);
    const getJobWithIndustry = () => {
        axios(`http://127.0.0.1:8000/api/getJobsWithIndustry?industryId=`+industryId+``)
        .then((res)=> {
            setJobSimilar(res.data);
        })
    }
    useEffect(()=>{
        getSingleJob();
        getJobWithIndustry();
    },[]);
    return (
    <>
        <Navbar/>
        <div className="container-fluid py-2">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8">
                        {/* <div className="cat-item position-relative overflow-hidden rounded mb-2">
                            <img className="img-fluid" src="img/page-header.jpg" alt=""/>
                            <div className="cat-overlay text-black">
                                <div className="box-info text-center">
                                    
                                    <div className="m-2 col-12">
                                        <button className="btn btn-primary m-2 px-5 py-2">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="position-relative overflow-hidden rounded mb-2">
                            <img className="img-fluid" src="../img/page-header-5.webp" alt=""/>
                            <div className="cat-overlay text-black">
                            {
                                job && 
                                <div className="box-info row justify-content-between align-items-center">
                                    <div className="m-2 col-12 col-md-8">
                                        <h5>{job.job_name}</h5>
                                        <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill  mr-2"></i>Salary : {job.salary}</h6>
                                        <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot mr-2"></i>Location : {job.location}</h6>
                                    </div>
                                    <div className="my-2 col-12 col-md-3 text-center">
                                        <a href={"/apply-cv/"+id} className="btn btn-primary w-100">Apply</a>
                                    </div>
                                </div>
                            }
                            </div>
                        </div>
                        <div className="border rounded">
                            <h3 className='m-3'>Job Detail</h3>
                            <div className="m-3 row">
                                <div className='col-12 col-md-6'>
                                    <p><b>Level: </b></p>
                                    <p><b>Industry: </b>{job.industryName}</p>
                                    <p><b>Job Type: </b></p>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <p><b>Application No.: </b></p>
                                    <p><b>Experience: </b></p>
                                </div>
                            </div>
                            {
                                job.job_description == null ?
                                ''
                                :
                                <div>
                                    <hr className="mx-3"/>
                                    <h3 className='m-3'>Job Description</h3>
                                    <div  className="m-3 row" dangerouslySetInnerHTML={{ __html: job.job_description }}></div>
                                </div>
                            }
                            {
                                job.job_requirements  == null ?
                                ''
                                :
                                <div>
                                    <hr className="mx-3"/>
                                    <h3 className='m-3'>Job Requirement</h3>
                                    <div  className="m-3 row" dangerouslySetInnerHTML={{ __html: job.job_requirements }}></div>
                                </div>
                            }
                            {
                                job.job_benefits == null ?
                                ''
                                :
                                <div>
                                    <hr className="mx-3"/>
                                    <h3 className='m-3'>Job Benefits</h3>
                                    <div  className="m-3 row" dangerouslySetInnerHTML={{ __html: job.job_benefits }}></div>
                                </div>
                            }
                        </div>
                        <div>
                            <a href={"/apply-cv/"+id} className="btn btn-primary w-100 mt-3 mb-5">Apply</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 rounded" style={{ boxShadow: "-2px -4px 1px rgba(0, 0, 0, 0.7)" }}>
                        <h3 className="mt-3 text-center"><b>Similar Jobs</b></h3>
                        <div className="rounded" style={{maxHeight: "1000px", overflowY: "auto"}}>
                        {
                            jobSimilar && jobSimilar.length >0 && jobSimilar.map((item, index)=>(
                            <a href="/detail-job" className="p-4 mb-2 bg-secondary-subtle border rounded box-job d-block" key={index}>
                               <h5>{item.job_name}</h5>
                                <div className="pt-2 mt-1">
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Salry : <small>{item.salary}</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Location : <small>{item.location}</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Industry : <small>{item.industryName}</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-clock text-primary mr-2"></i>Update : <small>{moment(item.updated_at).format('MMMM Do YYYY')}</small></h6>
                                </div>
                            </a>
                            ))
                        }
                        {
                            !jobSimilar || jobSimilar.length<=0 &&
                            <div>
                                <a href="/detail-job" className="p-4 mb-2 bg-secondary-subtle border rounded box-job d-block">
                                {
                                    <SpinnerS/>
                                }
                                </a>
                                <a href="/detail-job" className="p-4 mb-2 bg-secondary-subtle border rounded box-job d-block">
                                {
                                    <SpinnerS/>
                                }
                                </a>
                            </div>
                        }
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

export default DetailJob
