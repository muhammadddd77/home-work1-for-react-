import meat from "../../assets/images/meat.png";

function Section2() {
  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-6xl px-12">
        <div className="text-center">
          <h2 className="font-serif text-5xl font-bold">Mains</h2>

          <p className="mt-3 text-xs text-gray-500">
            This is a section of your menu. Give your section a brief description
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 items-center gap-12">
          <div>
            <div>
              <div className="flex justify-end border-b border-dotted border-black pb-2">
                <span className="font-serif text-xl font-bold">$20</span>
              </div>

              <h3 className="mt-2 font-serif text-2xl font-bold">
                Deep Sea Snow White Cod Fillet
              </h3>

              <p className="mt-3 text-xs text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex justify-end border-b border-dotted border-black pb-2">
                <span className="font-serif text-xl font-bold">$22</span>
              </div>

              <h3 className="mt-2 font-serif text-2xl font-bold">
                Steak With Rosemary Butter
              </h3>

              <p className="mt-3 text-xs text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex justify-end border-b border-dotted border-black pb-2">
                <span className="font-serif text-xl font-bold">$20</span>
              </div>

              <h3 className="mt-2 font-serif text-2xl font-bold">
                Steaks with Grilled Kimchi
              </h3>

              <p className="mt-3 text-xs text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div>
            <img
              src={meat}
              alt="Steak with rosemary"
              className="h-96 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;