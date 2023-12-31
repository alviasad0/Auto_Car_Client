import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const Navbar = () => {
 const { user, logOut } = useContext(AuthContext);


  const links = (
    <>
      <li className="text-xl font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `text-green-600 border-green-800 underline border-2 `
              : "text-green-600"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="text-xl font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `text-green-600 border-green-800 underline border-2`
              : "text-green-600"
          }
          to="/addProduct"
        >
          Add Cars
        </NavLink>
      </li>
      <li className="text-xl font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `text-green-600 border-green-800 underline border-2`
              : "text-green-600"
          }
          to="/myCart"
        >
          My Cart
        </NavLink>
      </li>
    </>
  );
    useEffect(() => {
      themeChange(false);
      // 👆 false parameter is required for react project
    }, []);
   
  return (
    <div className="mx-auto max-w-screen-2xl ">
      <div
        className="bg-green-50 rounded-xl mt-6 mb-10 "
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="">
          <div className="navbar ">
            <div
              className="navbar-start"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
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
                  <select data-choose-theme>
                    <option value="" className="">
                     Light
                    </option>
                    <option value="dark">Dark</option>
                  </select>
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
                          className=" btn  btn-success tracking-widest  w-full mt-3 "
                        >
                          Log Out
                        </button>
                      </div>
                    ) : (
                      <button className="btn btn-success  tracking-widest ">
                        <Link to="/login">Login</Link>
                      </button>
                    )}
                  </div>
                </ul>
              </div>
              <img
                src="https://i.ibb.co/LvTvgkr/logo-fotor-20231019183055.png"
                className="w-[250px]  h-[150px]"
                alt=""
              />
            </div>
            <div
              className="navbar-center hidden lg:flex"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              <ul className="menu menu-horizontal px-1">
                {links}
                <select className="font-bold border-none p-2" data-choose-theme>
                  <option value="">light</option>
                  <option value="dark">Dark</option>
                </select>
              </ul>
            </div>
            <div
              className="navbar-end"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
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
                    className=" btn  btn-success tracking-widest text-lg font-bold invisible md:visible "
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <button className=" invisible md:visible  btn tracking-widest btn-success ">
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
