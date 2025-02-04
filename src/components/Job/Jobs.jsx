import React, { useEffect,useState,useContext } from 'react'
import {Context} from '../../main';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { API_URL } from '../../config';
import apiClient from '../../apiclient';

const Jobs = () => {
  const [jobs,setJobs] = useState([]);
  const {isAuthorized} = useContext(Context)
  const navigateTo = useNavigate();
useEffect(()=>{
  try{
        apiClient.get(`/job/getall`,{withCredentials:true}).then((res)=>{
        setJobs(res.data);
       });
  }catch(error)
  {
     console.log(error)
  }
    
},[]);
if(!isAuthorized)
{
  navigateTo("/login");
}
  return (
    <section className='jobs page'>
      <div className='container'>
        <h1>All Jobs here</h1>
        <div className='banner'>
          {jobs.jobs &&
            jobs.jobs.map((item)=>{
              return (
                <div className='card' key={item._id}>
                   <p>{item.title}</p>
                   <p>{item.category}</p>
                   <p>{item.country}</p>
                   <Link to={`/job/${item._id}`}>Job Details</Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Jobs