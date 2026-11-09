import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-4">
      <img src={logo} alt="Logo" className="w-24" />

      <nav className="flex items-center gap-8">
        <a href="#">About</a>
        <a href="#">Passions</a>
        <a href="#">Portfolio</a>
        <a href="#" className="rounded bg-blue-500 px-4 py-2 text-white">
          Contact Me
        </a>
      </nav>
    </header>
  );
}

export default Header;