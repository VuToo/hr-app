import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SpinnerS from '../components/SpinnerS';

function News() {
    const [postList, setPostList] = useState([]);
    const getPostList = async () =>{
        await axios.get(`http://127.0.0.1:8000/api/getPostsOn`)
        .then((res)=>{
            setPostList(res.data);
        })
    }
    useEffect(()=>{
        getPostList();
    },[])
    return (
    <>
        <div className="container-fluid py-3">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>News</h5>
                    <h1>NEWS</h1>
                </div>
                <div className="row justify-content-end mb-3">
                    <a className="h3 mx-3" href="/news">View more</a>
                </div>
                {
                    postList && postList.length>0 &&
                    <div className="row justify-content-center">
                    {
                        postList.map((item,index)=>(
                        <div className="col-lg-3 col-md-6 col-12 mb-4" key={index}>
                            <div className="cat-item position-relative overflow-hidden rounded">
                                <img className="img-fluid" src={`http://127.0.0.1:8000/images/`+item.imageTitle+``} alt="Image News" style={{ height: "230px", width: "350px" }}
/>
                            </div>
                            <div className="bg-secondary rounded p-4 m-0" style={{ minHeight: "120px" }}>
                                <a className="h6" href={`/news/`+item.id+``}>{item.title}</a>
                            </div>
                        </div>
                        ))    
                    }
                    </div>
                }
                {
                    !postList || postList.length<=0 &&
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12 mb-4">
                            <div className="bg-secondary rounded p-4">
                            {
                                <SpinnerS/>
                            }
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mb-4">
                            <div className="bg-secondary rounded p-4">
                            {
                                <SpinnerS/>
                            }
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mb-4">
                            <div className="bg-secondary rounded p-4">
                            {
                                <SpinnerS/>
                            }
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mb-4">
                            <div className="bg-secondary rounded p-4">
                            {
                                <SpinnerS/>
                            }
                            </div>
                        </div>
                    </div>
                }
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="cat-item position-relative overflow-hidden rounded">
                            <img className="img-fluid" src="../img/course-2.jpg" alt=""/>
                        </div>
                        <div className="bg-secondary p-4">
                            <a className="h5" href="">Is Salary Matter Most To Candidates?</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="cat-item position-relative overflow-hidden rounded">
                            <img className="img-fluid" src="../img/course-3.jpg" alt=""/>
                        </div>
                        <div className="bg-secondary p-4">
                            <a className="h5" href="">How Does AI Candidate Screening Help Recruiters?</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="cat-item position-relative overflow-hidden rounded">
                            <img className="img-fluid" src="../img/course-5.jpg" alt=""/>
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
