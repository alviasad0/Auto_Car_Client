import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
 const { user, logOut } = useContext(AuthContext);


  const links = (
    <>
      <li className="text-xl font-medium">
        <NavLink
          className={({ isActive }) => (isActive ? `text-red-500` : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="text-xl font-medium">
        <NavLink
          className={({ isActive }) => (isActive ? `text-red-500` : "")}
          to="/addProduct"
        >
          Add Product
        </NavLink>
      </li>
      <li className="text-xl font-medium">
        <NavLink
          className={({ isActive }) => (isActive ? `text-red-500` : "")}
          to="/myCart"
        >
          My Cart
        </NavLink>
      </li>
      </>
      


      
    );
    
   
  return (
    <div>
      <div className="bg-gray-300">
        <div className="">
          <div className="navbar ">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {links}
                  <div className="md:hidden">
                    {user ? (
                      <div>
                        <img
                          className="w-10 rounded-full mx-auto mt-2 mb-2"
                          src={user.photoURL}
                          alt=""
                        />
                        <li className="text-center text-lg font-semibold">
                          {user.displayName}
                        </li>
                        <button
                          onClick={logOut}
                          className=" btn  btn-secondary  w-full mt-3 "
                        >
                          Log Out
                        </button>
                      </div>
                    ) : (
                      <button className="btn btn-secondary   ">
                        <Link to="/login">Login</Link>
                      </button>
                    )}
                  </div>
                </ul>
              </div>
              <img src="" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end">
              {user ? (
                <div className="flex gap-4 items-center ">
                  <div className="invisible lg:visible">
                    <img
                      className="rounded-full w-10 mx-auto "
                      src={user.photoURL}
                      alt=""
                    />
                    <p className="font-semibold">{user?.displayName}</p>
                  </div>
                  <button
                    onClick={logOut}
                    className=" btn  btn-secondary  invisible md:visible "
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <button className=" invisible md:visible btn btn-secondary ">
                  <Link to="/login">Login</Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
