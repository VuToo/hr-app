import React from 'react';
// import "../assets/css/style.css";


function Navbar() {
  return (
    <>
        <div className="container-fluid sticky-top bg-secondary">
            <div className="row border-top px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <a className="d-flex align-items-center justify-content-between w-100 text-decoration-none" href="/" style={{height: '67px', padding: '0 30px'}}>
                        {/* <h5 className="text-primary m-0"><i className="fa fa-book-open mr-2"></i>V-Talent Solution</h5> */}
                        {/* <i className="fa fa-angle-down text-primary"></i> */}
                        {/* <i className="fa fa-book-open mr-2"></i> */}
                        <img  className="img-fluid rounded  mx-auto d-block mb-lg-0" src="../img/vtalent2.png" alt="Logo" style={{ height: "100%", width: "100%" }}/>
                    </a>
                    {/* <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style={{width:'calc(100% - 30px)', zIndex: '9'}}>
                        <div className="navbar-nav w-100">
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link" data-toggle="dropdown">Web Design <i className="fa fa-angle-down float-right mt-1"></i></a>
                                <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                    <a href="" className="dropdown-item">HTML</a>
                                    <a href="" className="dropdown-item">CSS</a>
                                    <a href="" className="dropdown-item">jQuery</a>
                                </div>
                            </div>
                            <a href="" className="nav-item nav-link">Apps Design</a>
                            <a href="" className="nav-item nav-link">Marketing</a>
                            <a href="" className="nav-item nav-link">Research</a>
                            <a href="" className="nav-item nav-link">SEO</a>
                        </div>
                    </nav> */}
                </div>
                <div className="col-lg-9 border-bottom">
                    <nav className="navbar navbar-expand-lg bg-secondary navbar-light py-lg-0 px-0">
                        <a href="/" className="text-decoration-none d-block d-lg-none">
                            {/* <h1 className="m-0"><span className="text-primary">V </span>TALENT</h1> */}
                            <img  className="img-fluid rounded  mx-auto d-block mb-lg-0" src="../img/vtalent2.png" alt="Logo" style={{ height: "30px", width: "100%" }}/>
                        </a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav py-0">
                                <a href="/" className="nav-item nav-link">Home</a>
                                <a href="/about" className="nav-item nav-link">About</a>
                                {/* <a href="course.html" className="nav-item nav-link">Courses</a>
                                <a href="teacher.html" className="nav-item nav-link">Teachers</a> */}
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Our Service</a>
                                    <div className="dropdown-menu rounded m-0 p-0">
                                        <a href="/headhunting-service" className="dropdown-item px-4 py-2">
                                            Headhunting 
                                        </a>
                                        <a href="/talent-sourcing" className="dropdown-item px-4 py-2">Talent Sourcing</a>
                                        <a href="/organizational-restructuring" className="dropdown-item px-4 py-2">Organizational Restructuring</a>
                                    </div>
                                </div>
                                <a href="/search-job" className="nav-item nav-link">Career Opportunities</a>
                                <a href="/news" className="nav-item nav-link">News</a>
                                <a href="/contact" className="nav-item nav-link">Contact</a>
                            </div>
                            <a className="btn btn-primary py-2 px-4 ml-auto d-lg-block" href="/uploadcv">Submit CV</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
