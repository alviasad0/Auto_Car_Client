import { useContext, useState } from "react";

import { AuthContext } from "./../Providers/AuthProvider";
import Navbar from "../Components/Navbar";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../Components/Footer";
import { BsInstagram } from 'react-icons/bs';

const AddToCart = () => {
  const { user } = useContext(AuthContext);
  const SelectedItems = useLoaderData();
  
  const loadedCartItems = SelectedItems.filter(
    (cartItem) => cartItem.email === user.email
  );
  const [cartItems , setCartItems] = useState(loadedCartItems)  

    



    const handleDeleteBtn = (_id) => {
        
       Swal.fire({
         title: "Are you sure?",
         text: "Remove from the cart !!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
       }).then((result) => {
         if (result.isConfirmed) {
           
             fetch(`http://localhost:5000/cart/${_id}`, {
               method: "DELETE",
             })
               .then((response) => response.json())
               .then((data) => {
                 console.log(data);
                 if (data.deletedCount > 0) {
                   Swal.fire(
                     "Good job!",
                     "Product has deleted from  the database!",
                     "success"
                   );
                   const remaining = cartItems.filter(item => item._id !== _id)
                   setCartItems(remaining)
                 }
               });
         }
       });



       
    }
  console.log(cartItems);
  console.log(user);
  return (
    <div>
      <Navbar></Navbar>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="max-w-screen-2xl mx-auto bg-green-50 rounded-xl"
      >
        <h1 className="text-center text-5xl font-bold text-black pt-10 ">
          Cart section{" "}
        </h1>
        {cartItems.length > 0 ? (
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 lg:px-10">
              {cartItems.map((cartItem) => (
                <div
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                  key={cartItem._id}
                  className="card card-compact  bg-green-200 "
                >
                  <figure>
                    <img src={cartItem.image_url} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Model Name : {cartItem.name}</h2>
                    <h2 className="card-title">
                      Brand Name : {cartItem.brand_name}
                    </h2>
                    <p className="text-xl font-bold">
                      {" "}
                      Price : $ {cartItem.price}
                    </p>
                    

                    <div className="card-actions justify-end">
                      <button
                        onClick={() => handleDeleteBtn(cartItem._id)}
                        className="btn btn-success"
                      >
                        Remove From Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <img
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="3000"
              src="https://i.ibb.co/vcvmKGy/empty-cart-1.png"
              className="mx-auto pt-10 pb-10"
              alt=""
            />
          </div>
        )}
        <div className="flex justify-center ">
          <button
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="3000"
            className="btn btn-success mb-10 text-xl font-bold mx-auto"
          >
            <Link to="/">Home</Link>
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddToCart;
