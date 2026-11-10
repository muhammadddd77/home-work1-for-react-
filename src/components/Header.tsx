import logo from "../assets/logo.png"

function Header() {
  return (
    <header className="flex items-center justify-between px-12 py-5">
      <img src={logo} alt="Logo" className="w-24" />

      <nav className="flex gap-12 text-sm">
        <a href="">Products</a>
        <a href="">Solutions</a>
        <a href="">Pricing</a>
        <a href="">Resources⌄</a>
      </nav>

      <div className="flex items-center gap-5 text-sm">
        <button>Log In</button>
        <button className="border border-slate-900 rounded-md px-5 py-2">Sign Up Now</button>
      </div>
    </header>
  )
}

export default Header