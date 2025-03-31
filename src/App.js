import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Home from './pages/home';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import UserPreferences from './pages/user';

import Sidebar from "./pages/sidebar";
import Events from "./pages/events";
import Bookings from "./pages/bookings";
import Availability from "./pages/availability";
import Settings from "./pages/settings";
import Create from "./pages/create";


function App() {


  return (

    <BrowserRouter>
      
      
     
          
      <Routes>
        <Route path="/meeting/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/preferences" element={<UserPreferences />} />
        
        <Route path="/events" element={<Events />} />
        <Route path="/create" element={<Create />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/availability" element={<Availability />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      
    </BrowserRouter>
    
    
  );
}

export default App;
