// CheckboxGroup.js
import React from "react";

const CheckboxGroup = ({ label, options, selectedOptions, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <div>
        {options.map((option) => (
          <label key={option.value} className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              value={option.value}
              checked={selectedOptions.includes(option.value)}
              onChange={() => {
                const updatedOptions = selectedOptions.includes(option.value)
                  ? selectedOptions.filter(
                      (selectedOption) => selectedOption !== option.value
                    )
                  : [...selectedOptions, option.value];

                onChange(updatedOptions);
              }}
            />
            <span className="ml-2">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
