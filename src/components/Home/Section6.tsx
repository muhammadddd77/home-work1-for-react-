import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";

function Section6() {
  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-6xl px-12">
        <div className="text-center">
          <h2 className="font-serif text-5xl font-bold leading-tight">
            Calories Energy
            <br />
            Balance
          </h2>

          <p className="mt-3 text-xs text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6">
          <div className="relative">
            <img
              src={img1}
              alt="Starters"
              className="h-80 w-full object-cover"
            />

            <h3 className="absolute left-5 top-5 font-serif text-2xl font-bold text-[#202B00]">
              Starters
            </h3>

            <button className="absolute right-5 top-5 text-3xl text-[#202B00]">
              →
            </button>
          </div>

          <div className="relative">
            <img
              src={img2}
              alt="Mains"
              className="h-80 w-full object-cover"
            />

            <h3 className="absolute left-5 top-5 font-serif text-2xl font-bold text-[#202B00]">
              Mains
            </h3>

            <button className="absolute right-5 top-5 text-3xl text-[#202B00]">
              →
            </button>
          </div>

          <div className="relative">
            <img
              src={img3}
              alt="Soups"
              className="h-80 w-full object-cover"
            />

            <h3 className="absolute left-5 top-5 font-serif text-2xl font-bold text-[#202B00]">
              Soups
            </h3>

            <button className="absolute right-5 top-5 text-3xl text-[#202B00]">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section6;