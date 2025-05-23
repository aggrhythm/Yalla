import React, { useState } from "react";
import Popup from "../components/Popup";

export default function Upload() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="mt-4 bg-[#F5E1FD] text-black px-4 py-2 rounded shadow  transition"
      >
        Trigger popup
      </button>
      {showModal && <Popup onClose={() => setShowModal(false)} />}
    </div>
  );
}
