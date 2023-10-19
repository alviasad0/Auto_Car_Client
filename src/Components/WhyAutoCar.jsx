
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoThumbsUpOutline } from "react-icons/io5";
const WhyAutoCar = () => {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <div
        className="bg-green-50  rounded-xl mt-28"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="flex flex-col py-20 items-center justify-center lg:flex-row gap-20">
          <div
            className="lg:max-w-xl"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            <h1 className="text-5xl font-bold text-black">Why AUTOCAR?</h1>
            <p className="text-xl font-medium text-black pt-4">
              To get the most accurate and up-to-date information.
            </p>
            <div className="pt-10 space-y-6">
              <div className="flex gap-6 items-center justify-center">
                <div className="border-green-600 border-l-4 pl-6 py-4">
                  <LiaCertificateSolid className="text-4xl  "></LiaCertificateSolid>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-black">
                    Safe purchase
                  </h1>
                  <p className="text-xl text-black font-medium">
                    Safe purchase products are typically known for their high
                    quality and reliability.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-center justify-center">
                <div className="border-green-600 border-l-4 pl-6 py-4">
                  <VscWorkspaceTrusted className="text-3xl  "></VscWorkspaceTrusted>
                </div>
                <div>
                  <h1 className="text-2xl text-black font-bold ">
                    90 Days Warranty
                  </h1>
                  <p className="text-xl text-black font-medium">
                    The warranty generally covers repairs, replacements, or
                    refunds for products that exhibit defects.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-center justify-center">
                <div className="border-green-600 border-l-4 pl-6 py-4">
                  <IoThumbsUpOutline className="text-3xl  "></IoThumbsUpOutline>
                </div>
                <div>
                  <h1 className="text-2xl text-black font-bold ">
                    Hassle & Haggle Free
                  </h1>
                  <p className="text-xl text-black font-medium">
                    Whether it is buying a product, negotiating a contract, or
                    seeking customer support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="rounded-xl"
              src="https://i.ibb.co/GQZJG5y/why-drivco.png"
              alt=""
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="3000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAutoCar;
