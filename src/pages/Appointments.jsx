import { useEffect, useState } from "react";
import API from "../services/api";
import { Commet } from "react-loading-indicators";

function Appointments() {


  const [appointments, setAppointments] = useState([]);
   const [loading, setLoading] = useState(true);
   const storedData = JSON.parse(localStorage.getItem("user"));

   const user = storedData?.user;

 useEffect(() => {

  API.get("/appointments")

    .then((response) => {

      // Only logged-in user's appointments
      const myAppointments = response.data.filter(

        (appointment) =>

          appointment.patientName === user?.name

      );

      setAppointments(myAppointments);

    })

    .catch((error) => {

      console.log(error);

    })

    .finally(() => {

      setLoading(false);

    });

}, []);

  if (loading) {
  return (
    <div className="min-h-screen flex justify-center items-center">
     <Commet color="#0000ff" size="medium" text="" textColor="" />
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gray-100 p-10 pt-28">

      <h1 className="text-3xl font-bold text-center mb-8">
        My Appointments
      </h1>
      {appointments.length === 0 && (

  <p className="text-center text-red-500 text-xl mt-10">
    No Appointments Found
  </p>

)}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {appointments.map((appointment) => (

          <div
            key={appointment.id}
            className="bg-white shadow-lg rounded-2xl p-6"
          >

            <h2 className="text-2xl font-bold text-blue-700 mb-3">
              {appointment.doctor?.name}
            </h2>

            <p className="text-gray-700 mb-2">
              Patient:
              <span className="font-semibold">
                {" "}
                {appointment.patientName}
              </span>
            </p>

            <p className="text-gray-700">
              Date:
              <span className="font-semibold">
                {" "}
                {appointment.date}
              </span>
            </p>
            <p className="text-gray-700">
              Time:
              <span className="font-semibold">
                {" "}
                {appointment.time}
              </span>
            </p>
            <p className="text-gray-700">
              Symptoms:
              <span className="font-semibold">
                {" "}
                {appointment.symptoms}
              </span>
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Appointments;