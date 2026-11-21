import { Link } from "react-router";
import image from "../../assets/images/a1.png";

function Hero() {
  return (
    <section className="relative min-h-screen text-white">
      <img src={image} alt="Restaurant" className="absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-12">
        <header className="flex items-center justify-between py-7">
          <Link to="/" className="border border-white px-4 py-2 font-serif text-4xl">
            FoodZero
          </Link>

          <nav className="flex items-center gap-8">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
          </nav>

          <div className="flex items-center gap-6">
            <span className="text-sm">+86 852 346 000</span>
            <Link
              to="/reservations"
              className="border border-white px-6 py-3 font-serif hover:bg-white hover:text-black"
            >
              Reservations
            </Link>
          </div>
        </header>

        <div className="flex flex-1 flex-col justify-center pb-20">
          <h1 className="font-serif text-7xl font-bold leading-tight">
            About
            <br />
            FoodZero
          </h1>

          <p className="mt-6 max-w-lg font-serif text-xl">
            Good food, great moments and unforgettable experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
