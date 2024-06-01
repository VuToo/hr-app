import React, { useEffect, useState } from 'react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackTop from '../components/BackTop';
import axios from 'axios';
import Swal from "sweetalert2";
import moment from 'moment';
import SpinnerS from '../components/SpinnerS';


function CarrerOpportunities() {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
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
    const [jobSearch, setJobSearch] = useState([]);
    const getJobWithIndustry = (i) => {
        axios(`http://127.0.0.1:8000/api/getJobsWithIndustry?industryId=`+i+``)
        .then((res)=> {
            setJobSearch(res.data);
        })
    }
    const getJobWithLocation = (i) => {

    }
    console.log(jobSearch);
    const [jobs, setJobs] = useState([]);
    const [page, setPage] = useState(1);
    const [number, setNumber] = useState([])
    const getJobs = ()=> {
        axios.get(`http://127.0.0.1:8000/api/getJobsPage?page=`+page+``)
        .then((res) => {
            setJobs(res.data.data);
            const old = [];
            for (let i = 1; i <= res.data.last_page; i++) {
                old.push(i);
            }
            setNumber(old);
        });
    }
    const [locations, setLocations] = useState([]);
    useEffect(()=>{
        getLocationList();
        getIndustryList();
        getJobs();
    },[]);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/getJobsPage?page=`+page+``)
        .then((res) => {
            setJobs(res.data.data);
            const old = [];
            for (let i = 1; i <= res.data.last_page; i++) {
                old.push(i);
            }
            setNumber(old);
        });
    }, [page]);
    return (
    <>
        <Topbar/>
        <Navbar/>
        <div className="container-fluid py-2">
            <div className="container py-5">
                <div className="row mb-5">
                    <div className='col-lg-12 border rounded bg-secondary'>
                        <h3 className='text-left py-3'>Find the right job for you</h3>
                        <div className="row">
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className="mb-3">
                                    <div className="input-group">
                                        <input type="text" className="form-control form-control-lg" placeholder="Keyword"/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12'>
                                <div className="mb-3">
                                    <div className="input-group">
                                        <select className='w-100 form-control-lg border-0'>
                                            <option value="0" >Select location</option>
                                        {
                                            locationList && locationList.length > 0 && locationList.map((item, index)=>(
                                                <option value={item.id}>{item.location}</option>
                                            ))
                                        }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12'>
                                <div className="mb-3">
                                    <div className="input-group">
                                        <select className='w-100 form-control-lg border-0'>
                                                <option value="0">Industry</option>
                                            {
                                                industryList && industryList.length > 0 && industryList.map((item, index)=>(
                                                    <option value={item.id}>{item.industry}</option>
                                                ))
                                            }
                                            </select>
                                        </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-6 col-sm-12'>
                                <div className="mb-3">
                                    <div className="input-group ">
                                        {/* <a className="btn btn-primary btn-lg py-2 px-4 ml-auto d-lg-block" href="">Search</a> */}
                                        <button className="btn btn-primary btn-lg py-2 px-4 ml-auto w-100 d-lg-block">Search</button>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='col-lg-2 col-md-6 col-sm-12'>
                                <div className="mb-3">
                                    <a className="btn btn-primary btn-lg py-2 px-4 ml-auto d-none d-lg-block" href="">Search</a>
                                </div>
                            </div> */}
                        </div>
                    </div>           
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="row pb-3">
                            <div className="col-lg-12 col-md-12 mb-4">
                                <h4>List Jobs</h4>
                            {
                                jobs && jobSearch.length <=0 && jobs.length>0 && jobs.map((item, index)=>(
                                <div className=" overflow-hidden" key={index}>
                                    <a href={"/detail-job/"+item.id} className="p-4 mb-2 border rounded box-job d-block">
                                        <h5>{item.job_name}</h5>
                                        <div className="pt-2 mt-2">
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Salary : <small>{item.salary}</small></h6>
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Location : <small>{item.location}</small></h6>
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Industry : <small>{item.industryName}</small></h6>
                                            <h6 className="m-0 mt-2"><i className="fa-solid fa-clock text-primary mr-2"></i>Update : <small>{moment(item.updated_at).format('MMMM Do YYYY')}</small></h6>
                                        </div>
                                        {/* <div className="mt-3">
                                            <div className="d-flex flex-wrap m-n1 ">
                                                <a href="" className="btn btn-outline-primary m-1">Đại học</a>
                                                <a href="" className="btn btn-outline-primary m-1">3 năm kinh nghiệm</a>
                                                <a href="" className="btn btn-outline-primary m-1">Consulting</a>
                                            </div>
                                        </div> */}
                                    </a>
                                </div>
                                ))
                            }
                            {
                                jobSearch && jobSearch.length > 0 && jobSearch.map((item, index)=>(
                                <div style={{maxHeight: "500px",minHeight:"100px", overflowY: "auto"}}>
                                    <div className=" overflow-hidden" key={index}>
                                        <a href={"/detail-job/"+item.id} className="p-4 mb-2 border rounded box-job d-block">
                                            <h5>{item.job_name}</h5>
                                            <div className="pt-2 mt-2">
                                                <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Salary : <small>{item.salary}</small></h6>
                                                <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Location : <small>{item.location}</small></h6>
                                                <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Industry : <small>{item.industryName}</small></h6>
                                                <h6 className="m-0 mt-2"><i className="fa-solid fa-clock text-primary mr-2"></i>Update : <small>{moment(item.updated_at).format('MMMM Do YYYY')}</small></h6>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                                ))
                            }
                            {
                                !jobs || jobs.length<=0 &&
                                <div className="overflow-hidden">
                                    <div className="p-4 mb-2 border rounded box-job d-block">
                                    {
                                        <SpinnerS/>
                                    }
                                    </div>
                                    <div className="p-4 mb-2 border rounded box-job d-block">
                                    {
                                        <SpinnerS/>
                                    }
                                    </div>
                                    <div className="p-4 mb-2 border rounded box-job d-block">
                                    {
                                        <SpinnerS/>
                                    }
                                    </div>
                                    <div className="p-4 mb-2 border rounded box-job d-block">
                                    {
                                        <SpinnerS/>
                                    }
                                    </div>
                                </div>
                            }
                            </div>
                            {
                                jobs && jobs.length>0 && jobSearch.length<=0 &&
                                <div className="col-12">
                                    <ul className="pagination">
                                    {
                                        number && number.length>0 && number.map((item,index)=>(
                                            page == item ?
                                                <li className="page-item mx-1 active" key={index} style={{ cursor: "pointer" }} onClick={()=>setPage(item)}>
                                                    <span className="page-link">{item}</span>
                                                </li>
                                            :
                                                <li className="page-item mx-1" key={index} style={{ cursor: "pointer" }} onClick={()=>setPage(item)}>
                                                    <span className="page-link">{item}</span>
                                                </li>
                                        ))
                                    }
                                    </ul>
                                </div> 
                            }
                        </div>
                    </div>
                    <div className="col-lg-4 mt-5 mt-lg-0">
                        
                        <div className="mb-5 border p-3 rounded" >
                            <h4 className="text-uppercase mb-4">Industry</h4>
                            <ul className="list-group list-group-flush border rounded" style={{maxHeight: "500px",minHeight:"100px", overflowY: "auto"}}>
                            {
                                industryList && industryList.length>0 && industryList.map((item, index)=>(
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mx-2" onClick={()=>getJobWithIndustry(item.id)} key={index} style={{ cursor: "pointer" }}>
                                    <a className="text-decoration-none h6 m-0">{item.industry}</a>
                                    <span className="badge badge-primary badge-pill">{item.SL}</span>
                                </li>
                                ))
                            }
                            {
                                !industryList || industryList.length<=0 &&
                                <li>
                                    <SpinnerS/>
                                </li>
                            }
                            </ul>
                        </div>
        
                        <div className="mb-2 border p-3 rounded">
                            <h4 className="text-uppercase mb-4">Jobs by location</h4>
                            <div className="mb-3">
                                <form action="">
                                    <div className="input-group">
                                        <input type="text" className="form-control form-control-sm" placeholder="location"/>
                                        <div className="input-group-append">
                                            <span className="input-group-text bg-transparent text-primary"><i
                                                    className="fa fa-search"></i></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <ul className="list-group list-group-flush" style={{maxHeight: "300px", overflowY: "auto"}}>
                            {
                                locations.length<=0 && locationList && locationList.length>0 && locationList.map((item, index)=>(
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2" onClick={()=>getJobWithLocation()}  style={{ cursor: "pointer" }} key={index}>
                                    <a className="text-decoration-none h6 m-0">{item.location}</a>
                                    <span className="badge badge-primary badge-pill">{item.SL}</span>
                                </li>
                                ))
                            }
                            {
                                !locationList || locationList.length<=0 &&
                                <li>
                                    <SpinnerS/>
                                </li>
                            }
                            </ul>
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

export default CarrerOpportunities
