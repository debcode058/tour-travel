import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Viewtour() {
  const { id } = useParams();
  const { user } = useAuth();

  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchSingleTour = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/tours/${id}`);
      setTour(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleTour();
  }, [id]);

  
  if (loading) {
  return <h2>Loading...</h2>;
  }
  if (!tour) {
    return (
      <h2 className="text-center text-red-500 text-2xl mt-10">
        Tour Not Found
      </h2>
    );
  }

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">
        {tour.image && (
          <img
            src={`http://localhost:5000/uploads/${tour.image}`}
            alt='img'
            className='w-full h-48 object-cover rounded mb-4'
          />
        )}
          
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          {tour.title}
        </h2>

        <p className="text-gray-500 mb-2">Tour ID:</p>
        <p className="text-sm bg-gray-100 p-3 rounded mb-4 break-all">
          {tour._id}
        </p>

        <h3 className="text-green-600 text-2xl font-bold mb-6">
          ₹ {tour.price}
        </h3>

        <div className="flex gap-3">
          {user?.role === "admin" && (
          <Link
            to={`/edit/${tour._id}`}
            className="bg-yellow-500 text-white px-5 py-2 rounded hover:bg-yellow-600"
          >
            Edit
          </Link>
          )}

          <Link
            to="/home"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Viewtour;