import { Link } from "react-router";
import image from "../../assets/images/portfolio.png";

function Hero() {
  return (
    <section className="relative h-146 overflow-hidden text-white">
      <img src={image} alt="Restaurant food" className="absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-12">
        <header className="flex items-center justify-between py-7">
          <Link to="/" className="border border-white px-4 py-2 font-serif text-4xl">
            FoodZero
          </Link>

          <nav className="flex items-center gap-7">
            <Link to="/" className="hover:text-[#C5A572]">Home</Link>
            <Link to="/menu" className="hover:text-[#C5A572]">Menu</Link>
            <Link to="/contact" className="hover:text-[#C5A572]">Contact</Link>
            <Link to="/about" className="hover:text-[#C5A572]">About</Link>
            <Link to="/portfolio" className="hover:text-[#C5A572]">Portfolio</Link>
          </nav>

          <div className="flex items-center gap-6">
            <span className="text-sm">+86 852 346 000</span>

            <Link to="/reservations" className="border border-white px-6 py-3 font-serif hover:bg-white hover:text-black">
              Reservations
            </Link>
          </div>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center">
          <h1 className="font-serif text-5xl font-bold">
            Portfolio - Grids
          </h1>
        </div>

        <div className="flex flex-col items-center pb-4">
          <span className="-rotate-90 font-serif text-sm">Scroll</span>
          <div className="h-16 border-l border-dashed border-white"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;