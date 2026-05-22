import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import { ClipLoader } from "react-spinners";

function Review() {

  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Get Logged-in User
  const storedData = JSON.parse(localStorage.getItem("user"));

  const user = storedData?.user;

  // Form State
  const [formData, setFormData] = useState({
    rating: "",
    comment: "",
  });

  // Handle Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // Submit Review
  const handleSubmit = async (e) => {

  e.preventDefault();

  setLoading(true);

  const reviewData = {

    rating: parseInt(formData.rating),

    comment: formData.comment,

    patientName: user?.name,

    doctor: {
      id: parseInt(id),
    },

  };

  console.log(reviewData);

  try {

    const response = await API.post("/reviews", reviewData);

    console.log(response.data);

    alert("Review Added Successfully");

    navigate("/");

  } catch (error) {

    console.log("FULL ERROR:", error.response);

    alert("Error Adding Review");

  } finally {

    setLoading(false);

  }

};

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Add Review
        </h1>

        {/* User Details */}
        <div className="bg-blue-50 p-4 rounded-xl mb-6">

          <p className="text-gray-700">
            <span className="font-bold">Name:</span> {user?.name}
          </p>

          <p className="text-gray-700 mt-2">
            <span className="font-bold">Email:</span> {user?.email}
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* Rating */}
          <label className="font-semibold text-gray-700">
            Rating
          </label>

          <input
            type="number"
            name="rating"
            placeholder="Enter Rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg mt-2 mb-5"
            required
          />

          {/* Comment */}
          <label className="font-semibold text-gray-700">
            Comment
          </label>

          <textarea
            name="comment"
            placeholder="Add your comment"
            value={formData.comment}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg mt-2 mb-6"
            rows="4"
            required
          />

          {/* Submit Button */}
          <button
  type="submit"
  disabled={loading}
  className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-lg"
>
  {loading ?(
    <ClipLoader size={20} color="#fff" />
  ) : (
    "Submit Review"
  )}
</button>

        </form>

      </div>

    </div>

  );
}

export default Review;