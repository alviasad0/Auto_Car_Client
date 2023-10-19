import { SiTrustpilot } from "react-icons/si";


const CustomerReview = () => {
    return (
      <div
        className="max-w-screen-2xl mx-auto bg-green-50 rounded-xl mt-20"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="3000"
      >
        <div className="max-w-7xl mx-auto py-20 ">
          <div className="flex items-center justify-between flex-col md:flex-row">
            {/* header */}
            <div
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              <h1 className="text-5xl text-black font-bold">
                Our Customer Reviews
              </h1>
              <p className="text-xl font-medium text-black pt-4">
                Here are some of the featured cars in different categories
              </p>
            </div>

            <div>
              {" "}
              <div
                className="border-2 p-4 flex gap-4 items-center  rounded-xl"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="3000"
              >
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
                <div className="border-l-4 border-green-600 pl-2">
                  <div className="flex gap-2">
                    <SiTrustpilot className="text-green-500  text-3xl"></SiTrustpilot>
                    <p className="text-xl font-bold">Trust_Pilot</p>
                  </div>
                  <div className="">
                    <p className="text-lg font-medium">Trust Rating 5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* body */}
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            <div className="carousel w-full ">
              {/* slider-1 */}
              <div id="slide1" className="carousel-item relative w-full">
                <div className="max-w-3xl  bg-white text-center mx-auto   mt-16  p-10 rounded-lg bg-cover border-2 border-green-800">
                  <div>
                    <div className="rating pt-8">
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                      />
                    </div>
                  </div>
                  <h1 className="text-center text-2xl font-bold pt-2 pb-8 ">
                    Easy to Buy
                  </h1>
                  <p className="text-xl tracking-widest font-bold ">
                    Drivco-Agency customer feedback is an invaluable source of
                    information that can help businesses improve their offerings
                    and provide better experiences.
                  </p>
                  <h1 className="text-center font-bold text-2xl  pt-5">
                    {" "}
                    - <span className="underline">MGA Nahian</span>
                  </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              {/* slider-2 */}
              <div id="slide2" className="carousel-item relative w-full">
                <div className="max-w-3xl  bg-white text-center mx-auto   mt-16  p-10 rounded-lg bg-cover border-2 border-green-800">
                  <div>
                    <div className="rating pt-8">
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                      />
                    </div>
                  </div>
                  <h1 className="text-center text-2xl font-bold pt-2 pb-8 ">
                    Great Service
                  </h1>
                  <p className="text-xl tracking-widest font-bold ">
                    Drivco-Agency customer feedback is an invaluable source of
                    information that can help businesses improve their offerings
                    and provide better experiences.
                  </p>
                  <h1 className="text-center font-bold text-2xl  pt-5">
                    {" "}
                    - <span className="underline">S Rahman</span>
                  </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              {/* slider-3 */}
              <div id="slide3" className="carousel-item relative w-full">
                <div className="max-w-3xl  bg-white text-center mx-auto   mt-16  p-10 rounded-lg bg-cover border-2 border-green-800">
                  <div>
                    <div className="rating pt-8">
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                      />
                    </div>
                  </div>
                  <h1 className="text-center text-2xl font-bold pt-2 pb-8 ">
                    Trusted Company
                  </h1>
                  <p className="text-xl tracking-widest font-bold ">
                    Drivco-Agency customer feedback is an invaluable source of
                    information that can help businesses improve their offerings
                    and provide better experiences.
                  </p>
                  <h1 className="text-center font-bold text-2xl  pt-5">
                    {" "}
                    - <span className="underline">Jhon Abraham</span>
                  </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CustomerReview;