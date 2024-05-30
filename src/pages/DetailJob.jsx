import React from 'react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackTop from '../components/BackTop';
import "../assets/css/app.css";

function DetailJob() {
    return (
    <>
        <Topbar/>
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
                            <img className="img-fluid" src="img/page-header-5.webp" alt=""/>
                            <div className="cat-overlay text-black">
                                <div className="box-info row justify-content-between align-items-center">
                                    <div className="m-2 col-12 col-md-8">
                                        <h5>Trưởng phòng nhân sự (HRM)</h5>
                                        <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill  mr-2"></i>Salary : 4000 USD - 5000 USD</h6>
                                        <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot mr-2"></i>Location : Hồ Chí Minh</h6>
                                        <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Industry : <small>Olis - Gas</small></h6>
                                    </div>
                                    <div className="my-2 col-12 col-md-3 text-center">
                                        <a href="/apply-cv" className="btn btn-primary w-100">Apply</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border rounded">
                            <h3 className='m-3'>Job Detail</h3>
                            <div className="m-3 row">
                                <div className='col-12 col-md-6'>
                                    <p><b>Level: </b>Manager</p>
                                    <p><b>Industry: </b>IT Sofware</p>
                                    <p><b>Job Type: </b>IT Sofware</p>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <p><b>Application No.: </b>1</p>
                                    <p><b>Experience: </b>5-7 Years</p>
                                </div>
                            </div>

                            <hr className="mx-3"/>

                            <h3 className='m-3'>Job Description</h3>
                            {/* <div  className="m-3 row" dangerouslySetInnerHTML={{ __html: job.job_description }}></div> */}

                            <hr className="mx-3"/>

                            <h3 className='m-3'>Job Requirement</h3>
                            {/* <div  className="m-3 row" dangerouslySetInnerHTML={{ __html: job.job_description }}></div> */}
                        </div>
                        <div>
                            <a href="/apply-cv" className="btn btn-primary w-100 mt-3 mb-5">Apply</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 rounded" style={{ boxShadow: "-2px -4px 1px rgba(0, 0, 0, 0.7)" }}>
                        <h3 className="mt-3 text-center"><b>Similar Jobs</b></h3>
                        <div className="rounded" style={{maxHeight: "1000px", overflowY: "auto"}}>
                            <a href="/detail-job" className="p-4 mb-2 bg-secondary-subtle border rounded box-job d-block">
                               <h5>Trưởng Phòng IT</h5>
                                <div className="pt-2 mt-1">
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Lương : <small>1000 - 2000 USD</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Địa điểm : <small>Hà Nội</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Ngành nghề : <small>IT Developer</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-clock text-primary mr-2"></i>Cập nhật : <small>30/05/2024</small></h6>
                                </div>
                            </a>

                            <a href="/detail-job" className="p-4 mb-2 bg-secondary-subtle border rounded box-job d-block">
                               <h5>Trưởng Phòng IT</h5>
                                <div className="pt-2 mt-1">
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Lương : <small>1000 - 2000 USD</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Địa điểm : <small>Hà Nội</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Ngành nghề : <small>IT Developer</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-clock text-primary mr-2"></i>Cập nhật : <small>30/05/2024</small></h6>
                                </div>
                            </a>

                            <a href="/detail-job" className="p-4 mb-2 bg-secondary-subtle border rounded box-job d-block">
                               <h5>Trưởng Phòng IT</h5>
                                <div className="pt-2 mt-1">
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Lương : <small>1000 - 2000 USD</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Địa điểm : <small>Hà Nội</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Ngành nghề : <small>IT Developer</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-clock text-primary mr-2"></i>Cập nhật : <small>30/05/2024</small></h6>
                                </div>
                            </a>

                            <a href="/detail-job" className="p-4 mb-2 bg-secondary-subtle border rounded box-job d-block">
                               <h5>Trưởng Phòng IT</h5>
                                <div className="pt-2 mt-1">
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Lương : <small>1000 - 2000 USD</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Địa điểm : <small>Hà Nội</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Ngành nghề : <small>IT Developer</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-clock text-primary mr-2"></i>Cập nhật : <small>30/05/2024</small></h6>
                                </div>
                            </a>

                            <a href="/detail-job" className="p-4 mb-2 bg-secondary-subtle border rounded box-job d-block">
                               <h5>Trưởng Phòng IT</h5>
                                <div className="pt-2 mt-1">
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Lương : <small>1000 - 2000 USD</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Địa điểm : <small>Hà Nội</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Ngành nghề : <small>IT Developer</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-clock text-primary mr-2"></i>Cập nhật : <small>30/05/2024</small></h6>
                                </div>
                            </a>

                            <a href="/detail-job" className="p-4 mb-2 bg-secondary-subtle border rounded box-job d-block">
                               <h5>Trưởng Phòng IT</h5>
                                <div className="pt-2 mt-1">
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Lương : <small>1000 - 2000 USD</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Địa điểm : <small>Hà Nội</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Ngành nghề : <small>IT Developer</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-clock text-primary mr-2"></i>Cập nhật : <small>30/05/2024</small></h6>
                                </div>
                            </a>

                            <a href="/detail-job" className="p-4 mb-2 bg-secondary-subtle border rounded box-job d-block">
                               <h5>Trưởng Phòng IT</h5>
                                <div className="pt-2 mt-1">
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Lương : <small>1000 - 2000 USD</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Địa điểm : <small>Hà Nội</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Ngành nghề : <small>IT Developer</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-clock text-primary mr-2"></i>Cập nhật : <small>30/05/2024</small></h6>
                                </div>
                            </a>

                            <a href="/detail-job" className="p-4 mb-2 bg-secondary-subtle border rounded box-job d-block">
                               <h5>Trưởng Phòng IT</h5>
                                <div className="pt-2 mt-1">
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Lương : <small>1000 - 2000 USD</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Địa điểm : <small>Hà Nội</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Ngành nghề : <small>IT Developer</small></h6>
                                    <h6 className="m-0 mt-2"><i className="fa fa-solid fa-clock text-primary mr-2"></i>Cập nhật : <small>30/05/2024</small></h6>
                                </div>
                            </a>
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
