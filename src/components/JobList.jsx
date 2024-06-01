import React, { useEffect, useState } from 'react';
import SpinnerS from '../components/SpinnerS';
import axios from 'axios';

function JobList() {
    const [jobList, setJobList] = useState([]);
    const getJobs = async () =>{
        await axios(`http://127.0.0.1:8000/api/getJobs6`)
        .then((res)=> {
            setJobList(res.data);
        })
    }
    console.log(jobList);
    useEffect(()=>{
        getJobs();
    },[]);
    return (
    <>
        <div className="container-fluid py-3">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Job</h5>
                    <h1>Our Popular Job</h1>
                </div>
                {
                    jobList && jobList.length>0 &&
                    <div className="row">
                    {
                        jobList.map((item, index)=>(
                        <div className="col-lg-4 col-md-6 mb-4" key={index}>
                            <a href={"/detail-job/"+item.id} className='overflow-hidden d-block'>
                                <div className="p-4 border rounded box-job"  style={{ minHeight: "230px" }}>
                                    <h5>{item.job_name}</h5>
                                    <div className="border-top mt-4 pt-4">
                                        <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Salary : <small>{item.salary}</small></h6>
                                        <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Location : <small>{item.location}</small></h6>
                                        <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Industry : <small>{item.industryName}</small></h6>
                                    </div>
                                </div>
                            </a>
                        </div>
                        ))
                    }    
                    </div>
                }
                {
                    !jobList || jobList.length<=0 &&
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="p-4 border rounded box-job">
                            {
                                <SpinnerS/>
                            }
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="p-4 border rounded box-job">
                            {
                                <SpinnerS/>
                            }
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="p-4 border rounded box-job">
                            {
                                <SpinnerS/>
                            }
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="p-4 border rounded box-job">
                            {
                                <SpinnerS/>
                            }
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="p-4 border rounded box-job">
                            {
                                <SpinnerS/>
                            }
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="p-4 border rounded box-job">
                            {
                                <SpinnerS/>
                            }
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>  
    </>
    )
}

export default JobList
