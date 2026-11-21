import { Link } from "react-router";

function Header() {
  return (
    <header className="w-full bg-[#202B00] text-white">
      <div className="mx-auto flex max-w-360 flex-wrap items-center justify-between gap-5 px-6 py-5 md:px-12">

        <Link to="/" className="border border-white px-3 py-1 font-serif text-3xl">
          FoodZero
        </Link>

        <nav className="flex items-center gap-5 md:gap-8">
          <Link to="/" className="transition hover:text-[#C5A572]">Home</Link>
          <Link to="/menu" className="transition hover:text-[#C5A572]">Menu</Link>
          <Link to="/contact" className="transition hover:text-[#C5A572]">Contact</Link>
          <Link to="/about" className="transition hover:text-[#C5A572]">About</Link>
          <Link to="/portfolio" className="transition hover:text-[#C5A572]">Portfolio</Link>
          <Link to="/crud" className="transition hover:text-[#C5A572]">Crud</Link>
        </nav>

        <div className="flex items-center gap-5">
          <a href="tel:+86852346000" className="hidden text-sm lg:block">
            +86 852 346 000
          </a>

          <Link
            to="/reservations"
            className="border border-white px-5 py-3 transition hover:bg-white hover:text-[#202B00]"
          >
            Reservations
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Header;