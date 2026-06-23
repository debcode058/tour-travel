import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import Tourcard from '../components/Tourcard';
import { useAuth } from '../context/AuthContext';

const Home = () => {
    const [tours,setTours] = useState([]);
    const [search, setSearch] = useState("");
    const {token,user} = useAuth();
    const fetchTours = async()=>{
        try{
            const res = await axios.get("http://localhost:5000/api/tours");
            console.log(res.data);
            setTours(res.data);
        } catch(err){
            console.log(err);
        };
        
    }
    useEffect(()=>{
            fetchTours();
    },[])
    
  return <>
<div>
     <h1 className='text-3xl font-bold mb-0 col-span-full p-2'>All Tours</h1>
    {
        user && (
            <p className='text-blue-600 font-semibold mb-4 col-span-full'>
                Login Role:{user.role}
            </p>
        )
    }
    <div className="flex justify-center mt-5 bg">
  <input
    type="text"
    placeholder="Search Tour..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="border p-2 w-full md:w-96 rounded"
  />
  <button
  className="bg-orange-600 text-white px-4 py-2 rounded mt-0"
>
  Search
</button>

</div>

</div>


  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5'>
  {Array.isArray(tours) &&
 tours
   .filter((tour) =>
      tour.title?.toLowerCase().includes(search.toLowerCase())
   )
   .map((x) => (
      <Tourcard
        key={x._id}
        tour={x}
      />
   ))
}
  </div>
  
  </>
}

export default Home
