// src/components/DynamicForm.js
import React from "react";
import Input from "./Input";
import TextArea from "./TextArea"; // Assuming you have a TextArea component
import CheckboxGroup from "./CheckboxGroup"; // Assuming you have a CheckboxGroup component
import Select from "./Select"; // Assuming you have a Select component

const DynamicForm = ({ schema, onSubmit }) => {
  const [formData, setFormData] = React.useState({});

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);

    setFormData({});
  };

  const handleImagesChange = (fieldName, value) => {
    const imageUrls = value.split(",");

    const imagesArray = imageUrls.map((url) => ({
      src: url.trim(),
      alt: "Image",
    }));

    setFormData((prevData) => ({ ...prevData, [fieldName]: imagesArray }));
  };

  const handleCheckboxChange = (name, value) => {
    // For checkboxes, value will be an array of selected options
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.map((size) => ({ size })),
    }));
  };

  const renderField = (field) => {
    switch (field.type) {
      case "text":
      case "number":
        return (
          <Input
            key={field.name}
            label={field.label}
            type={field.type}
            value={formData[field.name] || ""}
            onChange={(value) => handleInputChange(field.name, value)}
          />
        );
      case "textarea":
        return (
          <TextArea
            key={field.name}
            label={field.label}
            value={formData[field.name] || ""}
            onChange={(value) => handleInputChange(field.name, value)}
          />
        );
      case "checkbox":
        return (
          <CheckboxGroup
            key={field.name}
            label={field.label}
            options={field.options}
            selectedOptions={(formData[field.name] || []).map(
              (item) => item.size
            )}
            onChange={(selectedOptions) =>
              handleCheckboxChange(field.name, selectedOptions)
            }
          />
        );
      case "select":
        return (
          <Select
            key={field.name}
            label={field.label}
            options={field.options}
            value={formData[field.name] || ""}
            onChange={(selectedValue) =>
              handleInputChange(field.name, selectedValue)
            }
          />
        );
      case "images":
        return (
          <div className="mb-4" key={field.label}>
            <label
              htmlFor="image"
              className="block text-gray-700 font-bold mb-2"
            >
              {field.label}
            </label>
            <input
              type="text" // Change the input type to text
              id="image"
              name="image"
              value={
                formData.images
                  ? formData.images.map((img) => img.src).join(", ")
                  : ""
              }
              onChange={(e) => handleImagesChange(field.name, e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
              placeholder="Enter image URLs separated by commas"
            />
            <small className="text-gray-500">
              Enter image URLs separated by commas.
            </small>
            <div className="flex flex-wrap gap-4 mt-2">
              {formData.images &&
                formData.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className="max-h-24 max-w-24"
                  />
                ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 py-12">
      {schema.map((field) => renderField(field))}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
