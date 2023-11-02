import { useState } from "react";
import Model from "../Model/model";

const MainBar = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [isOpen, setIsOpen] = useState(false);
  const closeSignUpModal = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleLogIn && props.handleLogIn(email, password);
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    props.handleSignUp && props.handleSignUp(data);
    setData({ username: "", email: "", password: "" });
    setIsOpen(false);
  };

  const LoginModal = () => {
    return (
      <Model className="h-auto" isOpen={isModalOpen} onClose={closeModal}>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
            >
              Login
            </button>
            <p className="mt-4 text-center">
              <span onClick={handleClick} className="text-blue-600 ">
                Sign Up
              </span>
              , If you are a new User
            </p>
          </div>
        </form>
      </Model>
    );
  };

  const SignupModal = () => {
    return (
      <Model className="h-auto" isOpen={isOpen} onClose={closeSignUpModal}>
        <form onSubmit={handleSubmitSignUp}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              User Name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your User Name"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </Model>
    );
  };
  return (
    <nav>
      <div className=" p-6">
        <div className="flex items-center  sm:items-stretch sm:justify-center md:justify-between   ">
          <a href="#responsive-header" className="mr-2.5">
            <h1 className="text-4xl">THE STORE</h1>
          </a>

          <div className="flex gap-3  ">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch rounded border border-solid border-neutral-300 ">
              <input
                type="search"
                className="relative m-0 block min-w-0 flex-auto bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <span
                className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-900"
                id="basic-addon2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <button onClick={openModal} className="bg-none pb-3 text-black">
              Login
            </button>

            {LoginModal()}
            {SignupModal()}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainBar;
