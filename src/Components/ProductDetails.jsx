
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";


const ProductDetails = () => {
    const product = useLoaderData()
   const { user } = useContext(AuthContext);
  const email = user.email;
 
  const handleSendToCart = (product, email) => {
    const { name , brand_name , price ,image_url, rating,_id } = product
    const cartItems = {
      email,
      name,
      brand_name,
      price,
      rating,
      _id,
      image_url,
      
    };
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire(
            "Good job!",
            "Product has added in MyCart!",
            "success"
          );
        }
      });
  };
    console.log(product);
    return (
      <div>
        <Navbar></Navbar>
        <div className="max-w-screen-2xl mx-auto">
          <div className="">
            <div className="grid grid-col-1 lg:grid-cols-5 gap-20  justify-center">
              {/* main section */}
              <div className="col-span-3  ">
                <div
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="card  bg-green-100 "
                >
                  <figure>
                    <img
                      data-aos="fade-right"
                      data-aos-easing="linear"
                      data-aos-duration="3000"
                      src={product.image_url}
                      alt="Shoes"
                    />
                  </figure>
                  <div
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="3000"
                    className="card-body"
                  >
                    <h2 className="text-4xl text-black font-bold ">
                      Model :{" "}
                      <i>
                        <span className="tracking-wider">{product.name}</span>
                      </i>
                    </h2>
                    <h2 className="text-2xl text-black font-bold ">
                      Brand Name :
                      <i>
                        <span className="tracking-wider">
                          {product.brand_name}
                        </span>
                      </i>{" "}
                    </h2>
                    <p className="text-lg font-semibold tracking-wider">
                      {product.short_description}
                    </p>
                    <p className="text-xl font-bold">Type : {product.type}</p>
                    <p className="text-xl font-bold">
                      Type : {product.rating} / 5.0
                    </p>
                    <p className="text-xl font-medium">
                      Price : <span>{product.price}</span>
                    </p>
                    <div className="card-actions justify-end">
                      <button
                        onClick={() => handleSendToCart(product, email)}
                        className="btn btn-success"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                {/* ad section  */}
                <div className="col-span-2 mx-auto  grid-cols-1">
                  {/* latest car */}
                  <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="3000"
                    className="bg-green-50 rounded-xl border-2 border-green-300"
                  >
                    <h1 className="text-center text-4xl text-black pb-6 pt-12 font-bold">
                      Latest Cars
                    </h1>
                    <div>
                      <div className="card md:px-10">
                        <figure>
                          <img
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="3000"
                            src="https://i.ibb.co/sFPFxCG/caro1.jpg"
                            alt="Shoes"
                            className="rounded-xl"
                          />
                        </figure>
                        <div
                          className="card-body"
                          data-aos="fade-left"
                          data-aos-easing="linear"
                          data-aos-duration="3000"
                        >
                          <h2 className="text-2xl text-black font-bold">
                            Mercedes-Benz C-Class
                            <div className="badge badge-success p-2 ml-2">
                              Latest
                            </div>
                          </h2>
                          <p className="text-lg font-medium">
                            The Mercedes-Benz C-Class is a sporty and stylish
                            compact luxury car known for its performance and
                            upscale features.
                          </p>
                          <div className="card-actions justify-end">
                            <button className="btn btn-success border-2 border-green-600">
                              <Link className="text-lg font-bold tracking-widest">
                                View Details
                              </Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Upcoming car */}
                  <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="3000"
                    className="bg-green-50 rounded-xl border-2 border-green-300 mt-10"
                  >
                    <h1 className="text-center text-4xl text-black pb-6 pt-12 font-bold">
                      Upcoming Cars
                    </h1>
                    <div>
                      <div className="mx-auto card md:px-10">
                        <figure>
                          <img
                            data-aos="fade-left"
                            data-aos-easing="linear"
                            data-aos-duration="3000"
                            src="https://i.ibb.co/ZxXVcYP/cat2.jpg"
                            alt="Shoes"
                            className="rounded-xl"
                          />
                        </figure>
                        <div
                          className="card-body"
                          data-aos="fade-right"
                          data-aos-easing="linear"
                          data-aos-duration="3000"
                        >
                          <h2 className="text-2xl text-black font-bold">
                            Ferrari F8 Tributo
                            <div className="badge badge-success p-2 md:ml-2">
                              UPCOMING
                            </div>
                          </h2>
                          <p className="text-lg font-medium">
                            Ferrari F8 Tributo price starts at $ 4.02 Cr and
                            goes upto $ 4.02 Cr (Ex-showroom). Ferrari F8
                            Tributo comes in 1 variants. Ferrari F8 Tributo top
                            variant price is $ 4.02 Cr.
                          </p>
                          <div className="card-actions justify-end">
                            <button className="btn btn-success border-2 border-green-600">
                              <Link className="text-lg font-bold tracking-widest">
                                KNOW MORE
                              </Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default ProductDetails;