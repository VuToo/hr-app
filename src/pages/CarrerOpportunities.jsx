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
        {/* <!-- Blog Start --> */}
        <div class="container-fluid">
            <div class="container py-5">
                <div class="row">
                    <div class="col-lg-4 mt-5 mt-lg-0">
        
                        {/* <!-- Search Form --> */}
                        <div class="mb-5">
                            <form action="">
                                <div class="input-group">
                                    <input type="text" class="form-control form-control-lg" placeholder="Search blog"/>
                                    <div class="input-group-append">
                                        <span class="input-group-text bg-transparent text-primary"><i
                                                class="fa fa-search"></i></span>
                                    </div>
                                </div>
                            </form>
                        </div>
        
                       
        
                        {/* <!-- Recent Post --> */}
                        <div class="mb-5">
                            <h3 class="text-uppercase mb-4" style={{letterSpacing: "5px"}}>Recent Post</h3>
                            <a class="d-flex align-items-center text-decoration-none mb-3" href="">
                                <img class="img-fluid rounded" src="img/blog-80x80.jpg" alt=""/>
                                <div class="pl-3">
                                    <h6 class="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                    <small>Jan 01, 2050</small>
                                </div>
                            </a>
                            <a class="d-flex align-items-center text-decoration-none mb-3" href="">
                                <img class="img-fluid rounded" src="img/blog-80x80.jpg" alt=""/>
                                <div class="pl-3">
                                    <h6 class="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                    <small>Jan 01, 2050</small>
                                </div>
                            </a>
                            <a class="d-flex align-items-center text-decoration-none mb-3" href="">
                                <img class="img-fluid rounded" src="img/blog-80x80.jpg" alt=""/>
                                <div class="pl-3">
                                    <h6 class="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                    <small>Jan 01, 2050</small>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="col-lg-8">
                        <div class="row pb-3">
                            <div class="col-lg-6 mb-4">
                                <div class="blog-item position-relative overflow-hidden rounded mb-2">
                                    <img class="img-fluid" src="img/blog-1.jpg" alt=""/>
                                    <a class="blog-overlay text-decoration-none" href="">
                                        <h5 class="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                        <p class="text-primary m-0">Jan 01, 2050</p>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="blog-item position-relative overflow-hidden rounded mb-2">
                                    <img class="img-fluid" src="img/blog-2.jpg" alt=""/>
                                    <a class="blog-overlay text-decoration-none" href="">
                                        <h5 class="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                        <p class="text-primary m-0">Jan 01, 2050</p>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="blog-item position-relative overflow-hidden rounded mb-2">
                                    <img class="img-fluid" src="img/blog-3.jpg" alt=""/>
                                    <a class="blog-overlay text-decoration-none" href="">
                                        <h5 class="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                        <p class="text-primary m-0">Jan 01, 2050</p>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="blog-item position-relative overflow-hidden rounded mb-2">
                                    <img class="img-fluid" src="img/blog-1.jpg" alt=""/>
                                    <a class="blog-overlay text-decoration-none" href="">
                                        <h5 class="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                        <p class="text-primary m-0">Jan 01, 2050</p>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="blog-item position-relative overflow-hidden rounded mb-2">
                                    <img class="img-fluid" src="img/blog-2.jpg" alt=""/>
                                    <a class="blog-overlay text-decoration-none" href="">
                                        <h5 class="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                        <p class="text-primary m-0">Jan 01, 2050</p>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="blog-item position-relative overflow-hidden rounded mb-2">
                                    <img class="img-fluid" src="img/blog-3.jpg" alt=""/>
                                    <a class="blog-overlay text-decoration-none" href="">
                                        <h5 class="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                        <p class="text-primary m-0">Jan 01, 2050</p>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination pagination-lg justify-content-center mb-0">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span class="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span class="sr-only">Next</span>
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

export default CarrerOpportunities
