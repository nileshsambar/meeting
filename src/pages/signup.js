import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function SignUp() {

  const navigate = useNavigate();

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

  const [registerData, setRegisterData] = useState({
    first:'',
    last:'',
    user:'',
    email: '',
    pass: ''
  })

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  if (validate()) {
    try {
      const response = await fetch("https://everybit.space/apis/final/signup.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });
  
      const data = await response.json();
      if(data.success) {
        showToast(data.message)
        // window.location.href = "/preferences";
        localStorage.setItem("email",data.email)
        localStorage.setItem("first",data.first)
        localStorage.setItem("last",data.last)
        navigate("/preferences",{state:registerData})
      } else {
        wrongToast(data.already)
      }
      console.log("Response:", data.success);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  };

  // Validate login, register forms

  const [errors, setErrors] = useState({
    email:'',
    pass:'',
    con:''
  })

  const validate = () => {
    console.log(registerData);
    let inputErrors = {}
  
    // Email validation
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    
    if (!registerData.email) {
      inputErrors.email = "Email is required";
    } else if (!emailPattern.test(registerData.email)) {
      inputErrors.email = "Invalid email format";
    }
  
    // Password validation
    if (!registerData.pass) {
      inputErrors.pass = "Password is required";
    } else if (registerData.pass.length < 6) {
      inputErrors.pass = "Password must be at least 6 characters long";
    } else if (registerData.pass != registerData.user) {
      inputErrors.pass = "Password not match!";
    }

    if (!registerData.user) {
      inputErrors.con = "Password is required";
    } else if (registerData.user.length < 6) {
      inputErrors.con = "Password must be at least 6 characters long";
    } else if (registerData.pass != registerData.user) {
      inputErrors.con = "Password not match!";
    }
  
    setErrors(inputErrors)
     // Return true if no errors
     return Object.keys(inputErrors).length === 0;
  }
  

  return (

    <div className="flex min-h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <ToastContainer/>
        <h2 className="text-2xl font-bold">Create an account</h2>
        <Link to="/signin" className="text-blue-500">Sign in instead</Link>
        <form onSubmit={handleSubmit} className="w-full max-w-sm mt-4">
          <input onChange={handleRegisterChange} name="first" type="text" placeholder="First name" className="w-full p-2 mb-2 border rounded" required />
          <input onChange={handleRegisterChange} name="last" type="text" placeholder="Last name" className="w-full p-2 mb-2 border rounded" required />
          {errors.email && <p style={{ color: "red", margin:'0', fontSize:'small' }}>{errors.email}</p>}
          <input onChange={handleRegisterChange} name="email" type="email" placeholder="Email" className="w-full p-2 mb-2 border rounded" required />
          {errors.pass && <p style={{ color: "red", margin:'0', fontSize:'small' }}>{errors.pass}</p>}
          <input onChange={handleRegisterChange} name="pass" type="password" placeholder="Password" className="w-full p-2 mb-2 border rounded" required />
          {errors.con && <p style={{ color: "red", margin:'0', fontSize:'small' }}>{errors.con}</p>}
          <input onChange={handleRegisterChange} name="user" type="password" placeholder="Confirm Password" className="w-full p-2 mb-2 border rounded" required />
          <button type="submit" className="w-full bg-black text-white py-2 rounded mt-2 border">Create an account</button>
        </form>
      </div>
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/human.png')" }}>
        {/* Right-side image */}
      </div>
    </div>
     

    
  );
}
