import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Addtour = () => {
  const navigate = useNavigate();
  const {token} = useAuth();
  const [title,setTitle] = useState("");
  const [price,setPrice] = useState("");
  const [image,setImage] = useState(null);
  const[video,setVideo] = useState(null);

  // const hc = (e) => {
    // setForm({
      // ...form,
      // [e.target.name]:e.target.value
    // })
  // }


  const hs = async(e) => {
    e.preventDefault();
    const fromData = new FormData();
    fromData.append("title",title);
    fromData.append("price",price);
    fromData.append("image",image);
    fromData.append("video",video);
    try{
      await axios.post("http://localhost:5000/api/tours",
      fromData,
      {
        headers:{
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
      alert("Tour added successfully");
      navigate("/home");
    } catch(err){
      console.log(err);
    }
  }
  return <>
  <div className="flex justify-center items-center mt-10">

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Add Tour
        </h2>

        <form onSubmit={hs}>

          <div className="mb-4">

            <label className="block mb-2">
              Tour Title
            </label>

            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border p-3 rounded"
              required
            />

          </div>

          <div className="mb-4">

            <label className="block mb-2">
              Tour Price
            </label>

            <input
              type="number"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border p-3 rounded"
              required
            />

          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full border p-3 rounded"
            />
          </div>
          <div>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideo(e.target.files[0])}
              className="w-full border p-3 rounded"
            />

          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded">
            Add Tour
          </button>

        </form>

      </div>

    </div>
  </>
}

export default Addtour
