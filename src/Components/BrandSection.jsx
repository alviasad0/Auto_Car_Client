import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BrandDetails from "../Pages/BrandDetails";


const BrandSection = () => {

    const [allBrands, setBrands] = useState([])
   





    useEffect(() => {
        fetch("/Brands.json")
        .then(response => response.json())
            .then(data => {
            setBrands(data);
        })
    }, [])
    return (
      <div>
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 max-w-screen-lg mx-auto">
          {allBrands.map((brands) => (
            <div key={brands.id}>
              <Link
                to={`/brandDetails/${brands.brand_name}`}
                
              >
                <div className="card card-compact  bg-gray-200 shadow-xl">
                  <figure className="">
                    <img
                      src={brands.brand_logo}
                      alt="Shoes"
                      className="w-full h-[500px]"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{brands.brand_name}</h2>
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