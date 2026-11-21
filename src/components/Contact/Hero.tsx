import { Link } from "react-router";
import bg3 from "../../assets/images/bg3.png";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <img
        src={bg3}
        alt="Restaurant"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-12">
        <header className="flex items-center justify-between py-7">
          <Link to="/" className="border border-white px-4 py-2 font-serif text-4xl">
            FoodZero
          </Link>

          <nav className="flex items-center gap-8">
            <Link to="/" className="transition hover:text-[#C5A572]">
              Home
            </Link>

            <Link to="/menu" className="transition hover:text-[#C5A572]">
              Menu
            </Link>

            <Link to="/contact" className="transition hover:text-[#C5A572]">
              Contact
            </Link>

            <Link to="/about" className="transition hover:text-[#C5A572]">
              About
            </Link>

            <Link to="/portfolio" className="transition hover:text-[#C5A572]">
              Portfolio
            </Link>

            <Link to="/crud" className="transition hover:text-[#C5A572]">
              Crud
            </Link>
          </nav>

          <div className="flex items-center gap-6">
            <span className="text-sm">+86 852 346 000</span>

            <Link
              to="/reservations"
              className="border border-white px-6 py-3 font-serif transition hover:bg-white hover:text-black"
            >
              Reservations
            </Link>
          </div>
        </header>

        <div className="flex flex-1 items-center justify-between gap-12 pb-16">
          <div>
            <h1 className="font-serif text-7xl font-bold">
              Get in Touch
            </h1>

            <p className="mt-6 font-serif text-lg">
              The freshest ingredients for you every day
            </p>
          </div>

          <div className="mt-auto w-1/2 max-w-xl">
            <div className="flex items-center justify-between border-b border-dotted border-white/70 pb-5">
              <h2 className="font-serif text-xl">Open Time</h2>
              <span className="text-sm">Sunday - Friday</span>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-6 text-sm">
              <div>
                <p>Brunch</p>
                <p className="mt-2 text-xs">11:00-12:00</p>
              </div>

              <div>
                <p>Lunch</p>
                <p className="mt-2 text-xs">13:00-17:00</p>
              </div>

              <div>
                <p>Dinner</p>
                <p className="mt-2 text-xs">18:00-20:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;