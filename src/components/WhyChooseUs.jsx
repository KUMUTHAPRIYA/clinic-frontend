import { FaUserMd, FaCalendarCheck, FaStar, FaHeartbeat } from "react-icons/fa";

function WhyChooseUs() {

  const features = [
    {
      icon: <FaUserMd />,
      title: "Trusted Doctors",
      description: "Experienced and professional doctors for better healthcare."
    },

    {
      icon: <FaCalendarCheck />,
      title: "Easy Appointment",
      description: "Book appointments quickly with a simple process."
    },

    {
      icon: <FaStar />,
      title: "Patient Reviews",
      description: "Read genuine reviews and ratings from patients."
    },

    {
      icon: <FaHeartbeat />,
      title: "Quality Care",
      description: "Providing quality treatment and patient satisfaction."
    }
  ];

  return (

    <section className="py-10 bg-white">

      {/* Heading */}
      <div className="text-center mb-12">

        <h1 className="text-4xl font-bold text-gray-800">
          Why Choose Us
        </h1>

        <p className="text-gray-500 mt-3">
          We provide trusted healthcare services for patients.
        </p>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">

        {features.map((feature, index) => (

          <div
            key={index}
            className="bg-gray-100 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center"
          >

            {/* Icon */}
            <div className="text-5xl text-blue-600 flex justify-center mb-5">
              {feature.icon}
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800">
              {feature.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 mt-3">
              {feature.description}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}

export default WhyChooseUs;