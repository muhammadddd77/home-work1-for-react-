
import image from "../assets/images/image.png";

function Hero() {
  return (
    <section className="relative mx-auto mt-0 w-full px-6 md:px-12 lg:px-20 xl:px-24">
      <div className="grid min-h-125 overflow-hidden rounded-t-[34px] md:grid-cols-2">
        <div className="bg-[#F3FAF7] px-8 py-14 md:px-12 md:py-20 lg:px-16">
          <h1 className="text-[42px] font-medium leading-[1.2] text-black lg:text-[52px]">
            Find your perfect place to stay
          </h1>

          <p className="mt-6 max-w-112.5 text-[15px] leading-6 text-[#777777]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <button className="mt-10 flex items-center gap-3 text-base font-medium text-black">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#20AD78]">
              ▶
            </span>
            Watch video
          </button>
        </div>

        <div className="min-h-88">
          <img src={image} alt="Hotel" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="relative mx-auto -mt-5 mb-7 flex w-[90%] flex-col items-center gap-3 rounded-[35px] bg-white p-4 shadow-[0_15px_35px_rgba(0,0,0,0.10)] md:absolute md:bottom-8 md:left-1/2 md:mb-0 md:mt-0 md:w-[82%] md:-translate-x-1/2 md:flex-row md:gap-0 md:rounded-full md:p-0 md:pl-6">
        <div className="w-full border-b border-gray-100 px-3 py-3 md:w-[18%] md:border-b-0 md:border-r">
          <p className="text-base text-[#333333]">
            <span className="mr-2 text-[#20AD78]">●</span>
            Location
          </p>
          <p className="ml-5 mt-1 text-xs text-gray-500">
            United States
          </p>
        </div>

        <div className="w-full border-b border-gray-100 px-3 py-3 md:w-[18%] md:border-b-0 md:border-r">
          <p className="text-base text-[#333333]">
            <span className="mr-2 text-[#20AD78]">▦</span>
            Check in
          </p>
          <p className="ml-5 mt-1 text-xs text-gray-500">
            10 Jun 2021
          </p>
        </div>

        <div className="w-full border-b border-gray-100 px-3 py-3 md:w-[18%] md:border-b-0 md:border-r">
          <p className="text-base text-[#333333]">
            <span className="mr-2 text-[#20AD78]">▦</span>
            Check out
          </p>
          <p className="ml-5 mt-1 text-xs text-gray-500">
            15 Jun 2021
          </p>
        </div>

        <div className="w-full px-3 py-3 md:w-[25%]">
          <p className="text-base text-[#333333]">
            <span className="mr-2 text-[#20AD78]">♟</span>
            Rooms for
          </p>
          <p className="ml-5 mt-1 text-xs text-gray-500">
            1 room, 2 guests
          </p>
        </div>

        <button className="flex h-17 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#20AD78] px-8 text-base text-white transition hover:bg-[#168c60] md:w-auto">
          <span>⌕</span>
          Search...
        </button>
      </div>
    </section>
  );
}

export default Hero;
