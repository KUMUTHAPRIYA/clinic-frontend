import { useEffect, useState } from "react";
import API from "../services/api";
import { Commet } from "react-loading-indicators";

function MyReviews() {

  const [reviews, setReviews] = useState([]);

  const [loading, setLoading] = useState(true);

  // Logged-in User
  const storedData = JSON.parse(localStorage.getItem("user"));

  const user = storedData?.user;

  useEffect(() => {

    API.get("/reviews")

      .then((response) => {

        // Filter only logged-in user's reviews
        const myReviews = response.data.filter(

          (review) =>

            review.patientName === user?.name

        );

        setReviews(myReviews);

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
        My Reviews
      </h1>

      {reviews.length === 0 && (

        <p className="text-center text-red-500 text-xl">
          No Reviews Found
        </p>

      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {reviews.map((review) => (

          <div
            key={review.id}
            className="bg-white shadow-lg rounded-2xl p-6"
          >

            <h2 className="text-2xl font-bold text-blue-700 mb-3">
              {review.doctor?.name}
            </h2>

            <p className="text-gray-700 mb-2">
              Rating:
              <span className="font-semibold">
                {" "}
                {review.rating}
              </span>
            </p>

            <p className="text-gray-700">
              Comment:
              <span className="font-semibold">
                {" "}
                {review.comment}
              </span>
            </p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default MyReviews;