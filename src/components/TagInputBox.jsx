import { useState } from "react";

export default function TagInputBox() {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);

  const addTag = () => {
    const newTag = input.trim();
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="p-4 w-full max-w-6xl mr-6 font-serif">
      <div className="flex rounded-full border border-purple-900 overflow-hidden shadow-sm">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Start Typing..."
          className="flex-grow px-4 py-2 bg-[#f9f3ff] text-gray-800 outline-none"
        />
        <button
          onClick={addTag}
          className="bg-[#5c4466] text-white px-4 text-sm font-medium"
        >
          Add +
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-4 items-center">
        {tags.map((tag) => (
          <div
            key={tag}
            className="flex items-center bg-[#5c4466] text-white px-3 py-1 rounded-full text-sm"
          >
            {tag}
            <button
              onClick={() => removeTag(tag)}
              className="ml-2 text-white focus:outline-none"
            >
              X
            </button>
          </div>
        ))}
        <a href="#" className="text-sm underline text-[#5c4466] mt-1">
          Customise
        </a>
      </div>
    </div>
  );
}
