
function Section1() {
  return (
    <section className="bg-white py-12 text-white">
      <div className="mx-auto max-w-6xl px-12">

        <div className="mb-10 flex items-center justify-center gap-7 text-sm text-black">
          <button>All</button>
          <button>Starter</button>
          <button className="border-b border-dotted border-black pb-2">Launch</button>
          <button>Dinner</button>
          <button>Drinks</button>
          <button>Sweets</button>
          <button>Fruits</button>
        </div>

        <div className="grid grid-cols-3 gap-5">

          <div className="relative col-span-2 h-96 overflow-hidden">
            <img src="https://images.pexels.com/photos/31043029/pexels-photo-31043029.jpeg" alt="Premium Deep Sea Snow White Cod Fillet" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            <div className="absolute bottom-5 left-5 right-5">
              <h2 className="max-w-sm font-serif text-xl">
                Premium Deep Sea Snow White Cod Fillet
              </h2>
              <p className="mt-2 text-xs">
                Launch · Dinner
              </p>
            </div>

            <span className="absolute bottom-5 right-5 text-xl">→</span>
          </div>

          <div className="relative h-96 overflow-hidden">
            <img src="https://images.pexels.com/photos/10858715/pexels-photo-10858715.jpeg" alt="Wine and pears" className="h-full w-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            <div className="absolute bottom-5 left-5 right-5">
              <h2 className="font-serif text-xl">
                Option of natural wine available
              </h2>
              <p className="mt-2 text-xs">
                Drinks · Fruits
              </p>
            </div>
          </div>

        </div>

        <div className="mt-5 grid grid-cols-3 gap-5">

          <div className="relative h-96 overflow-hidden">
            <img src="https://images.pexels.com/photos/17335060/pexels-photo-17335060.jpeg" alt="Pumpkin soup" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            <div className="absolute bottom-5 left-5 right-5">
              <h2 className="font-serif text-xl">
                Best pumpkin for pumpkin soup
              </h2>
              <p className="mt-2 text-xs">
                Launch · Starters
              </p>
            </div>
          </div>

          <div className="relative col-span-2 h-96 overflow-hidden">
            <img src="https://images.pexels.com/photos/12015291/pexels-photo-12015291.jpeg" alt="Steak with rosemary" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            <div className="absolute bottom-5 left-5">
              <h2 className="font-serif text-xl">
                Strip Steak With Rosemary Butter
              </h2>
              <p className="mt-2 text-xs">
                Dinner · Lunch
              </p>
            </div>
          </div>

        </div>

        <div className="mt-5 grid grid-cols-2 gap-5">

          <div className="relative h-96 overflow-hidden">
            <img src="https://images.pexels.com/photos/6879452/pexels-photo-6879452.jpeg" alt="Seafood dish" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            <div className="absolute bottom-5 left-5 right-5">
              <h2 className="font-serif text-xl">
                Braised Sliced Abalone, Fish Maw with Premium Seafood
              </h2>
              <p className="mt-2 text-xs">
                Cold Dishes · Starters
              </p>
            </div>
          </div>

          <div className="relative h-96 overflow-hidden">
            <img  alt="Fried shrimp"  className="h-full w-full object-cover" src="https://images.pexels.com/photos/5639376/pexels-photo-5639376.jpeg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            <div className="absolute bottom-5 left-5 right-5">
              <h2 className="font-serif text-xl">
                Pan Fried Live Prawn with Superior Soy Sauce
              </h2>
              <p className="mt-2 text-xs">
                Starter · Dinner
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 flex justify-center">
          <button className="border border-black px-6 py-2 text-xs text-black hover:bg-[#202B00] hover:text-white">
            Loading...
          </button>
        </div>

      </div>
    </section>
  );
}

export default Section1;
