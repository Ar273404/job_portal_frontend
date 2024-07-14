import React,{useEffect,useContext} from 'react'
import "./App.css";
import { Context } from './main';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './components/Home/Home';
import Jobs from './components/Job/Jobs';
import JobDetails from './components/Job/JobDetails';
import MyJobs from './components/Job/MyJobs';
import PostJob from './components/Job/PostJob';
import Application from './components/Application/Application';
import MyApplication from './components/Application/MyApplication';
import NotFound from './components/NotFound/NotFound';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'

const App = () => {
  const {isAuthorized,setAuthorized,setUser} = useContext(Context);
  useEffect(()=>{
   const fetchUser = async()=>{
    try{
          const response = await axios.get("http://localhost:4000/user/getUser",{withCredentials:true});
          setUser(response.data.user);
          setAuthorized(true);
    }catch(error)
    {
      setAuthorized(false);
    }
   }
   fetchUser();
  },[isAuthorized]);
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
           <Route path='/login' element={<Login/>}/>
           <Route path='/register' element={<Register/>}/>
           <Route path='/'element={<Home/>}/>
           <Route path='/job/getall' element={<Jobs/>}/>
           <Route path='/job/:id' element={<JobDetails/>}/>
           <Route path='/job/post' element={<PostJob/>}/>
           <Route path='/job/my' element={<MyJobs/>}/>
           <Route path='/application/:id' element={<Application/>}/>
           <Route path='/application/my' element={<MyApplication/>}/>
           <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
        <Toaster/>
      </Router>
    </>
  )
}

export default App