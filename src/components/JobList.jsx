import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';

function JobList() {
    const [jobList, setJobList] = useState([]);
    const getJobs = async () =>{
        await axios(`http://127.0.0.1:8000/api/getLocationsOn`)
        .then((res)=> {
            setJobList(res.data);
        })
    }
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
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <a href='/' className='overflow-hidden d-block'>
                            <div className="p-4 border rounded box-job ">
                                <h5>Trưởng phòng nhân sự (HRM)</h5>
                                <div className="border-top mt-4 pt-4">
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Salary : <small>4000 USD - 5000 USD</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Location : <small>Hồ Chí Minh</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Industry : <small>Olis - Gas</small></h6>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <a href='/detail-job' className='overflow-hidden d-block'>
                            <div className="p-4 border rounded box-job ">
                                <h5>Trưởng phòng nhân sự (HRM)</h5>
                                <div className="border-top mt-4 pt-4">
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Salary : <small>4000 USD - 5000 USD</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Location : <small>Hồ Chí Minh</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Industry : <small>Olis - Gas</small></h6>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <a href='/detail-job' className='overflow-hidden d-block'>
                            <div className="p-4 border rounded box-job ">
                                <h5>Trưởng phòng nhân sự (HRM)</h5>
                                <div className="border-top mt-4 pt-4">
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Salary : <small>4000 USD - 5000 USD</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Location : <small>Hồ Chí Minh</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Industry : <small>Olis - Gas</small></h6>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <a href='/detail-job' className='overflow-hidden d-block'>
                            <div className="p-4 border rounded box-job ">
                                <h5>Trưởng phòng nhân sự (HRM)</h5>
                                <div className="border-top mt-4 pt-4">
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Salary : <small>4000 USD - 5000 USD</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Location : <small>Hồ Chí Minh</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Industry : <small>Olis - Gas</small></h6>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <a href='/detail-job' className='overflow-hidden d-block'>
                            <div className="p-4 border rounded box-job ">
                                <h5>Trưởng phòng nhân sự (HRM)</h5>
                                <div className="border-top mt-4 pt-4">
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Salary : <small>4000 USD - 5000 USD</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Location : <small>Hồ Chí Minh</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Industry : <small>Olis - Gas</small></h6>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <a href='/detail-job' className='overflow-hidden d-block'>
                            <div className="p-4 border rounded box-job ">
                                <h5>Trưởng phòng nhân sự (HRM)</h5>
                                <div className="border-top mt-4 pt-4">
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Salary : <small>4000 USD - 5000 USD</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Location : <small>Hồ Chí Minh</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Industry : <small>Olis - Gas</small></h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    {/* <div className="col-lg-4 col-md-6 mb-4">
                        <div className="rounded overflow-hidden mb-2">
                            <img className="img-fluid" src="img/course-6.jpg" alt=""/>
                            <div className="bg-secondary p-4">
                                <div className="d-flex justify-content-between mb-3">
                                    <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>2 People</small>
                                    <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                                </div>
                                <a className="h5" href="">Trưởng phòng kinh doanh</a>
                                <div className="border-top mt-4 pt-4">
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Lương : <small>40 triêu - 50 triệu</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Địa điểm : <small>Hồ Chí Minh</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Lương : <small>FMCG</small></h6>
                                    
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>  
    </>
    )
}

export default JobList
