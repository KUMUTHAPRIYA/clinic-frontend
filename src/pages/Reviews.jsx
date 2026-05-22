import { useEffect, useState } from "react";
import API from "../services/api";
import { Commet } from "react-loading-indicators";

function Reviews() {

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    API.get("/reviews")
      .then((response) => {

        console.log(response.data);

        setReviews(response.data);

      })
      .catch((error) => {
        console.log(error);
      })
      .finally(()=>{
        setLoading(false);
      })

  }, []);
  if(loading){
    return (
    <div className="min-h-screen flex justify-center items-center">
     <Commet color="#0000ff" size="medium" text="" textColor="" />
    </div>
  );
}

  return (

    <div className="min-h-screen bg-gray-100 p-10 pt-28">

      <h1 className="text-3xl font-bold text-center mb-10">
         Reviews
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {reviews.map((review) => (

          <div
            key={review.id}
            className="bg-white shadow-lg rounded-2xl p-6"
          >

            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {review.doctor?.name}
            </h2>

            <p className="text-gray-700 mb-2">
              Patient:
              <span className="font-semibold">
                {" "}
                {review.patientName}
              </span>
            </p>

            <p className="text-yellow-500 font-semibold mb-2">
              Rating: {review.rating} ⭐
            </p>

            <p className="text-gray-700">
              {review.comment}
            </p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Reviews;