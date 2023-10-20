import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import FutureCars from "../Components/FutureCars";
import Footer from "../Components/Footer";


const BrandDetails = () => {
    const {brand_name} = useParams()
    console.log(brand_name);
    const [allProducts, setAllProducts] = useState([])

 
    const products = allProducts.filter(
      (product) => product.brand_name === brand_name
    );
    
    console.log(products); 
    useEffect(() => { 
        fetch("http://localhost:5000/products")
        .then(response => response.json())
        .then(data=> setAllProducts(data))
    }, [])
    return (
      <div>
        <div className="max-w-screen-2xl mx-auto">
          <Navbar></Navbar>

          <div className="grid grid-cols-1 gap-20 lg:grid-cols-5 ">
            {/* cars section */}
            <div className="col-span-3">
              <div>
                {!products.length > 0 ? (
                  <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="bg-green-50 rounded-xl grid items-center justify-center "
                  >
                    <div className="py-10">
                      <img
                        data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="3000"
                        src="https://i.ibb.co/tYhyts8/sold-removebg-preview.png"
                        className="w-[250px] md:w-full pt-10 mx-auto"
                        alt=""
                      />
                      <h1
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="3000"
                        className="text-center lg:text-5xl font-bold text-black"
                      >
                        No Product available right now ..{" "}
                      </h1>
                      <p
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="3000"
                        className="text-center text-xl font-medium pt-10"
                      >
                        {" "}
                        All cars had been sold . New stock coming soon !!!
                      </p>
                      <div className="flex justify-center mt-16">
                        <button className="text-xl  btn btn-success tracking-widest">
                          <Link to="/">Go Home</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    {products.map((product) => (
                      <div key={product._id}>
                        <div>
                          <div
                            className="card lg:card-side bg-green-50 mb-10 shadow-xl"
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                          >
                            <figure>
                              <img
                                data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="3000"
                                src={product.image_url}
                                alt="Album"
                                className="w-[600px] h-[300px]"
                              />
                            </figure>
                            <div
                              className="card-body"
                              data-aos="fade-left"
                              data-aos-easing="linear"
                              data-aos-duration="3000"
                            >
                              <h2 className="text-2xl  font-bold text-black">
                                {product.name}
                              </h2>
                              <h2 className="text-xl font-bold text-black">
                                {product.brand_name}
                              </h2>
                              <p className="text-lg font-medium">
                                Type:{" "}
                                <span className="text-xl font-bold">
                                  {product.type}
                                </span>
                              </p>
                              <p className="text-lg font-medium">
                                Price:{" "}
                                <span className="text-xl font-bold">
                                  ${product.price}
                                </span>
                              </p>
                              <p className="text-lg font-medium">
                                Rating:
                                <span className="text-xl font-bold">
                                  {product.rating}
                                </span>
                                /5.0
                              </p>

                              <div className="card-actions justify-between ">
                                <button className="btn btn-success">
                                  <Link to={`/productUpdate/${product._id}`}>
                                    {" "}
                                    Update
                                  </Link>
                                </button>
                                <button className="btn btn-success">
                                  <Link to={`/productDetails/${product._id}`}>
                                    {" "}
                                    Details
                                  </Link>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
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
                        compact luxury car known for its performance and upscale
                        features.
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
                        Ferrari F8 Tributo price starts at $ 4.02 Cr and goes
                        upto $ 4.02 Cr (Ex-showroom). Ferrari F8 Tributo comes
                        in 1 variants. Ferrari F8 Tributo top variant price is $
                        4.02 Cr.
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
          <FutureCars></FutureCars>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default BrandDetails;