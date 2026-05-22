import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function FeaturedDoctors() {

  const [doctors, setDoctors] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    API.get("/doctors")
      .then((response) => {

        // Only first 4 doctors
        setDoctors(response.data.slice(0, 4));

      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (

    <section className="py-6 bg-gray-100 mt-5">

      {/* Heading */}
      <div className="text-center">

        <h1 className="text-4xl font-bold text-gray-800">
          Featured Doctors
        </h1>

        <p className="text-gray-500 mt-3">
          Meet our experienced specialists
        </p>

      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-12">

        {doctors.map((doctor) => (

          <div
            key={doctor.id}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            {/* Image */}
            <div className="flex justify-center">

              <img
                src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
                alt="doctor"
                className="w-24 h-24 rounded-full border-4 border-blue-200"
              />

            </div>

            {/* Name */}
            <h2 className="text-2xl font-bold mt-4 text-gray-800">
              {doctor.name}
            </h2>

            {/* Specialization */}
            <p className="text-blue-600 mt-2">
              {doctor.specialization}
            </p>

            {/* Button */}
            <button
              onClick={() => navigate("/doctors")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl mt-5"
            >
              View Profile
            </button>

          </div>

        ))}

      </div>

      {/* View All Doctors Button */}
      <div className="text-center">

        <button
          onClick={() => navigate("/doctors")}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl text-lg font-semibold"
        >
          View All Doctors
        </button>

      </div>

    </section>

  );
}

export default FeaturedDoctors;