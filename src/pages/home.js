import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <header className="bg-white shadow-md p-4 flex justify-between items-center px-8">
        <h1 className="text-xl font-bold">NILESH SAMBAR</h1>
        <a className="bg-blue-500 text-white px-6 py-2 rounded-lg" href="/signup">Sign up free</a>
      </header>
      
      <main className="max-w-5xl mx-auto py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">NILESH – Easy Scheduling Ahead</h2>
        <a href="/signup" className="bg-blue-500 text-white px-6 py-2 rounded-lg mb-8">Sign up free</a>
        
        <div className="bg-white p-6 shadow-lg rounded-lg flex justify-center">
          <img src="https://plus.unsplash.com/premium_photo-1661774861781-e540fbc29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Booking Dashboard" className="rounded-lg shadow-md" />
        </div>
        
        <section className="mt-12 text-left px-8">
          <h3 className="text-2xl font-semibold mb-4">Simplified scheduling for you and your team</h3>
          <p className="text-gray-700 mb-6">NILESH eliminates the back-and-forth of scheduling meetings so you can focus on what matters.</p>
        </section>
        
        <section className="bg-gray-50 p-8 rounded-lg mt-8 text-left">
          <h3 className="text-xl font-semibold mb-4">Stay Organized with Your Calendar & Meetings</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>View all your upcoming meetings and appointments in one place.</li>
            <li>Syncs with Google Calendar, Outlook, and iCloud to avoid conflicts.</li>
            <li>Customize event types: one-on-ones, team meetings, group sessions, and webinars.</li>
          </ul>
        </section>
        
        <section className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Here's what our customers have to say</h3>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg mb-6">Read customer stories</button>
          <div className="grid md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-white shadow-md p-4 rounded-lg">
                <p className="font-semibold">Amazing tool! Saved me months</p>
                <p className="text-gray-600">This is a placeholder for your testimonials.</p>
                <p className="text-sm text-gray-500 mt-2">John Master, Director, Sparkcom</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mt-12 text-left px-8">
          <h3 className="text-2xl font-semibold mb-4">All Link Apps and Integrations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {["Audiomack", "Bandsintown", "Bonfire", "Books", "Buy Me A Gift", "Cameo", "Clubhouse", "Community", "Contact Details"].map((app, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-md">
                <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full mr-4">🔗</div>
                <p className="text-gray-700">{app}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <footer className="bg-white p-6 text-center shadow-md mt-12">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="/signin" className="bg-gray-200 px-6 py-2 rounded-lg">Log in</a>
          <a href="/signup" className="bg-blue-500 text-white px-6 py-2 rounded-lg">Sign up free</a>
        </div>
        <p className="text-gray-600">© 2025 NILESH. All rights reserved.</p>
      </footer>
    </div>
  );
}
