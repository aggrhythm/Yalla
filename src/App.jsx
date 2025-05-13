import './App.css'
import SideNav from './components/Sidenav';
import './index.css'


function App() {
  return (
    <div className="flex h-screen">
        <SideNav/>
      <main className="flex-1 overflow-auto bg-red-800 p-4">
        {/* Your main content here */}
      </main>
      
    </div>
  );
}


export default App
