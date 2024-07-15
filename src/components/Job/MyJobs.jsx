import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { Context } from '../../main';
import { useNavigate } from 'react-router-dom';

const MyJobs = () => {
  const [myJobs, setMyJobs] = useState([]);
  const [editingMode, setEditingMode] = useState(null);
  const { isAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/job/getmyjobs", { withCredentials: true });
        if (data && data.myJobs) {
          setMyJobs(data.myJobs);
        } else {
          setMyJobs([]);
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Error fetching jobs");
        setMyJobs([]);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!isAuthorized || (user && user.role !== "Employer")) {
      navigateTo("/");
    }
  }, [isAuthorized, user, navigateTo]);

  const handleEnableEdit = (jobId) => {
    setEditingMode(jobId);
  };

  const handleDisableEdit = () => {
    setEditingMode(null);
  };

  const handleUpdateJob = async (jobId) => {
    const updatedJob = myJobs.find(job => job._id === jobId);
    try {
      const res = await axios.put(`http://localhost:4000/job/updatejobs/${jobId}`, updatedJob, {
        withCredentials: true,
      });
      toast.success(res.data.message);
      setEditingMode(null);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error updating job");
    }
  };

  const handleJobDelete = async (jobId) => {
    try {
      const res = await axios.delete(`http://localhost:4000/job/deletejob/${jobId}`, { withCredentials: true });
      toast.success(res.data.message);
      setMyJobs(prevJobs => prevJobs.filter(job => job._id !== jobId));
    } catch (error) {
      toast.error(error.response?.data?.message || "Error deleting job");
    }
  };

  const handleInputChange = (jobId, field, value) => {
    setMyJobs(prevJobs =>
      prevJobs.map(job =>
        job._id === jobId ? { ...job, [field]: value } : job
      )
    );
  };

  return (
    <div className='myjobs page'>
      <h3>Your Posted Job</h3>
      {myJobs.length > 0 ? (
        <p>you have not posted job . No jobs found!.</p>
      ) : (
        <div className='banner'>
          {myJobs.map((item) => {
             return(
              <div className='card' key={Element._id}>
                <div className='content'>
                  <div className="short_fields">
                    <div>
                      <span>Title:</span>
                      
                    </div>
                  </div>
                </div>
              </div>
             )
          }
          
          )}
        </div>
      )}
    </div>
  );
};

export default MyJobs;
