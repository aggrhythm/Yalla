import React from "react";
import CaseCard from "../components/Casecard";

export default function Jury() {
  const caseData = {
    image: "src/assets/icon.jpeg", 
    defendant: "Amber",
    filedBy: "Johnny",
    votes: "7/10",
    staked: "1 SUI",
  };

  return (
    <div className="p-8 space-y-8 font-sans text-black">
      <div className="space-y-4">
        <h2 className="text-lg font-medium">Case Assigned to You</h2>
        <CaseCard {...caseData} />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Open Cases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <CaseCard key={i} {...caseData} />
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-lg font-medium">Past Cases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <CaseCard key={i} {...caseData} />
          ))}
        </div>
      </div>
    </div>

    
  );
}
