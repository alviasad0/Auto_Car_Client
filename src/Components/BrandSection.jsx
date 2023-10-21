import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BrandSection = () => {
  const [allBrands, setBrands] = useState([]);

  useEffect(() => {
    fetch("https://automotiv.vercel.app/brands")
      .then((response) => response.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);
  return (
    <div
      className="max-w-screen-2xl mx-auto mt-20 bg-green-50 rounded-xl"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <h1 className="text-center text-7xl font-bold  text-black pt-10">
        Brand Category
      </h1>
      <p className="text-xl  font-medium text-center pt-4 pb-10">
        To get the most accurate and up-to-date information.
      </p>
      <div
        className="grid grid-cols-1 gap-20 lg:grid-cols-2 max-w-screen-lg mx-auto pb-20"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="3000"
      >
        {allBrands.map((brands) => (
          <div key={brands.id}>
            <Link to={`/brandDetails/${brands.brand_name}`}>
              <div className="card card-compact w-96  bg-green-200 ">
                <figure className="  bg-green-100">
                  <img
                    src={brands.brand_logo}
                    alt="Shoes"
                    className=" h-[200px]"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-center text-3xl font-bold ">
                    {brands.brand_name}
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
