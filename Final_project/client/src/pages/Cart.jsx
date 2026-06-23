import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/cart",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data); // এটা রাখো

      setCart(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const removeItem = async (id) => {
  try {
    await axios.delete(
      `http://localhost:5000/api/cart/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Removed Successfully");

    fetchCart();
  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className="max-w-5xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">
        My Cart
      </h1>

      {cart.length === 0 ? (
        <h2>Cart Empty</h2>
      ) : (
        cart.map((item) => (
          <div
            key={item._id}
            className="border p-4 rounded mb-4"
          >
            <h2 className="text-xl font-bold">
              {item.tourId?.title}
            </h2>

            <p>₹ {item.tourId?.price}</p>

            <button
             onClick={() => removeItem(item._id)}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Remove
            </button>


            
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;