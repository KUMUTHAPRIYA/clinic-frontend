import React from "react";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/DashBoard";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import Appointments from "./pages/Appointments";
import Review from "./pages/Review";
import Login from "./pages/Login";
import Register from "./pages/Register";

import NavBar from "./components/NavBar";
import Reviews from "./pages/Reviews";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MyReviews from "./pages/MyReviews";

const App = () => {
  return (
    <BrowserRouter>

      <ScrollToTop/>

      <NavBar />
    
      

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/doctors" element={<Doctors />} />

         <Route path="/appointment" element={<Appointment />} />

        <Route
          path="/appointments/:id"
          element={<Appointment />}
        />

        <Route
          path="/appointments"
          element={<Appointments />}
        />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/myreviews" element={<MyReviews />} />

       <Route path="/reviews" element={<Reviews />} />
       <Route path="/review/:id" element={<Review />} />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

      </Routes>
      
      <Footer/>

    </BrowserRouter>
  );
};

export default App;