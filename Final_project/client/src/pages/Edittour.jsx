import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
function Edittour() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {token} = useAuth();
  const [form, setForm] = useState({
    title: "",
    price: "",
  });

  const [loading, setLoading] = useState(true);

  const fetchSingleTour = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/tours/${id}`);

      setForm({
        title: res.data.title,
        price: res.data.price,
      });

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleTour();
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:5000/api/tours/${id}`,
        {
          title: form.title,
          price: Number(form.price),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.data.success) {
        alert(res.data.message || "Update failed");
        return;
      }

      alert("Tour Updated Successfully");

      navigate("/home");
    } catch (err) {
      console.log(err);
      alert("Update Failed");
    }
  };


  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">
          Edit Tour
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Tour Title
            </label>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 font-medium">
              Tour Price
            </label>

            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button className="w-full bg-yellow-500 text-white py-3 rounded hover:bg-yellow-600">
            Update Tour
          </button>
        </form>

        <Link
          to="/home"
          className="block text-center mt-4 text-blue-600 hover:underline"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
}

export default Edittour;