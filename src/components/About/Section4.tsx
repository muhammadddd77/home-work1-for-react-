import meat2 from "../../assets/images/meat2.png";
import meat3 from "../../assets/images/meat3.png";
import meat4 from "../../assets/images/meat4.png";

function Section4() {
  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-6xl px-12">
        <h2 className="text-center font-serif text-4xl font-bold">
          Sophisticated Process
        </h2>

        <div className="mt-16 grid grid-cols-2 gap-16">

          <div>
            <div className="flex items-center gap-8">
              <img
                src={meat2}
                alt="Slicing meat"
                className="h-56 w-1/2 object-cover"
              />

              <div>
                <h3 className="font-serif text-2xl font-bold">
                  01.Slice
                </h3>

                <p className="mt-3 text-xs leading-5 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Purus lorem id penatibus imperdiet.
                </p>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="font-serif text-2xl font-bold">
                03.Bake
              </h3>

              <p className="mt-3 max-w-sm text-xs leading-5 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Purus lorem id penatibus imperdiet.
              </p>

              <img
                src={meat4}
                alt="Baking meat"
                className="mt-5 h-56 w-3/4 object-cover"
              />
            </div>
          </div>

          <div className="mt-32">
            <img
              src={meat3}
              alt="Pickled meat"
              className="h-56 w-3/4 object-cover"
            />

            <div className="mt-5">
              <h3 className="font-serif text-2xl font-bold">
                02.Pickled
              </h3>

              <p className="mt-3 max-w-sm text-xs leading-5 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Purus lorem id penatibus imperdiet.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Section4;