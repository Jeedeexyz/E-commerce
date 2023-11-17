import DynamicForm from "../components/Forms/DynamicForm";
import AdminSideBar from "../components/admin/AdminSidebar";
import axios from "axios";
import { useState } from "react";

import women from "../schemas/Women";
import men from "../schemas/Men";
import kids from "../schemas/Kids";
import accessories from "../schemas/Accessories";
import Modal from "../components/Model/model";

export const PostProductForm = () => {
  const [selectedSchema, setSelectedSchema] = useState(women);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const userFormData = async (formData) => {
    try {
      await axios.post(
        "http://localhost:4000/productInfo/createproduct",
        formData
      );
      setModalMessage("Product created successfully!");
      setModalIsOpen(true);
    } catch (error) {
      setModalMessage("Error creating product. Please try again.");
      setModalIsOpen(true);
      console.error("Error:", error);
    }
  };

  const handleSchemaChange = (schema) => {
    setSelectedSchema(schema);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalMessage("");
  };

  return (
    <>
      <AdminSideBar />
      <div className="py-10 lg:pl-72">
        <div className="mx-auto flex justify-around">
          <button
            onClick={() => handleSchemaChange(women)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Women
          </button>

          <button
            onClick={() => handleSchemaChange(men)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Men
          </button>

          <button
            onClick={() => handleSchemaChange(kids)}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Kids
          </button>

          <button
            onClick={() => handleSchemaChange(accessories)}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Accessories
          </button>
        </div>

        {/* Render the DynamicForm with the selected schema */}
        <DynamicForm schema={selectedSchema} onSubmit={userFormData} />

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          message={modalMessage}
        />
      </div>
    </>
  );
};

export default PostProductForm;
