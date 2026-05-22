import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post(
        "/auth/login",
        formData
      );

      console.log(response.data);

      // Save user in localStorage
      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Invalid Email or Password");

    }

  };

  return (

    <div className="min-h-screen flex justify-center items-center bg-gray-100 login mt-5">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md l-b">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
          />

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-lg"
          >
            Login
          </button>

        </form>

      </div>

    </div>

  );
}

export default Login;