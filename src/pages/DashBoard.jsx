import { Link } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

function Dashboard() {

  const storedData = JSON.parse(localStorage.getItem("user"));

  const user = storedData?.user;

  return (

    <div className="min-h-screen bg-gray-100 pt-38 p-10">

      {/* Welcome */}
      <div className="bg-white shadow-lg rounded-2xl p-8 mb-10">

        <FaUserCircle className="text-blue-700 text-6xl" />

        <div>
             <h1 className="text-4xl font-bold text-blue-700">
          Welcome, {user?.name}
        </h1>

        <p className="text-gray-600 mt-2">
          Manage your appointments and reviews easily.
        </p>

        </div>

       

      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Appointments */}
        <div className="bg-white shadow-lg rounded-2xl p-8 
        hover:scale-105 transition duration-300">

          <h2 className="text-2xl font-bold mb-4 flex gap-2">
             <FaCalendarCheck className="text-blue-600 text-3xl" />
            My Appointments
          </h2>

          <p className="text-gray-600 mb-6">
            View your booked appointments.
          </p>

          <Link
            to="/appointments"
            className="bg-blue-600 text-white px-5 py-3 rounded-xl"
          >
            View Appointments
          </Link>

        </div>

        {/* Reviews */}
        <div className="bg-white shadow-lg rounded-2xl p-8 
        hover:scale-105 transition duration-300">

          <h2 className="text-2xl font-bold mb-4 flex gap-2">
             <MdReviews className="text-blue-600 text-4xl" />
            My Reviews
          </h2>

          <p className="text-gray-600 mb-6">
            View your submitted reviews.
          </p>

          <Link
            to="/myreviews"
            className="bg-blue-600 text-white px-5 py-3 rounded-xl"
          >
            View Reviews
          </Link>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;