import { useState } from "react";
import AdminSideBar from "../components/admin/AdminSidebar";
import axios from "axios";

function AddCategory() {
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:4000/categoryMaker/createCategory?category=${category}`
      );
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return (
    <>
      <AdminSideBar />

      <main className="py-10 lg:pl-72">
        <div className="space-y-12 sm:space-y-16">
          <form onSubmit={handleSubmit} className="px-4 sm:px-6 lg:px-8">
            <h2 className="text-base font-semibold leading-7 text-gray-900 mx-auto">
              Add New Category
            </h2>
            <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Category Name
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    id="category"
                    name="category"
                    type="text"
                    autoComplete="category"
                    value={category}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddCategory;
