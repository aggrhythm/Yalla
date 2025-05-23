import React from "react";
import { useNavigate } from "react-router-dom";

const CaseCard = ({ image, defendant, filedBy, votes, staked, caseId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/jury/details`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer flex items-center p-4  bg-[#E4D1E1] rounded-lg shadow-md w-full max-w-md hover:shadow-lg transition"
    >
      <div className="w-20 h-20 bg-gray-300 rounded mr-4 overflow-hidden">
        {image && (
          <img src={image} alt="case" className="w-full h-full object-cover" />
        )}
      </div>
      <div className="text-sm space-y-1">
        <p><strong>Defendant:</strong> {defendant}</p>
        <p><strong>Filed By:</strong> {filedBy}</p>
        <p><strong>Votes:</strong> {votes}</p>
        <p><strong>Staked:</strong> {staked}</p>
      </div>
    </div>
  );
};

export default CaseCard;
