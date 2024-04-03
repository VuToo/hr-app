import React from 'react'

function News() {
    return (
    <>
        <div className="container-fluid py-3">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>News</h5>
                    <h1>NEWS</h1>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="cat-item position-relative overflow-hidden rounded">
                            <img className="img-fluid" src="img/course-2.jpg" alt=""/>
                        </div>
                        <div className="bg-secondary p-4">
                            <a className="h5" href="">Is Salary Matter Most To Candidates?</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="cat-item position-relative overflow-hidden rounded">
                            <img className="img-fluid" src="img/course-3.jpg" alt=""/>
                        </div>
                        <div className="bg-secondary p-4">
                            <a className="h5" href="">How Does AI Candidate Screening Help Recruiters?</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="cat-item position-relative overflow-hidden rounded">
                            <img className="img-fluid" src="img/course-5.jpg" alt=""/>
                        </div>
                        <div className="bg-secondary p-4">
                            <a className="h5" href="">What's Vietnam doing to adapt to AI?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}

export default News
