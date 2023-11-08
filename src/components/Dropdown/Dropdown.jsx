import { useState, useRef } from "react";
import useOnClickOutside from "../../utils/useOnClickOutside";

const styles = {
  default:
    "border border-[#C1C1D4] w-full p-3 flex rounded-md shadow-sm hover:cursor-pointer hover:border-[#4285F4]",
  sizes: {
    default: "w-full",
    lg: "w-[250px]",
    sm: "min-w-[171px]",
  },
  block: "w-full hover:cursor-pointer",
  locationIcon: "inline-flex items-center",
  disabled: "cursor-not-allowed opacity-40",
  enter: "transition ease-out duration-100 transform opacity-0 scale-95",
  enterActive: "transform opacity-100 scale-100",
  leave: "transition ease-in duration-75 transform opacity-100 scale-100",
  leaveActive: "transform opacity-0 scale-95",
};

const Dropdown = (props) => {
  const dropdownEl = useRef(null);

  const classNames = [
    styles.default,
    props.showIcon ? styles.locationIcon : "",
    props.disabled ? styles.disabled : "",
    styles.sizes[props.size || "default"],
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const [selectedOption, setSelectedOption] = useState(undefined);
  const onOptionClicked = (value) => () => {
    props.onOptionClicked && props.onOptionClicked(value);
    setSelectedOption(value);
    setIsOpen(false);
  };

  useOnClickOutside(dropdownEl, () => {
    setIsOpen(false);
  });

  return (
    <div ref={dropdownEl} className="relative inline-block m-auto">
      <span className="m-0 p-0 cursor-pointer" onClick={() => toggling()}>
        {selectedOption || props.placeholder}
      </span>

      {isOpen && (
        <ul
          className={`absolute right-1 w-auto z-10 border bg-white shadow-lg transition ease-in-out delay-150 bg-background-primary ${
            styles.sizes[props.size || "default"]
          }`}
        >
          {props.options.map((option, index) => (
            <li
              key={index}
              className="dropdown-item list-none text-primary hover:bg-gray-200  hover:cursor-pointer "
            >
              <div
                className="flex px-3 py-1.5 m-auto items-center whitespace-nowrap"
                onClick={onOptionClicked(option.value)}
              >
                {option.label}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
