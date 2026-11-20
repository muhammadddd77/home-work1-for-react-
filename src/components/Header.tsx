import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-white">
      <div className="relative mx-auto flex h-18 max-w-212 items-center justify-center px-4">
        <nav className="flex items-center gap-7 text-[15px] text-[#333333]">
          <Link to="/booking" className="hover:text-green-600">
            Booking
          </Link>

          <Link to="/#facilities" className="hover:text-green-600">
            Facilities
          </Link>

          <Link to="/#about" className="hover:text-green-600">
            About Us
          </Link>

          <Link to="/#location" className="hover:text-green-600">
            Location
          </Link>

          <Link to="/#contact" className="hover:text-green-600">
            Contact
          </Link>

          <Link to="/crud" className="hover:text-green-600">
            Crud
          </Link>
        </nav>

        <button className="absolute right-0 rounded-full bg-[#20AD78] px-4 py-2 text-[13px] text-white transition hover:bg-green-700">
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
