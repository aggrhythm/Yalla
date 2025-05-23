import React from "react";

export default function Popup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-xs z-50 flex items-center justify-center">
      <div className="bg-[#F5E1FD] ml-45 text-gray-800 rounded-xl p-12 max-w-3xl w-full relative flex gap-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl hover:cursor-pointer font-bold text-gray-600 hover:text-black"
        >
          ×
        </button>

        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">You’ve been summoned.</h2>
          <p className="text-sm text-gray-700 mb-4">To Meme Court. Yeah, that’s a thing now.</p>
          <p className="text-sm mb-2">
            Apparently, your meme was so unfunny, someone decided to file a formal complaint. I mean,
            it takes a special kind of talent to even get a complaint for a meme. Anyways…
          </p>
          <p className="text-sm mb-2">
            <strong>Meme:</strong><br />
            <strong>Charge:</strong><br />
            Filed by: <span className="text-purple-700 font-medium">@accuser</span> (they had the courage, you didn’t have the comedy)
          </p>
          <p className="text-sm mb-2">
            You’ve got 24 hours to plead your case or just let random jurors meme-slap justice onto your soul.
            Punishments may include — but are not limited to — a humiliating profile pic, meme rehab, or 24 hours in meme jail.
          </p>
          <p className="text-sm mt-4">
            I don’t care what you choose. But if you’re gonna go down, at least go down with a better meme.
          </p>
          <p className="text-sm mt-2 font-semibold">— Harvey Specter</p>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/src/assets/judge.png"
            alt="Harvey Specter"
            className="w-56 h-56 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
