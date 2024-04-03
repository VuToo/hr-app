import React from 'react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackTop from '../components/BackTop';

function Blog() {
    return (
        <>
        <Topbar/>
        <Navbar/>
        {/* <!-- Header Start --> */}
        <div className="container-fluid page-header">
            <div className="container">
                <div className="d-flex flex-column justify-content-center" style={{minHeight: "150px"}}>
                    <h3 className="display-4 text-white text-uppercase">Blog</h3>
                    <div className="d-inline-flex text-white">
                        <p className="m-0 text-uppercase"><a className="text-white" href="/">Home</a></p>
                        <i className="fa fa-angle-double-right pt-1 px-3"></i>
                        <p className="m-0 text-uppercase">Blog</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}

        {/* <!-- Blog Start --> */}
        <div className="container-fluid">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-4 mt-5 mt-lg-0">
        
                        {/* <!-- Search Form --> */}
                        <div className="mb-5">
                            <form action="">
                                <div className="input-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Search blog"/>
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-transparent text-primary"><i
                                                className="fa fa-search"></i></span>
                                    </div>
                                </div>
                            </form>
                        </div>
        
                       
        
                        {/* <!-- Recent Post --> */}
                        <div className="mb-5">
                            <h3 className="text-uppercase mb-4" style={{letterSpacing: "5px"}}>Recent Post</h3>
                            <a className="d-flex align-items-center text-decoration-none mb-3" href="">
                                <img className="img-fluid rounded" src="img/blog-80x80.jpg" alt=""/>
                                <div className="pl-3">
                                    <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                    <small>Jan 01, 2050</small>
                                </div>
                            </a>
                            <a className="d-flex align-items-center text-decoration-none mb-3" href="">
                                <img className="img-fluid rounded" src="img/blog-80x80.jpg" alt=""/>
                                <div className="pl-3">
                                    <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                    <small>Jan 01, 2050</small>
                                </div>
                            </a>
                            <a className="d-flex align-items-center text-decoration-none mb-3" href="">
                                <img className="img-fluid rounded" src="img/blog-80x80.jpg" alt=""/>
                                <div className="pl-3">
                                    <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                    <small>Jan 01, 2050</small>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="row pb-3">
                            <div className="col-lg-6 mb-4">
                                <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                    <img className="img-fluid" src="img/blog-1.jpg" alt=""/>
                                    <a className="blog-overlay text-decoration-none" href="">
                                        <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                        <p className="text-primary m-0">Jan 01, 2050</p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                    <img className="img-fluid" src="img/blog-2.jpg" alt=""/>
                                    <a className="blog-overlay text-decoration-none" href="">
                                        <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                        <p className="text-primary m-0">Jan 01, 2050</p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                    <img className="img-fluid" src="img/blog-3.jpg" alt=""/>
                                    <a className="blog-overlay text-decoration-none" href="">
                                        <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                        <p className="text-primary m-0">Jan 01, 2050</p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                    <img className="img-fluid" src="img/blog-1.jpg" alt=""/>
                                    <a className="blog-overlay text-decoration-none" href="">
                                        <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                        <p className="text-primary m-0">Jan 01, 2050</p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                    <img className="img-fluid" src="img/blog-2.jpg" alt=""/>
                                    <a className="blog-overlay text-decoration-none" href="">
                                        <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                        <p className="text-primary m-0">Jan 01, 2050</p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                    <img className="img-fluid" src="img/blog-3.jpg" alt=""/>
                                    <a className="blog-overlay text-decoration-none" href="">
                                        <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                        <p className="text-primary m-0">Jan 01, 2050</p>
                                    </a>
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
                </div>
            </div>
        </div>
        {/* <!-- Blog End --> */}
        <Footer/>
        <BackTop/>
    </>  
    )
}

export default Blog
