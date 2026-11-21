import salad from "../../assets/images/salad.png";
import bg from "../../assets/images/bg.png";

function Section1() {
  return (
    <section className="relative overflow-hidden bg-white py-16 text-black">
      <img src={bg} alt="" className="absolute right-0 top-0 w-64 object-contain" />

      <div className="relative z-10 mx-auto max-w-6xl px-12">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-5xl font-bold">
            Starters
          </h2>

          <p className="mt-3 text-xs text-gray-500">
            This is a section of your menu. Give your section a brief description
          </p>
        </div>

        <div className="grid grid-cols-2 items-center gap-12">
          <div>
            <img src={salad} alt="Fresh salad" className="h-96 w-full object-cover" />
          </div>

          <div>
            <div>
              <div className="flex justify-end border-b border-dotted border-black pb-2">
                <span className="font-serif text-xl font-bold">$20</span>
              </div>

              <h3 className="mt-2 font-serif text-2xl font-bold">
                Grilled Okra and Tomatoes
              </h3>

              <p className="mt-3 text-xs text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex justify-end border-b border-dotted border-black pb-2">
                <span className="font-serif text-xl font-bold">$18</span>
              </div>

              <h3 className="mt-2 font-serif text-2xl font-bold">
                Cucumber Salad
              </h3>

              <p className="mt-3 text-xs text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex justify-end border-b border-dotted border-black pb-2">
                <span className="font-serif text-xl font-bold">$12</span>
              </div>

              <h3 className="mt-2 font-serif text-2xl font-bold">
                Basil Pancakes
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

export default Section1;