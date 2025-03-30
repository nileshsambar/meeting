import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {

  const navigate = useNavigate()
  
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
  

  const [loginData, setLoginData] = useState({
    email: '',
    pass: ''
  })

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      
      try {
        const response = await fetch("https://everybit.space/apis/final/signin.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        });
        
        const data = await response.json();
        
        if(data.success) {
          showToast(data.message)
          // window.location.href = "/events";
          localStorage.setItem("email",data.email)
          localStorage.setItem("first",data.first)
          localStorage.setItem("last",data.last)
        navigate("/meetings/events",{state:data})

        } else {
          wrongToast(data.message)
        }
        console.log(data.message);
      } catch (error) {
        console.error("Error:", error);
      }
    };
  }

  // Validate login, register forms

const [errors, setErrors] = useState({
  email:'',
})

const validate = () => {
  let inputErrors = {}

  // Email validation
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  
  if (!loginData.email) {
    inputErrors.email = "Email is required";
  } else if (!emailPattern.test(loginData.email)) {
    inputErrors.email = "Invalid email format";
  }

   // Password validation
   if (!loginData.pass) {
    inputErrors.pass = "Password is required";
  } else if (loginData.pass.length < 6) {
    inputErrors.pass = "Password must be at least 6 characters long";
  }


  setErrors(inputErrors)
   // Return true if no errors
   console.log(errors)
   return Object.keys(inputErrors).length === 0;

}

  return (

    <div className="flex min-h-screen">


      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <h2 className="text-2xl font-bold">Sign In</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-sm mt-4">
          {errors.email && <p style={{ color: "red", margin:'0', fontSize:'small' }}>{errors.email}</p>}
          <input onChange={handleLoginChange} name="email" type="text" placeholder="Email" className="w-full p-2 mb-2 border rounded" />
          {errors.pass && <p style={{ color: "red", margin:'0', fontSize:'small' }}>{errors.pass}</p>}
          <input onChange={handleLoginChange} name="pass" type="password" placeholder="Password" className="w-full p-2 mb-2 border rounded" />
          
          <button className="w-full bg-gray-800 text-white py-2 rounded mt-2">Log in</button>

      <ToastContainer />

        </form>
        <Link to="/meetings/signup" className="mt-2 text-blue-800">Sign up</Link>
      </div>
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('human.png')" }}>
        {/* Right-side image */}
      </div>
    </div>
     

    
  );
}
