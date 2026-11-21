import leaves from "../../assets/images/leaves.png";

const menuItems = [
  {
    price: "$20",
    name: "Deep Sea Snow White Cod Fillet",
  },
  {
    price: "$22",
    name: "Steak With Rosemary Butter",
  },
  {
    price: "$18",
    name: "Cucumber Salad",
  },
  {
    price: "$90",
    name: "Natural Wine Pairing",
  },
];

function Section2() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      <div className="relative mx-auto max-w-6xl px-12 py-16">
        <img
          src={leaves}
          alt="Green leaves"
          className="pointer-events-none absolute right-0 top-0 h-72 w-1/2 object-contain object-top-right opacity-70"
        />

        <div className="relative z-10">
          <h2 className="font-serif text-4xl font-bold">
            Our Menu
          </h2>

          <p className="mt-3 max-w-xs text-xs leading-5 text-gray-600">
            This is a section of your menu. Give your section
            <br />
            a brief description
          </p>
        </div>

        <div className="relative z-10 mt-16 grid grid-cols-2 gap-x-12 gap-y-12">
          {menuItems.map((item, index) => (
            <div key={index}>
              <div className="flex justify-end border-b border-dotted border-black pb-2">
                <span className="font-serif text-xl font-bold">
                  {item.price}
                </span>
              </div>

              <h3 className="mt-3 font-serif text-2xl font-bold">
                {item.name}
              </h3>

              <p className="mt-3 text-xs leading-5 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section2;
