import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import axios from "axios";
const Tourcard = ({tour}) => {
    const {user,token} = useAuth();
    const handleDelete = async () => {
    const confirmDelete = window.confirm(
    "Are you sure you want to delete this tour?"
  );

  if (!confirmDelete) return;

  try {
    await axios.delete(
      `http://localhost:5000/api/tours/${tour._id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
     );

     alert("Tour Deleted Successfully");
     window.location.reload();
      } catch (err) {
        console.log(err);
        alert("Delete Failed");
      }
    };
    
  return (
    <div className='bg-white rounded-lg shadow p-5 mt-5 hover:shadow-xl transition'>
      <h2 className='text-2xl font-bold mb-2'>{tour.title}</h2>
      <h3 className='text-green-600 text-xl font-semibold mb-4'>₹ {tour.price}</h3>
      <div className='flex gap-3'>
        <Link to={`/view/${tour._id}`} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
          View
        </Link>
        {user?.role === "admin" && (
          <>
          <Link to={`/edit/${tour._id}`} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>
          Edit
        </Link>
            <button
           onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
             Delete
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Tourcard
