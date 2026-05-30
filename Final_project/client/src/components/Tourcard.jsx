import React from 'react'
import {Link} from 'react-router-dom'
const Tourcard = ({tour}) => {
  return (
    <div>
      <h2>{tour.title}</h2>
      <h3>₹ {tour.price}</h3>
      <div>
        <Link to={`/view/${tour._id}`}>View</Link>
        <Link to={`/edit/${tour._id}`}>Edit</Link>
      </div>
    </div>
  )
}

export default Tourcard
