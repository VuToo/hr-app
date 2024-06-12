import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import SpinnerS from '../components/SpinnerS';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackTop from '../components/BackTop';

function Blog() {
    const [recentPosts, setRecentPosts] = useState([]);
    const getRecentPosts = async () => {
        await axios(`http://127.0.0.1:8000/api/getPostsOn`)
        .then((res)=>{
            setRecentPosts(res.data);
        })
    }
    const [page, setPage] = useState(1);
    const [number, setNumber] = useState([])
    const [postList, setPostList] = useState([]);
    const getPostList = async () => {
        axios.get(`http://127.0.0.1:8000/api/getPosts8?page=`+page+``)
        .then((res) => {
            setPostList(res.data.data);
            const old = [];
            for (let i = 1; i <= res.data.last_page; i++) {
                old.push(i);
            }
            setNumber(old);
        });
    }
    const [searchPosts, setSearchPosts] = useState([]);
    const getPostsSearch = async (e) => {
        await axios.get(`http://127.0.0.1:8000/api/searchPosts?search=`+e+``)
        .then((res)=>{
            setSearchPosts(res.data);
        })
    }
    useEffect(()=>{
        getRecentPosts();
        getPostList();
    },[])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/getPosts8?page=`+page+``)
        .then((res) => {
            setPostList(res.data.data);
            const old = [];
            for (let i = 1; i <= res.data.last_page; i++) {
                old.push(i);
            }
            setNumber(old);
        });
    }, [page]);
    return (
    <>
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
                <div className="row justify-content-center">
                    <div className="col-lg-4 mt-5 mt-lg-0">
        
                        {/* <!-- Search Form --> */}
                        <div className="mb-2">
                            <form action="">
                                <div className="input-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Search blog" onKeyUp={(e)=>getPostsSearch(e.target.value)}/>
                                    {/* <div className="input-group-append">
                                        <span className="input-group-text bg-transparent text-primary"><i
                                                className="fa fa-search"></i></span>
                                    </div> */}
                                </div>
                            </form>
                        </div>
                        {
                            searchPosts && searchPosts.length > 0 &&
                            <div className="mb-5">
                                <h6 className="text-uppercase mb-4" style={{letterSpacing: "5px"}}>Result</h6>
                                {
                                    searchPosts.map((item, index)=>(
                                    <a className="d-flex align-items-center text-decoration-none mb-3" href={`/news/`+item.id+``} key={index}>
                                        <img className="img-fluid rounded" src={`http://127.0.0.1:8000/images/`+item.imageTitle+``} alt="" style={{ height: "80px", width: "80px" }}/>
                                        <div className="pl-3">
                                            <h6 className="m-1">{item.title}</h6>
                                            <small>{moment(item.created_at).format('MMMM Do YYYY')}</small>
                                        </div>
                                    </a>
                                
                                    ))
                                }
                            </div>                    
                            
                        }
        
                        {/* <!-- Recent Post --> */}
                        <div className="mb-5 mt-5">
                            <h3 className="text-uppercase mb-4" style={{letterSpacing: "5px"}}>Recent Post</h3>
                            {
                                recentPosts && recentPosts.length > 0 && recentPosts.map((item, index)=>(
                                <a className="d-flex align-items-center text-decoration-none mb-3" href={`/news/`+item.id+``} key={index}>
                                    <img className="img-fluid rounded" src={`http://127.0.0.1:8000/images/`+item.imageTitle+``} alt="" style={{ height: "80px", width: "80px" }}/>
                                    <div className="pl-3">
                                        <h6 className="m-1">{item.title}</h6>
                                        <small>{moment(item.created_at).format('MMMM Do YYYY')}</small>
                                    </div>
                                </a>
                                ))
                            }
                            {
                                !recentPosts || recentPosts.length <=0 &&
                                <div>
                                    <div>
                                        {
                                            <SpinnerS/>
                                        }
                                    </div>
                                    <div>
                                        {
                                            <SpinnerS/>
                                        }
                                    </div>
                                    <div>
                                        {
                                            <SpinnerS/>
                                        }
                                    </div>
                                </div>
                                
                            }
                            {/* <a className="d-flex align-items-center text-decoration-none mb-3" href="">
                                <img className="img-fluid rounded" src="../img/blog-80x80.jpg" alt=""/>
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
                            </a> */}
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="row pb-3 justify-content-center">
                            {
                                postList && postList.length>0 && postList.map((item, index)=>(
                                    <div className="col-md-8 col-lg-6 col-11 mb-4">
                                        <div className="blog-item position-relative overflow-hidden rounded mb-2" >
                                            <img className="img-fluid" src={`http://127.0.0.1:8000/images/`+item.imageTitle+``} alt="" style={{ height: "400px", width: "350px" }}/>
                                            <a className="blog-overlay text-decoration-none" href={`/news/`+item.id+``}>
                                                <h5 className="text-white mb-3">{item.title}</h5>
                                                <p className="text-primary m-0">{moment(item.created_at).format('MMMM Do YYYY')}</p>
                                            </a>
                                        </div>
                                    </div>
                                ))
                            }
                            {/* <div className="col-md-8 col-lg-6 mb-4">
                                <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                    <img className="img-fluid" src="img/blog-2.jpg" alt=""/>
                                    <a className="blog-overlay text-decoration-none" href="">
                                        <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                                        <p className="text-primary m-0">Jan 01, 2050</p>
                                    </a>
                                </div>
                            </div> */}
                            
                            {
                                postList && postList.length>0 &&
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
