import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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

    <Router>
      
      
     
          
      <Routes>
        <Route path="/meeting/" element={<Home />} />
        <Route path="meeting/signup/" element={<SignUp />} />
        <Route path="meeting/signin/" element={<SignIn />} />
        <Route path="meeting/preferences" element={<UserPreferences />} />
        
        <Route path="/meeting/events" element={<Events />} />
        <Route path="/meeting/create" element={<Create />} />
        <Route path="/meeting/bookings" element={<Bookings />} />
        <Route path="/meeting/availability" element={<Availability />} />
        <Route path="/meeting/settings" element={<Settings />} />
      </Routes>
      
    </Router>
    
    
  );
}

export default App;
