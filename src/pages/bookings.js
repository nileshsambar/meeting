import Sidebar from "./sidebar";


const Bookings = () => {
    return (

      <div className="flex">
      <Sidebar />
      
      <div className="w-full">
        
      <div className="p-8 w-full">
        <h2 className="text-2xl font-bold">Bookings</h2>
        <p className="text-gray-600">Manage your scheduled bookings here.</p>
      </div>

      </div></div>
    );
  };
  
  export default Bookings;
  