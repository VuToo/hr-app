import React from 'react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackTop from '../components/BackTop';

function CarrerOpportunities() {
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
                                            <option value="1">Hồ Chí Minh</option>
                                            <option value="2">Hà Nội</option>
                                            <option value="3">Bình Dương</option>
                                            <option value="4">Đồng Nai</option>
                                            <option value="5">Long An</option>
                                            <option value="6">Hải Phòng</option>
                                            <option value="7">Tiền Giang</option>
                                            <option value="8">Bắc Ninh</option>
                                            <option value="9">An Giang</option>
                                            <option value="10">Đà Nẵng</option>
                                            <option value="11">Huế</option>
                                            <option value="12">Quảng Nam</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12'>
                                <div className="mb-3">
                                    <div className="input-group">
                                        <select className='w-100 form-control-lg border-0'>
                                                <option value="0">Industry</option>
                                                <option value="1">It - software</option>
                                                <option value="2">Financail services</option>
                                                <option value="3">Logistics</option>
                                                <option value="4">Education</option>
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
                                <div className=" overflow-hidden mb-2">
                                    <div className="bg-secondary p-4 mb-4 rounded">
                                        <h5>Trưởng phòng nhân sự (HRM)</h5>
                                        <div className="pt-2 mt-2">
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Lương : <small>4000 USD - 5000 USD</small></h6>
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Địa điểm : <small>Hồ Chí Minh</small></h6>
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Ngành nghề : <small>Olis - Gas</small></h6>
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-clock text-primary mr-2"></i>Cập nhật : <small>01/04/2024</small></h6>
                                        </div>
                                        <div className="mt-3">
                                            <div className="d-flex flex-wrap m-n1 ">
                                                <a href="" className="btn btn-outline-primary m-1">Đại học</a>
                                                <a href="" className="btn btn-outline-primary m-1">3 năm kinh nghiệm</a>
                                                <a href="" className="btn btn-outline-primary m-1">Consulting</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-secondary p-4 mb-4">
                                        <h5>Trưởng phòng nhân sự (HRM)</h5>
                                        <div className="pt-2 mt-2">
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Lương : <small>4000 USD - 5000 USD</small></h6>
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Địa điểm : <small>Hồ Chí Minh</small></h6>
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Ngành nghề : <small>Olis - Gas</small></h6>
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-clock text-primary mr-2"></i>Cập nhật : <small>01/04/2024</small></h6>
                                        </div>
                                        <div className="mt-3">
                                            <div className="d-flex flex-wrap m-n1 ">
                                                <a href="" className="btn btn-outline-primary m-1">Đại học</a>
                                                <a href="" className="btn btn-outline-primary m-1">3 năm kinh nghiệm</a>
                                                <a href="" className="btn btn-outline-primary m-1">Consulting</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-secondary p-4 mb-4 ">
                                        <h5>Trưởng phòng nhân sự (HRM)</h5>
                                        <div className="pt-2 mt-2">
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Lương : <small>4000 USD - 5000 USD</small></h6>
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Địa điểm : <small>Hồ Chí Minh</small></h6>
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Ngành nghề : <small>Olis - Gas</small></h6>
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-clock text-primary mr-2"></i>Cập nhật : <small>01/04/2024</small></h6>
                                        </div>
                                        <div className="mt-3">
                                            <div className="d-flex flex-wrap m-n1 ">
                                                <a href="" className="btn btn-outline-primary m-1">Đại học</a>
                                                <a href="" className="btn btn-outline-primary m-1">3 năm kinh nghiệm</a>
                                                <a href="" className="btn btn-outline-primary m-1">Consulting</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-secondary p-4 mb-4">
                                        <h5>Trưởng phòng nhân sự (HRM)</h5>
                                        <div className="pt-2 mt-2">
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Lương : <small>4000 USD - 5000 USD</small></h6>
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Địa điểm : <small>Hồ Chí Minh</small></h6>
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Ngành nghề : <small>Olis - Gas</small></h6>
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-clock text-primary mr-2"></i>Cập nhật : <small>01/04/2024</small></h6>
                                        </div>
                                        <div className="mt-3">
                                            <div className="d-flex flex-wrap m-n1 ">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-secondary p-4 mb-4">
                                        <h5>Trưởng phòng nhân sự (HRM)</h5>
                                        <div className="pt-2 mt-2">
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-money-bill text-primary mr-2"></i>Lương : <small>4000 USD - 5000 USD</small></h6>
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-location-dot text-primary mr-2"></i>Địa điểm : <small>Hồ Chí Minh</small></h6>
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-briefcase text-primary mr-2"></i>Ngành nghề : <small>Olis - Gas</small></h6>
                                            <h6 className="m-0 mt-2"><i className="fa fa-solid fa-clock text-primary mr-2"></i>Cập nhật : <small>01/04/2024</small></h6>
                                        </div>
                                        <div className="mt-3">
                                            <div className="d-flex flex-wrap m-n1 ">
                                                <a href="" className="btn btn-outline-primary m-1">Đại học</a>
                                                <a href="" className="btn btn-outline-primary m-1">3 năm kinh nghiệm</a>
                                                <a href="" className="btn btn-outline-primary m-1">Consulting</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination pagination-lg justify-content-center mb-0">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-5 mt-lg-0">
                        
                        <div className="mb-5 border p-3 rounded" >
                            <h3 className="text-uppercase mb-4">Industry</h3>
                            <ul className="list-group list-group-flush" style={{maxHeight: "500px", overflowY: "auto"}}>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Financail services</a>
                                    <span className="badge badge-primary badge-pill">150</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Logistics</a>
                                    <span className="badge badge-primary badge-pill">131</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Online Marketing</a>
                                    <span className="badge badge-primary badge-pill">78</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">FMCG</a>
                                    <span className="badge badge-primary badge-pill">56</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Email Marketing</a>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Education</a>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Banking</a>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Media & Advertising</a>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Media & Advertising</a>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Media & Advertising</a>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Media & Advertising</a>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Media & Advertising</a>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Media & Advertising</a>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Media & Advertising</a>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
                            </ul>
                        </div>
        
                        <div className="mb-2 border p-3 rounded">
                            <h3 className="text-uppercase mb-4">Job by location</h3>
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
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Hồ Chí Minh</a>
                                    <span className="badge badge-primary badge-pill">150</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Đà Nẵng</a>
                                    <span className="badge badge-primary badge-pill">131</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Hà Nội</a>
                                    <span className="badge badge-primary badge-pill">78</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">An Giang</a>
                                    <span className="badge badge-primary badge-pill">56</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Quảng Ngãi</a>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Huế</a>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Bình Dương</a>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Đồng Nai</a>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Hải Phòng</a>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Khánh Hòa</a>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Long An</a>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Tiền Giang</a>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Nghệ An</a>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 mr-2">
                                    <a href="" className="text-decoration-none h6 m-0">Quảng Nam</a>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
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
