import { useEffect, useState } from "react";
import axios from "axios";

const NavItem = ({ value, label }) => {
  const handleOnClick = () => {
    window.location.href = `/category/${value}`;
  };

  return (
    <button onClick={handleOnClick} className="mr-8 ml-10 cursor-pointer">
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
    <div>
      <nav>
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
    </div>
  );
};

export default Navbar;
