import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from 'moment';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackTop from '../components/BackTop';
import News from '../components/News';

function DetailBlog() {
    const {id} = useParams();
    const [singlePost, setSinglePost] = useState({});
    const getSinglePost = async () => {
        await axios.get(`http://127.0.0.1:8000/api/getSinglePost?postId=`+id+``)
        .then((res)=>{
            setSinglePost(res.data[0]);
        })
    }
    useEffect(()=>{
        getSinglePost();
    },[]);
    return (
    <>
        <Navbar/>
        <div className="container-fluid">
            <div className="container py-5">
                <div className="row">
                {
                    singlePost &&
                    <div className="col-12 text-justify" style={{ lineHeight: "2.3rem" }}>
                        <h3>{singlePost.title}</h3>
                        <p><i className="fa-regular fa-clock mr-3"></i>{moment(singlePost.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
                        <hr />
                        <div dangerouslySetInnerHTML={{ __html: singlePost.content }}></div>
                    </div>
                }
                </div>
            </div>
        </div>
        <News/>
        <Footer/>
        <BackTop/>
    </>
    )
}

export default DetailBlog
