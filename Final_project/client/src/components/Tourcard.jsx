import React from 'react'
import {Link} from 'react-router-dom'
const Tourcard = ({tour}) => {
  return (
    <div className='bg-white rounded-lg shadow p-5 mt-5 hover:shadow-xl transition'>
      <h2 className='text-2xl font-bold mb-2'>{tour.title}</h2>
      <h3 className='text-green-600 text-xl font-semibold mb-4'>₹ {tour.price}</h3>
      <div className='flex gap-3'>
        <Link to={`/view/${tour._id}`} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
          View
        </Link>
        <Link to={`/edit/${tour._id}`} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>
          Edit
        </Link>
        {/* <button>Delete</button> */}
      </div>
    </div>
  )
}

export default Tourcard
