import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo(1).jpg";
import { FaUserCircle } from "react-icons/fa";

function NavBar() {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const isLoggedIn = user !== null;

  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/login");

    setMenuOpen(false);

  };

  return (

    <nav className="bg-blue-500 text-white fixed top-0 left-0 w-full z-50 shadow-md">

      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 rounded-full"
          />

          <h1 className="text-sm md:text-xl font-bold leading-5">
            Clinic <br />
            Appointment System
          </h1>

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-semibold">

          <Link to="/" className="hover:text-black">
            Home
          </Link>

          <Link to="/doctors" className="hover:text-black">
            Doctors
          </Link>

          <Link to="/reviews" className="hover:text-black">
            Reviews
          </Link>

          {isLoggedIn ? (
            <>
              <Link to="/dashboard">
                <FaUserCircle className="text-3xl hover:text-black" />
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav">
                Login
              </Link>

              <Link to="/register" className="nav">
                Register
              </Link>
            </>
          )}

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (

        <div className="md:hidden bg-blue-600 px-6 py-5 flex flex-col gap-5 text-lg font-bold items-center ">

          <Link to="/" onClick={() => setMenuOpen(false)} className="nav">
            Home
          </Link>

          <Link to="/doctors" onClick={() => setMenuOpen(false)} className="nav">
            Doctors
          </Link>

          <Link to="/reviews" onClick={() => setMenuOpen(false)} className="hover:text-black">
            Reviews
          </Link>

          {isLoggedIn ? (
            < >
              <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                <FaUserCircle className="text-3xl hover:text-black " />
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-500 py-2 rounded-lg w-20"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)} >
                Login
              </Link>

              <Link to="/register" onClick={() => setMenuOpen(false)}>
                Register
              </Link>
            </>
          )}

        </div>

      )}

    </nav>

  );
}

export default NavBar;