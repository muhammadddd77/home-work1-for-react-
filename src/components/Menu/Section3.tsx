import bg2 from "../../assets/images/bg2.png";
import drinks from "../../assets/images/drinks.png";

function Section3() {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-black">
      <img src={bg2} alt="" className="absolute left-1/2 top-0 w-48 -translate-x-1/2 object-contain" />

      <div className="relative z-10 mx-auto max-w-6xl px-12">
        <div className="text-center">
          <h2 className="font-serif text-5xl font-bold">
            Pastries & Drinks
          </h2>

          <p className="mt-3 text-xs text-gray-500">
            This is a section of your menu. Give your section a brief description
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 items-center gap-12">
          <div>
            <img
              src={drinks}
              alt="Drinks"
              className="h-96 w-full object-cover"
            />
          </div>

          <div>
            <div>
              <div className="flex justify-end border-b border-dotted border-black pb-2">
                <span className="font-serif text-xl font-bold">$158</span>
              </div>

              <h3 className="mt-2 font-serif text-2xl font-bold">
                Wine Pairing
              </h3>

              <p className="mt-3 text-xs text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex justify-end border-b border-dotted border-black pb-2">
                <span className="font-serif text-xl font-bold">$168</span>
              </div>

              <h3 className="mt-2 font-serif text-2xl font-bold">
                Natural Wine Pairing
              </h3>

              <p className="mt-3 text-xs text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex justify-end border-b border-dotted border-black pb-2">
                <span className="font-serif text-xl font-bold">$90</span>
              </div>

              <h3 className="mt-2 font-serif text-2xl font-bold">
                Whisky Flyer
              </h3>

              <p className="mt-3 text-xs text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;