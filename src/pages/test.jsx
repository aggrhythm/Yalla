import { useState } from "react";
import Popup from "../components/Popup";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => setShowModal(true)}
        className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition"
      >
        Trigger Summons
      </button>

      {showModal && <Popup onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
