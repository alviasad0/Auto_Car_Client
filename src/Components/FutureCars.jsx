

const FutureCars = () => {
    return (
      <div
        className="max-w-screen-2xl mx-autto mt-20"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="bg-green-50 p-10 rounded-xl">
          <h1
            className="text-center text-black text-6xl font-bold"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            Future Cars{" "}
          </h1>
          <p
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="3000"
            className="text-center text-lg max-w-2xl mx-auto font-medium pt-4 pb-10"
          >
            Electric cars are the future, and each year we have seen automakers
            add more EVs to their lineups. Everyone is working on electric
            vehicles, from well-established existing manufacturers to new names
            such as Lucid, Canoo, and Rivian.
          </p>
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="3000"
            className="carousel w-full h-[60vh] rounded-xl"
          >
            <div id="slide1" className="carousel-item relative w-full ">
              <img src="https://i.ibb.co/SxSHSL6/fut1.jpg" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src="https://i.ibb.co/ZH3JjwL/fut2.jpg" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src="https://i.ibb.co/RT78rYF/fut3.jpg" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src="https://i.ibb.co/hfyYFbY/fut4.jpg" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
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
    );
};

export default FutureCars;