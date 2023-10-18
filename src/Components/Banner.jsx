import { SlDiamond } from "react-icons/sl";
import { GiDiamondRing } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="text-center ">
      <div>
        <div
          className="hero h-[70vh]  "
          style={{
            backgroundImage: "url(https://i.ibb.co/svLmtMS/banner.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <p className="flex justify-center pt-16 pb-10">
                <SlDiamond className="text-white text-8xl"></SlDiamond>
              </p>
              <h1 className="lg:text-6xl text-white  font-bold">
                Your Free Wedding <br /> Manager App
              </h1>

              <div className="flex justify-center mt-10">
                <button className="flex gap-4  items-center btn px-8 rounded-full text-white btn-secondary ">
                  <GiDiamondRing className="text-2xl"></GiDiamondRing>
                  <span className="text-lg ">Plan your wedding</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
