import { useEffect, useState } from "react";
import axios from "axios";

const NavItem = ({ value, label }) => {
  const handleOnClick = () => {
    window.location.href = `/category/${value}`;
  };

  return (
    <button
      onClick={handleOnClick}
      className="mr-8 ml-10 hover:font-semibold cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 hover:text-orange-700 focus:outline-none"
    >
      {label}
    </button>
  );
};

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/categoryMaker/getAllCategories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <nav className="py-2">
      <div className="flex justify-center items-stretch  sm:items-stretch sm:justify-center ">
        {categories.map((category) => (
          <NavItem
            key={category.category}
            value={category.category}
            label={category.category}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
