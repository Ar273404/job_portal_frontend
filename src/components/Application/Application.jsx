import React, { useContext, useState } from 'react';
import { Context } from '../../main';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFileAlt } from 'react-icons/fa';
import { API_URL } from '../../config';
const Application = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [coverletter, setCoverLetter] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [resume, setResume] = useState('');
  
  const { isAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  // Function to handle file input
  const handleFileChange = (e) => {
    const resume = e.target.files[0];
    setResume(resume);
  };

  const { id } = useParams();

  const handleApplication = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('coverletter', coverletter);
    formData.append('resume', resume);
    formData.append('jobId', id);

    try {
      const { data } = await axios.post(`${API_URL}/application/post`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setName('');
      setEmail('');
      setAddress('');
      setPhone('');
      setResume('');
      setCoverLetter('');
      toast.success(data.message);
      navigateTo('/job/getall');
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };

  if (!isAuthorized || user.role === 'Employer') {
    navigateTo('/');
  }

  return (
    <div>
      <section className="application">
        <div className="container">
          <h3>Application Form</h3>
          <form onSubmit={handleApplication}>
            <div className="form-group">
              <label>Name</label>
              <div className="input-group">
                <FaUser className="icon" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <div className="input-group">
                <FaEnvelope className="icon" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Phone</label>
              <div className="input-group">
                <FaPhone className="icon" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phone"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Address</label>
              <div className="input-group">
                <FaMapMarkerAlt className="icon" />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter address"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Cover Letter</label>
              <div className="input-group">
                <FaFileAlt className="icon" />
                <textarea
                  value={coverletter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  placeholder="Cover letter"
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <label>Resume</label>
              <input
                type="file"
                accept=".jpg, .png, .webp"
                onChange={handleFileChange}
              />
            </div>
            <button type="submit" className="btn">Submit Application</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Application;
