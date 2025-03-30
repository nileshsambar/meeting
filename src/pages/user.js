import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function UserPreferences() {

  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state || {};
  localStorage.setItem("dt", JSON.stringify(data))
  console.log(data)

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
    user: ''
  })

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
      console.log(loginData);
      try {
        const response = await fetch("https://everybit.space/apis/final/changeuser.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({user:loginData.user,email:data.email}),
        });
        
        const res = await response.json();
        
        if(res.success) {
          showToast(res.message)
          console.log(res)
          // window.location.href = "/events";
          navigate("/meetings/events",{state:data})
        } else {
          wrongToast(res.message)
        }
        console.log(res.message);
      } catch (error) {
        console.error("Error:", error);
      }
    
  }


  const categories = [
    { name: "Sales", icon: "🏢" },
    { name: "Education", icon: "📚" },
    { name: "Finance", icon: "💰" },
    { name: "Government & Politics", icon: "⚖️" },
    { name: "Consulting", icon: "💼" },
    { name: "Recruiting", icon: "📜" },
    { name: "Tech", icon: "🖥️" },
    { name: "Marketing", icon: "🚀" },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [username, setUsername] = useState("");


  return (
    <div className="flex min-h-screen">
      
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center items-center px-10">
        <form onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold mb-4">Your Preferences</h2>
        <input
          type="text"
          placeholder="Tell us your username"
          name="user"
          onChange={handleLoginChange}
          className="w-full p-3 border rounded-lg mb-4"
          required
        />
        
        <p className="mb-2 font-medium">Select one category that best describes your NILESH:</p>

        <div className="grid grid-cols-2 gap-3 w-full max-w-md">
          {categories.map((category) => (
            <button
              type="button"
              key={category.name}
              onClick={() => {setSelectedCategory(category.name);}}
              className={`p-3 rounded-lg border flex items-center justify-center gap-2 transition ${
                selectedCategory === category.name
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black"
              }`}
            >
              <span>{category.icon}</span> {category.name}
            </button>
          ))}
        </div>
        <ToastContainer/>
        <button
          type="submit"
          className={`w-full max-w-md p-3 mt-4 text-white rounded-lg ${
            selectedCategory
              ? "bg-blue-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!selectedCategory}
        >
          Continue
        </button>

        </form>
      </div>

      {/* Right Section (Image) */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/human.png')" }}>
      </div>
    </div>
  );
}
