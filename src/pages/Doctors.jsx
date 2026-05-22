import { useEffect, useState } from "react";
import API from "../services/api";
import DoctorCard from "../components/DoctorCard";
import { LifeLine } from "react-loading-indicators";

function Doctors() {

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

     setLoading(true);
    
     setTimeout(()=>{

     },3000)
    API.get("/doctors")
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {

        setLoading(false);

      });;

  }, []);

   // Search State
  const [search, setSearch] = useState("");

  // Filter Doctors
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.specialization.toLowerCase().includes(search.toLowerCase())
  );

   if (loading) {

    return ( 
      <div className="min-h-screen flex flex-col justify-center items-center">
            Loading..... <br />
          <LifeLine color="#0000ff" size="medium" text="" textColor="" />
      </div>
      

    );
  }


  return (
    <div className="p-10 bg-gray-100 min-h-screen pt-30 ">

      <h1 className="text-3xl font-bold  text-center">
        Our Specialist Doctors
      </h1>
      <p className="text-center pb-5">explore them...</p>
       {/* Search Box */}
      <div className="flex justify-center mt-6">

        <input
          type="text"
          placeholder="Search doctor's specialization..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[350px] px-5 py-3 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-10">

        {filteredDoctors.length > 0 ? (

  filteredDoctors.map((doctor) => (
    <DoctorCard key={doctor.id} doctor={doctor} />
  ))

) : (

  <p className="text-center text-red-500 text-xl col-span-4">
     Doctors Not Found!
  </p>

)}

      </div>

    </div>
  );
}

export default Doctors;