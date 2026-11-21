import table from "../../assets/images/table.png";
import bg4 from "../../assets/images/bg4.png";
import home from "../../assets/images/home.png";

function Section1() {
  return (
    <section className="bg-white py-20 text-[#202B00]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-x-20 gap-y-12 px-12">

        <div>
          <img src={table} alt="Restaurant table" className="h-48 w-full object-cover"    />
        </div>

        <div className="relative flex h-48 items-center">
          <img src={bg4} alt="" className="absolute -top-12 right-10 h-40 w-40 object-contain"/>

          <p className="relative z-10 max-w-xs text-sm leading-6">
            We can be contacted via
            <br />
            email <span className="text-[#5B6500]">info@foodzero.com</span>
            <br />
            or telephone on <span className="text-[#5B6500]">+86 852 346 000</span>
          </p>
        </div>

        <div className="flex flex-col justify-center pl-3">
          <p className="max-w-sm text-sm leading-6">
            We are located in 1959 Sepulveda Blvd. Culver City, CA, 90230
          </p>

          <a className="mt-6 w-fit border border-black px-5 py-3 text-sm transition hover:bg-[#202B00] hover:text-white">
            View in maps
          </a>
        </div>

        <div>
          <img src={home} alt="Restaurant building" className="h-80 w-full object-cover" />
        </div>

      </div>
    </section>
  );
}

export default Section1;