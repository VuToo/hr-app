import React from 'react'

function News() {
    return (
    <>
        <div class="container-fluid py-3">
            <div class="container py-5">
                <div class="text-center mb-5">
                    <h5 class="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>News</h5>
                    <h1>NEWS</h1>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="cat-item position-relative overflow-hidden rounded">
                            <img class="img-fluid" src="img/course-2.jpg" alt=""/>
                        </div>
                        <div class="bg-secondary p-4">
                            <a class="h5" href="">Is Salary Matter Most To Candidates?</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="cat-item position-relative overflow-hidden rounded">
                            <img class="img-fluid" src="img/course-3.jpg" alt=""/>
                        </div>
                        <div class="bg-secondary p-4">
                            <a class="h5" href="">How Does AI Candidate Screening Help Recruiters?</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="cat-item position-relative overflow-hidden rounded">
                            <img class="img-fluid" src="img/course-5.jpg" alt=""/>
                        </div>
                        <div class="bg-secondary p-4">
                            <a class="h5" href="">What's Vietnam doing to adapt to AI?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}

export default News
