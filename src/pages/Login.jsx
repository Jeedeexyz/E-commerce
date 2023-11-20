import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/signinSystem/signin/",
        {
          email: email,
          password: password,
        }
      );

      console.log(response);

      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem(
        "currentUser",
        JSON.stringify(response.data.userData)
      );

      // Redirect on successful login
      window.location.href = "/";
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div className="w-[50%] my-12 p-6 border mx-auto">
      <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
        Sign Up
      </h4>
      <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 mt-1 font-normal whitespace-nowrap">
        Nice to meet you! Enter your details to register.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-md font-bold mb-2"
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
            className="block text-gray-700 text-md font-bold mb-2"
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
          {/* <p className="mt-4 text-center">
            Already have an account?{" "}
            <span
              onClick={handleClick}
              className="text-blue-600 cursor-pointer "
            >
              Sign Up
            </span>
          </p> */}
        </div>
      </form>
    </div>
  );
}

export default Login;
