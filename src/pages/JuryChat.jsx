import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const CaseDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div className="p-4 space-y-4 text-black">
            <button className="text-lg text-black" onClick={() => navigate(-1)}>
                &lt; Return
            </button>

            <div className="flex flex-wrap gap-4">
                {/* LEFT COLUMN */}
                <div className="flex-1 min-w-[55%] space-y-4">
                    {/* Trial Details */}
                    <div className="bg-[#E4D1E1] p-4 rounded-lg flex items-center justify-center text-black w-full h-[200px]">
                        <img
                            src="../src/assets/lawyer.jpeg"
                            alt="lawyer"
                            className="w-32 h-32 object-contain mr-4"
                        />
                        <div className="text-lg text-black text-left">
                            <h2 className="font-bold text-xl mb-2">Trial Details</h2>
                            <p><strong>Defendant:</strong> Amber</p>
                            <p><strong>Filed By:</strong> Johnny</p>
                            <p><strong>Votes:</strong> 7/10</p>
                            <p><strong>Staked:</strong> 1 SUI</p>
                        </div>
                    </div>

                    <div className="bg-[#E4D1E1] p-4 rounded-lg text-black w-full flex flex-col items-center justify-center">
                        <h2 className="font-bold text-xl mb-4 text-center">Meme In Question</h2>
                        <img
                            src="../src/assets/icon.jpeg"
                            alt="meme in question"
                            className="w-full max-w-md rounded"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full sm:w-[40%] max-w-sm">
                    <div className=" p-4 rounded-lg text-black flex items-center justify-center">
                        <img
                            src="../src/assets/amber.jpeg"
                            alt="defendant"
                            className="w-24 h-24 object-contain mr-4"
                        />
                        <div className="text-mdaq text-left">
                            <p className="font-semibold">Amber Heard</p>
                            <p>56 Memes</p>
                            <p>10 Total Cases</p>
                            <p>7 Lost Cases</p>
                        </div>
                    </div>

                    <div className="bg-[#E4D1E1] p-4 rounded-lg text-black flex-1 min-h-[200px] flex flex-col justify-between">
                        <h2 className="font-bold text-xl mb-2 text-center">Court Room</h2>
                        <div className="flex mt-auto">
                            <input
                                type="text"
                                placeholder="Start Typing..."
                                className="p-2 rounded-l w-full bg-white border border-gray-300 text-black"
                            />
                            <button className="bg-[#645068] text-white px-4 rounded-r">Vote</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CaseDetails;

