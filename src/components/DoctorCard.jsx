import { useNavigate } from "react-router-dom";

function DoctorCard({ doctor }) {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:scale-105 hover:shadow-2xl transition duration-300 w-full">

      {/* Doctor Image */}
      <div className="flex justify-center">

        <img
          src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
          alt="doctor"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-blue-200"
        />

      </div>

      {/* Doctor Name */}
      <h2 className="text-xl sm:text-2xl font-bold text-center mt-4 text-gray-800">
        {doctor.name}
      </h2>

      {/* Specialization */}
      <p className="text-center text-blue-600 mt-2 font-medium text-sm sm:text-base">
        {doctor.specialization}
      </p>

      {/* Experience */}
      <p className="text-center text-gray-500 mt-2 font-medium text-sm sm:text-base">
        Experience : {doctor.experience}
      </p>

      {/* Appointment Button */}
      <button
        onClick={() => {

          if (!user) {

            alert("Please Login First");

            navigate("/login");

            return;
          }

          navigate(`/appointments/${doctor.id}`);

        }}
        className="bg-blue-950 hover:bg-blue-600 text-white w-full py-2 rounded-xl mt-4 transition duration-300"
      >
        Book Appointment
      </button>

      {/* Review Button */}
      <button
        onClick={() => {

          if (!user) {

            alert("Please Login First");

            navigate("/login");

            return;
          }

          navigate(`/review/${doctor.id}`);

        }}
        className="bg-blue-950 hover:bg-blue-600 text-white w-full py-2 rounded-xl mt-3 transition duration-300"
      >
        Add Review
      </button>

    </div>

  );
}

export default DoctorCard;