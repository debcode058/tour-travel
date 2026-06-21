import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );

      alert(res.data.message);

      if (res.data.success) {
        navigate("/login");
      }
    } catch (err) {
      alert("Register Failed");
    }
  };

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
            required
          />

          <select
            name="role"
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button className="w-full bg-blue-600 text-white py-3 rounded">
            Register
          </button>
        </form>

        <p className="text-center mt-4">
          Already have account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;