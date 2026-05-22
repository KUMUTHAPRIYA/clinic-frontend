import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FeaturedDoctors from '../components/FeaturedDoctor';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {

  const navigate = useNavigate();
  
  useEffect(() => {
  AOS.init({
    duration: 1000,
  });
}, [])

  return (
    <div>
   <div className="bg-white min-h-[75vh] py-2 flex flex-col md:flex-row items-center 
   justify-center px-10 pb-2 pt-28 ">
  
  <div className="grid md:grid-cols-2 gap-10 items-center "  >
    
    {/* Left Content */}
    <div>
      <h1 className="text-5xl font-bold text-gray-800 leading-tight">
        Book Appointments <br />
        With Trusted Doctors
      </h1>
         <p className="text-green-600 font-semibold mb-2">
  Trusted by 1000+ Patients
</p>

      <p className="mt-6 text-gray-600 text-lg">
        Find experienced doctors, schedule appointments,
        and manage your healthcare easily with our clinic system.
      </p>

      <div className="flex gap-4 mt-6" data-aos="fade-right">
  <button onClick={()=>navigate(`/doctors`)}  
  className="bg-blue-600 text-white px-6 py-3 rounded-lg" >
    Book Appointment
  </button>

  <button 
  onClick={()=>navigate(`/doctors`)}
  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg">
    View Doctors
  </button>
</div>
   
    </div>

    {/* Right Image */}
    <div className="flex justify-center doc-img "  data-aos="flip-left">
      <img
        src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg"
        alt="Doctor"
        className="w-[400px]"
      />
    </div>

  </div>
     
</div>
   <FeaturedDoctors/>
   <WhyChooseUs/>
</div>

      
  )
}

export default Home