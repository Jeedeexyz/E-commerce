import React from "react";
import Dropdown from "../Dropdown/Dropdown";

const handleOptionClicked = (selectedValue) => {
  console.log(`Selected option: ${selectedValue}`);
};

const generateDropdown = (placeholder, options) => (
  <Dropdown
    options={options}
    placeholder={placeholder}
    onOptionClicked={handleOptionClicked}
  >
    <button>Open Dropdown</button>
  </Dropdown>
);

const Navbar = () => {
  // Define different sets of options for each Dropdown
  const mensOptions = [
    { label: "Mens Option 1", value: "mens-option1" },
    { label: "Mens Option 2", value: "mens-option2" },
  ];

  const womenOptions = [
    { label: "Women Option 1", value: "women-option1" },
    { label: "Women Option 2", value: "women-option2" },
  ];

  const kidsOptions = [
    { label: "Kids Option 1", value: "kids-option1" },
    { label: "Kids Option 2", value: "kids-option2" },
  ];

  const AccessoriesOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ];
  const HomeOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ];

  // Create Dropdown components with different options
  const mensDropdown = generateDropdown("Mens", mensOptions);
  const womenDropdown = generateDropdown("Women", womenOptions);
  const kidsDropdown = generateDropdown("Kids", kidsOptions);
  const AccessoriesDropdown = generateDropdown(
    "Accessories",
    AccessoriesOptions
  );
  const HomeDropdown = generateDropdown("Home", HomeOptions);

  return (
    <div>
      <nav>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center my-2 ">
          {mensDropdown}
          {womenDropdown}
          {kidsDropdown}
          {AccessoriesDropdown}
          {HomeDropdown}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
