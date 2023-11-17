// TextArea.js
import React from "react";

const TextArea = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={label}
      >
        {label}
      </label>
      <textarea
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="resize-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        rows="4"
      />
    </div>
  );
};

export default TextArea;
