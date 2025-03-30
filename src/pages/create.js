import React, { useState } from "react"
import Sidebar from "./sidebar";
import "./form.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


const Create = () => {

  
  // Function to show toast
  const showToast = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 3000, // Closes after 3 sec
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const wrongToast = (message) => {
    toast.warning(message, {
      position: "top-center",
      autoClose: 3000, // Closes after 3 sec
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const [formData, setFormData] = useState({
    event: "",
    pass: "",
    email: localStorage.getItem("email"),
    des: "",
    date: "",
    time: "14:30",
    ampm: "PM",
    // timezone: "UTC +5:00 Delhi",
    dur: "1 hour",
    bg: "#000000",
    link: "",
    emails: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    try {
      const response = await axios.post('https://everybit.space/apis/final/create.php', JSON.stringify(formData));

  
      const data = response.data;
      if(data.success) {
        showToast(data.success)
        console.log(data);
         
        // window.location.href = "/preferences";
        // navigate("/preferences",{state:registerData})
      } else {
        wrongToast(data.already)
      }
    } catch (error) {
      console.error("Error:", error);
    } 
  };

  

  return (

<div className="flex">
      
      <Sidebar/>
      <div className="w-full">

    <div className=" w-full">
  

<ToastContainer/>

    <div className="container">

    <h2 className="title">Add Event</h2>
    <div className="form-container">
      

      {/* Event Details Section */}
      <div className="details-section">
        <label>Event Topic *</label>
        <input type="text" name="event" placeholder="Set a meeting topic" value={formData.event} onChange={handleChange} />

        <label>Password</label>
        <input type="password" name="pass" placeholder="Password" value={formData.pass} onChange={handleChange} />

        <label>Host Name *</label>
        <input type="text" name="email" value={localStorage.getItem("email")} readOnly />

        <label>Description</label>
        <textarea name="des" placeholder="Description" value={formData.des} onChange={handleChange}></textarea>

        <label>Date and Time *</label>
        <div className="time-inputs">
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
          <input type="time" name="time" value={formData.time} onChange={handleChange} />
          <select name="ampm" value={formData.ampm} onChange={handleChange}>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
          {/* <select name="timezone" value={formData.timezone} onChange={handleChange}>
            <option value="UTC +5:00 Delhi">(UTC +5:00 Delhi)</option>
          </select> */}
        </div>

        <label>Set Duration</label>
        <select name="dur" value={formData.dur} onChange={handleChange}>
          <option value="1 hour">1 hour</option>
          <option value="2 hour">2 hour</option>
          <option value="3 hour">3 hour</option>
          <option value="4 hour">4 hour</option>
          <option value="5 hour">5 hour</option>
        </select>

        {/* Banner Section */}
      {/* <div className="banner-section">
        <div className="banner" style={{ backgroundColor: formData.backgroundColor }}>
          <img src="https://via.placeholder.com/100" alt="Avatar" className="avatar" />
          <h3>Team A Meeting-1</h3>
        </div>
        <label>Custom Background Color</label>
        <input type="color" name="backgroundColor" value={formData.backgroundColor} onChange={handleChange} />
        <input type="text" name="bg" value={formData.backgroundColor} onChange={handleChange} />
      </div> */}

        <label>Add Link *</label>
        <input type="url" name="link" placeholder="Enter URL Here" value={formData.link} onChange={handleChange} />

        <label>Add Emails *</label>
        <input type="text" name="emails" placeholder="Add member Emails with comma seperated" value={formData.emails} onChange={handleChange} />
      </div>
    </div>

    {/* Fixed Footer Buttons */}
    <div className="flex p-1 justify-around w-full">
      <a href="/events" className="cancel">Cancel</a>
      <button className="save" onClick={handleSubmit}>Save</button>
    </div>

    </div>
    </div>
    </div>
  </div>
  );
};

export default Create;
