import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import Tourcard from '../components/Tourcard';

const Home = () => {
    const [tours,setTours] = useState([]);
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
   {Array.isArray(tours) &&
    tours.map(x=>(
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
