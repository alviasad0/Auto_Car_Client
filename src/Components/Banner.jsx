import { SiTrustpilot } from "react-icons/si";
import { FaCarAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="text-center max-w-screen-2xl mx-auto   ">
      <div
        className="rounded-xl"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div
          className="hero h-[80vh] rounded-xl "
          style={{
            backgroundImage:
              "url(https://i.ibb.co/BLZcZkh/couple-searching-new-car-dealership.jpg)",
          }}
        >
          <div className="hero-overlay   bg-opacity-60 rounded-xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div
              className=""
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              <h1 className="lg:text-8xl text-white  font-extrabold">
                Premier Auto Sales
              </h1>
              <p className="text-center text-xl text-white pt-4 font-semibold">
                Car dealerships may sell new cars from one or several
                manufacturers
              </p>
              <div className="flex gap-6 justify-center pt-10">
                <div>
                  <div className="rating rating-md rating-half">
                    <input
                      type="radio"
                      name="rating-10"
                      className="rating-hidden"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-green-500 mask mask-star-2 mask-half-2"
                      checked
                    />
                  </div>
                  <p className="text-center text-lg font-medium">Rating 2459</p>
                </div>
                <div>
                  <div className="flex gap-2">
                    <SiTrustpilot className="text-green-500  text-3xl"></SiTrustpilot>
                    <p className="text-xl font-bold">Trust_Pilot</p>
                  </div>
                  <div className="border-l-2">
                    <p className="text-lg font-medium">Trust Rating 5.0</p>
                  </div>
                </div>
                <div>
                  <button className="btn btn-success font-bold text-xl tracking-widest ">
                    FIND YOUR CAR{" "}
                    <span>
                      <FaCarAlt className="text-2xl"></FaCarAlt>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
