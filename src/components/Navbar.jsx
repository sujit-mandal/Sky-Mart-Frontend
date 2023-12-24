import { useContext, useState } from "react";
import { FaKey } from "react-icons/fa6";
import { HiMiniUserCircle } from "react-icons/hi2";
import { RxDashboard } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { BsCart4 } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const Navbar = ({ bgBlack }) => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleLogout = () => {
    logOut()
      .then((res) => {})
      .catch((err) => {
        toast.err.message;
      });
  };
  return (
    <div className="max-w-screen-2xl mx-auto">
      <nav
        className={`absolute ${
          bgBlack ? "bg-slate-400" : ""
        } top-0 w-[90%] left-1/2 transform -translate-x-1/2 w-screen-2xl mx-auto z-30 flex flex-wrap items-center justify-between px-4 py-2 mt-6 mb-4 shadow-none md:flex-nowrap md:justify-start `}
      >
        <div className="container flex items-center justify-between">
          <Link
            className="py-2 text-lg mr-4 ml-4 whitespace-nowrap font-bold text-white lg:ml-0"
            to={"/"}
          >
            Sky Mart
          </Link>
          <div className="md:hidden mr-2">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <VscChromeClose size={24} color="white" />
              ) : (
                <GiHamburgerMenu size={24} color="white" />
              )}
            </button>
          </div>

          <div
            className={`absolute md:relative ${
              isMenuOpen
                ? "top-10 left-3 right-6 duration-300"
                : "-left-[110%] duration-300 top-10"
            } md:top-0 md:left-0 bg-white md:bg-transparent items-center flex-grow transition-all ease-soft duration-350 lg:overflow-hidden basis-full rounded-xl md:flex md:justify-between md:basis-auto ml-16`}
          >
            <ul className="flex flex-col mx-auto list-none md:flex-row md:ml-auto text-black md:text-white p-5 md:p-0 ">
              <li className="flex items-center ">
                <RxDashboard />
                <Link
                  className="flex items-center px-4 py-2 mr-2 font-normal  transition-all duration-250 lg-max:text-slate-700 ease-soft-in-out text-sm lg:px-2 lg:hover:text-white/75 lg-max:opacity-0"
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </Link>
              </li>

              {!user ? (
                <>
                  <li className="flex items-center ">
                    <HiMiniUserCircle
                      size={20}
                      className="inline-block -ml-1"
                    />
                    <Link
                      to={"/signup"}
                      className="block px-4 py-2 mr-2 font-normal  transition-all duration-250 lg-max:text-slate-700 ease-soft-in-out text-sm lg:px-2 lg:hover:text-white/75 lg-max:opacity-0"
                    >
                      Sign Up
                    </Link>
                  </li>
                  <li className="flex items-center ">
                    <FaKey className="inline-block" />
                    <Link
                      to={"/login"}
                      className="block px-4 py-2 mr-2 font-normal  transition-all duration-250 lg-max:text-slate-700 ease-soft-in-out text-sm lg:px-2 lg:hover:text-white/75 lg-max:opacity-0"
                    >
                      Sign In
                    </Link>
                  </li>
                </>
              ) : (
                <button onClick={handleLogout} className="flex items-center ">
                  <IoMdLogOut className="inline-block" />
                  <p className="block px-4 py-2 mr-2 font-normal  transition-all duration-250 lg-max:text-slate-700 ease-soft-in-out text-sm lg:px-2 lg:hover:text-white/75 lg-max:opacity-0">
                    Sign Out
                  </p>
                </button>
              )}
            </ul>
          </div>
        </div>
        <ul className="hidden pl-0 mb-0 list-none md:block md:flex-row">
          {user && (
            <li>
              <Link
                to={"/login"}
                className="hover:scale-110 hover:shadow-soft-xs active:opacity-85 ease-in  shadow-md bg-white rounded-full mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-4 w-40 py-2 text-center align-middle font-bold  text-slate-800 transition-all lg-max:opacity-0"
              >
                <BsCart4 size={24} className="inline-block" /> My Cart
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
