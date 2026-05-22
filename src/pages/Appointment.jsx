import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import { ThreeDot } from "react-loading-indicators";

function Appointment() {

  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Get User From LocalStorage
  const storedData = JSON.parse(localStorage.getItem("user"));

  const user = storedData?.user;

  // Appointment State
  const [appointment, setAppointment] = useState({
    date: "",
    time: "",
    symptoms: ""
  });

  // Submit Function
  const handleSubmit = async (e) => {

    e.preventDefault();
    setLoading(true);

    const appointmentData = {

      date: appointment.date,

      time: appointment.time,

      symptoms: appointment.symptoms,

      patientName: user.name,

      patientEmail: user.email,

      doctor: {
        id: parseInt(id)
      }

    };

    console.log(appointmentData);

    try {

      await API.post("/appointments", appointmentData);

      alert("Appointment Booked Successfully");

      navigate("/");

    } catch (error) {

      console.log(error);

      alert("Failed to Book Appointment");

    }
    finally{
       setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-10">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Book Appointment
        </h1>

        {/* User Details */}
        <div className="bg-blue-50 p-4 rounded-xl mb-6">

          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            Patient Details
          </h2>

          <p className="text-gray-700">
            <span className="font-bold">Name:</span> {user?.name}
          </p>

          <p className="text-gray-700 mt-1">
            <span className="font-bold">Email:</span> {user?.email}
          </p>

        </div>

        {/* Appointment Form */}
        <form onSubmit={handleSubmit}>

          {/* Date */}
          <label className="font-semibold text-gray-700">
            Appointment Date
          </label>

          <input
            type="date"
            value={appointment.date}
            onChange={(e) =>
              setAppointment({
                ...appointment,
                date: e.target.value
              })
            }
            className="w-full border border-gray-300 p-3 rounded-xl mt-2 mb-5"
            required
          />

          {/* Time */}
          <label className="font-semibold text-gray-700">
            Appointment Time
          </label>

          <input
            type="time"
            value={appointment.time}
            onChange={(e) =>
              setAppointment({
                ...appointment,
                time: e.target.value
              })
            }
            className="w-full border border-gray-300 p-3 rounded-xl mt-2 mb-5"
            required
          />

          {/* Symptoms */}
          <label className="font-semibold text-gray-700">
            Symptoms
          </label>

          <textarea
            placeholder="Enter symptoms..."
            value={appointment.symptoms}
            onChange={(e) =>
              setAppointment({
                ...appointment,
                symptoms: e.target.value
              })
            }
            className="w-full border border-gray-300 p-3 rounded-xl mt-2 mb-6"
            rows="4"
            required
          />

          {/* Button */}
          <button
  type="submit"
  disabled={loading}
  className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-lg flex justify-center items-center gap-2"
>
  {loading ? (
    <>
      
      Submitting...
      <ThreeDot color="white" size="small" />
    </>
  ) : (
    "Confirm Appointment"
  )}
</button>

        </form>

      </div>

    </div>
  );
}

export default Appointment;