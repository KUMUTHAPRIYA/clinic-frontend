import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-1">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <div>
          <h1 className="text-2xl font-bold">
            Clinic Appointment System
          </h1>

          <p className="text-sm mt-1 text-gray-200">
            Book appointments with trusted doctors easily.
          </p>
        </div>

        <div className="flex gap-6 font-medium">

          <Link to="/" className="hover:text-black">
            Home
          </Link>

          <Link to="/doctors" className="hover:text-black">
            Doctors
          </Link>

          <Link to="/reviews" className="hover:text-black">
            Reviews
          </Link>

        </div>

        <div className="text-sm text-gray-200">
          ©Clinic Appointment and Review System 2026 All Rights Reserved
        </div>

      </div>

    </footer>
  );
}

export default Footer;