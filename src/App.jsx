import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SideNav from './components/Sidenav';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Jury from './pages/Jury';
import CaseDetails from './pages/JuryChat';
function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <SideNav />
        <main className="flex-1 overflow-auto bg-white p-4 ml-[260px]">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/jury" element={<Jury />} />
            <Route path="/jury/details" element={<CaseDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
