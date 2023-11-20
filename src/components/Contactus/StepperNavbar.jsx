// Navbar.js

export default function StepperNavbar() {
  return (
    <div>
      <nav
        className="fixed w-full 
								z-20 top-0 left-0 h-24  bg-gray-200"
      >
        <div
          className="flex flex-wrap items-center  
								justify-between mx-auto p-4"
        >
          <a href="/" className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#dd6b20"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="self-center text-3xl font-bold text-gray-800 ">
              E-co<span className="text-[#dd6b20]">MM</span>erce
            </span>
          </a>
          <div
            className="items-center justify-between hidden 
									w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul
              className="flex flex-col p-4 
									md:p-0 font-medium 
									md:flex-row md:space-x-8"
            >
              <li>
                <a
                  href="/contactus"
                  className="block py-2 pl-3 
											pr-4 text-gray-900 rounded 
											hover:bg-gray-100 
											md:hover:bg-transparent 
											md:hover:text-blue-700 md:p-0"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="/aboutus"
                  className="block py-2 pl-3 
											pr-4 text-gray-900 rounded 
											hover:bg-gray-100 
											md:hover:bg-transparent 
											md:hover:text-blue-700 md:p-0"
                >
                  About us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
