import { useState } from "react";
import { Link } from "react-router";
import Footer from "../components/Home/Footer";

function Reservations() {
  const [message, setMessage] = useState("");

  return (
    <>
      <main className="text-[#202B00]">

        <section className="bg-[#202B00] text-white">
          <div className="mx-auto max-w-7xl px-12">

            <header className="flex items-center justify-between py-7">
              <Link
                to="/"
                className="border border-white px-4 py-2 font-serif text-4xl"
              >
                FoodZero
              </Link>

              <nav className="flex items-center gap-8">
                <Link to="/" className="hover:text-[#C5A572]">Home</Link>
                <Link to="/menu" className="hover:text-[#C5A572]">Menu</Link>
                <Link to="/contact" className="hover:text-[#C5A572]">Contact</Link>
                <Link to="/about" className="hover:text-[#C5A572]">About</Link>
                <Link to="/portfolio" className="hover:text-[#C5A572]">Portfolio</Link>
              </nav>

              <div className="flex items-center gap-5">
                <span className="text-sm">+86 852 346 000</span>

                <Link
                  to="/reservations"
                  className="border border-white px-5 py-3 font-serif hover:bg-white hover:text-[#202B00]"
                >
                  Reservations
                </Link>
              </div>
            </header>

            <div className="py-20 text-center">
              <p className="text-sm tracking-widest text-[#C5A572]">
                FOODZERO RESTAURANT
              </p>

              <h1 className="mt-5 font-serif text-7xl font-bold">
                Reserve Your Table
              </h1>

              <p className="mt-5 font-serif text-lg text-gray-300">
                Enjoy delicious food and unforgettable moments.
              </p>
            </div>

          </div>
        </section>

        <section className="bg-[#EEF1E8] py-20">
          <div className="mx-auto max-w-6xl px-12">

            <div className="mb-14 text-center">
              <h2 className="font-serif text-5xl font-bold">
                Make a Reservation
              </h2>

              <p className="mt-3 text-sm text-gray-600">
                Get in touch with restaurant
              </p>
            </div>

            <div className="grid grid-cols-3 gap-12">

              <div>
                <h3 className="font-serif text-3xl font-bold">
                  Opening Hours
                </h3>

                <p className="mt-5 text-sm">
                  Sunday - Friday
                </p>

                <div className="mt-8 space-y-6">
                  <div className="border-b border-[#202B00]/30 pb-4">
                    <p className="font-serif text-xl">Brunch</p>
                    <p className="mt-2 text-sm text-gray-600">
                      11:00 - 12:00
                    </p>
                  </div>

                  <div className="border-b border-[#202B00]/30 pb-4">
                    <p className="font-serif text-xl">Lunch</p>
                    <p className="mt-2 text-sm text-gray-600">
                      13:00 - 17:00
                    </p>
                  </div>

                  <div>
                    <p className="font-serif text-xl">Dinner</p>
                    <p className="mt-2 text-sm text-gray-600">
                      18:00 - 20:00
                    </p>
                  </div>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setMessage("Demo: форма заполнена. Для настоящего бронирования нужно подключить API.");
                }}
                className="col-span-2 grid grid-cols-2 gap-5"
              >
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="h-14 border border-[#202B00] bg-transparent px-5 text-sm outline-none"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="h-14 border border-[#202B00] bg-transparent px-5 text-sm outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="col-span-2 h-14 border border-[#202B00] bg-transparent px-5 text-sm outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="col-span-2 h-14 border border-[#202B00] bg-transparent px-5 text-sm outline-none"
                />

                <input
                  type="date"
                  required
                  className="h-14 border border-[#202B00] bg-transparent px-5 text-sm outline-none"
                />

                <select
                  required
                  defaultValue=""
                  className="h-14 border border-[#202B00] bg-transparent px-5 text-sm outline-none"
                >
                  <option value="" disabled>Select Time</option>
                  <option>6:00 pm</option>
                  <option>7:00 pm</option>
                  <option>8:00 pm</option>
                  <option>9:00 pm</option>
                </select>

                <select
                  required
                  defaultValue="2"
                  className="col-span-2 h-14 border border-[#202B00] bg-transparent px-5 text-sm outline-none"
                >
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                  <option value="5">5 Persons</option>
                  <option value="6">6 Persons</option>
                  <option value="7">7 Persons</option>
                  <option value="8">8 Persons</option>
                </select>

                <textarea
                  placeholder="Special Requests"
                  rows={4}
                  className="col-span-2 border border-[#202B00] bg-transparent px-5 py-4 text-sm outline-none"
                />

                <div className="col-span-2 flex flex-col items-center">
                  <button
                    type="submit"
                    className="bg-[#5B6500] px-12 py-4 font-serif text-lg text-white transition hover:bg-[#202B00]"
                  >
                    Book Now
                  </button>

                  {message && (
                    <p className="mt-4 text-center text-sm text-[#5B6500]">
                      {message}
                    </p>
                  )}
                </div>
              </form>

            </div>
          </div>
        </section>

        <section className="bg-white py-16 text-center">
          <h2 className="font-serif text-4xl font-bold">
            We Look Forward to Seeing You
          </h2>

          <p className="mt-4 text-sm text-gray-600">
            Great food. Great people. Great moments.
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Reservations;