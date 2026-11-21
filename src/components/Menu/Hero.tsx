import { Link } from "react-router";
import image from "../../assets/images/menu.png";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <img src={image} alt="Restaurant food" className="absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-12">
        <header className="flex items-center justify-between py-7">
          <Link to="/" className="border border-white px-4 py-2 font-serif text-4xl">
            FoodZero
          </Link>

          <nav className="flex items-center gap-8">
            <Link to="/" className="hover:text-[#C5A572]">Home</Link>
            <Link to="/menu" className="hover:text-[#C5A572]">Menu</Link>
            <Link to="/contact" className="hover:text-[#C5A572]">Contact</Link>
            <Link to="/about" className="hover:text-[#C5A572]">About</Link>
            <Link to="/portfolio" className="hover:text-[#C5A572]">Portfolio</Link>
            <Link to="/crud" className="hover:text-[#C5A572]">Crud</Link>
          </nav>

          <div className="flex items-center gap-6">
            <span className="text-sm">+86 852 346 000</span>

            <Link to="/reservations" className="border border-white px-6 py-3 font-serif hover:bg-white hover:text-black">
              Reservations</Link>
          </div>
        </header>

        <div className="mt-20">
          <h1 className="max-w-2xl font-serif text-7xl leading-tight">
            View Our<br />New Menu</h1>

          <p className="mt-6 font-serif text-lg">
            The freshest ingredients for you every day
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero;