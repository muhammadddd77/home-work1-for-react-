import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#202B00] text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-4 gap-12 px-12 py-20">
        <div>
          <h1 className="font-serif text-5xl leading-tight">
            Food
            <br />
            Zero.
          </h1>
        </div>

        <div>
          <h2 className="font-serif text-xl font-bold">
            Contact
          </h2>

          <div className="mt-10 text-sm leading-6">
            <p>+1+86 852 346 000</p>
            <p>info@foodzero.com</p>
          </div>

          <p className="mt-5 text-sm leading-6">
            1959 Sepulveda Blvd.
            <br />
            Culver City, CA, 90230
          </p>
        </div>

        <div className="col-span-2">
          <h2 className="font-serif text-xl font-bold">
            Never Miss a Recipe
          </h2>

          <div className="mt-10 flex gap-5">
            <input
              type="email"
              placeholder="Email Address"
              className="h-16 flex-1 border border-white bg-transparent px-6 text-sm text-white outline-none placeholder:text-white"
            />

            <button className="bg-[#5B6500] px-8 font-serif text-xl font-bold transition hover:bg-[#737F00]">
              Subscribe
            </button>
          </div>

          <p className="mt-3 text-xs">
            Join our subscribers and get best recipe delivered each week!
          </p>
        </div>
      </div>

      <div className="border-t border-dashed border-white/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-12 py-10">
          <p className="text-sm">
            © 2020 Zero Inc. All rights Reserved
          </p>

          <div className="flex items-center gap-6">
             <FaInstagram className="h-5 w-5 cursor-pointer" />
             <FaTwitter className="h-5 w-5 cursor-pointer" />
             <FaFacebookF className="h-5 w-5 cursor-pointer" />
             <FaYoutube className="h-5 w-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;