import { useState } from 'react'
import './App.css'
import './index.css'
import SideNav from '../components/Sidenav'

function App() {
  return (
    <div className="flex h-screen">
      <SideNav />
      <main className="flex-1 overflow-auto bg-white p-4">
        {/* Your main content here */}
      </main>
      
    </div>
  );
}


export default App
