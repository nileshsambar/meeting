import { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Edit, Copy, Trash, ToggleRight, ToggleLeft} from "lucide-react"
import axios from "axios"

const Events = () => {


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

  const [events, setEvents] = useState([
    { title: "Meeting", time: "10:00 AM - 12:00 PM", active: true },
    { title: "Meeting-2", time: "2:00 PM - 3:00 PM", active: true },
    { title: "Appointment", time: "2:35 PM - 3:00 PM", active: false },
  ]);

  const meetings = [
    {
      id: 1,
      title: "Meeting",
      pass:"password",
      des:"",
      date: "Friday, 28 Feb",
      time: "10:00 AM - 12:00 AM",
      dur: "1hr, Group meeting",
      link:"",
      emails:"",
      active: true
    },
    {
      id: 2,
      title: "Meeting",
      pass:"password",
      des:"",
      date: "Friday, 28 Feb",
      time: "10:00 AM - 12:00 AM",
      dur: "1hr, Group meeting",
      link:"",
      emails:"",
      active: false
    },
    {
      id: 3,
      title: "Meeting",
      pass:"password",
      email:"",
      des:"",
      date: "Friday, 28 Feb",
      time: "10:00 AM - 12:00 AM",
      dur: "1hr, Group meeting",
      link:"",
      emails:"",
      active: true
    },
  ];

  const [meetingList, setMeetingList] = useState(meetings);
  const [list, setList] = useState([]);

  useEffect(() => {
    handleSubmit();
  }, []);

  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state || {};


  const handleSubmit = async () => {
    
    try {
      const response = await axios.post('https://everybit.space/apis/final/event.php', {email:localStorage.getItem('email')});

  
      const data = response.data;
      if(data.success) {
        showToast(data.success)
        console.log(data);
         
        once(data.all)
        // window.location.href = "/preferences";
        // navigate("/preferences",{state:registerData})
      } else {
        wrongToast(data.already)
      }
    } catch (error) {
      console.error("Error:", error);
    } 
  };

  const once = (e) => {
    const arr = e;
    const newMeetings = arr.map((item, index) => ({
      id: meetingList.length + index + 1,
      title: item.event,
      pass:item.pass,
      email:item.email,
      des:item.des,
      date: item.date,
      time: item.time,
      dur: item.dur,
      link:item.link,
      emails:item.emails,
      active: item.switch == "on" ? true : false

    }));
    setMeetingList(newMeetings);

  }



  return (


    <div className="flex">
      
      <Sidebar/>
      <div className="w-full">

    <div className="p-8 w-full">
      <h2 className="text-2xl font-bold">Event Types</h2>
      <p className="text-gray-600">Create events to share for people to book on your calendar.</p>
<ToastContainer/>
      <div className="flex gap-4 mt-6">

      {meetingList.map((meeting, index) => (
        <div
          key={"kon" + index}
          className={`w-64 p-4 rounded-lg shadow-md border ${
            meeting.active ? "border-blue-500" : "border-gray-400"
          }`}
        >
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">{meeting.title}</h2>
            <Edit size={16} className="cursor-pointer" />
          </div>
          <p className="text-sm text-gray-500">{meeting.date}</p>
          <p className="text-blue-600 font-medium">{meeting.time}</p>
          <p className="text-sm text-gray-500">{meeting.duration}</p>
          <div className="flex items-center justify-between mt-2">
            <button className="p-1">
              <Copy size={16} />
            </button>
            <button className="p-1">
              <Trash size={16} />
            </button>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                checked={meeting.active}
                onChange={() => {
                  setMeetingList((prev) =>
                    prev.map((m) =>
                      m.id === meeting.id ? { ...m, active: !m.active } : m
                    )
                  );
                }}
              />
              {/* <ToggleRight
                size={24}
                className=text-blue-500
              /> */}
              <ToggleLeft
                size={24}
                className="text-gray-400"
              />
            </label>
          </div>
        </div>
      ))}

        {/* {events.map((event, index) => (
          <div key={index} className={`p-4 w-1/3 border rounded-lg ${event.active ? "border-blue-500" : "border-gray-400"}`}>
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-gray-500">{event.time}</p>
          </div>
        ))} */}
      </div>
    </div>

    </div></div>
  );
};

export default Events;
