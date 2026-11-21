import bg5 from "../../assets/images/bg5.png";

function Section2() {
  return (
    <section className="bg-[#EEF1E8] py-20 text-black">
      <div className="relative mx-auto max-w-6xl px-12">

        <div className="relative mb-16 text-center">
          <img
            src={bg5}
            alt=""
            className="absolute -left-4 -top-12 h-40 w-56 object-contain"
          />

          <h2 className="relative z-10 font-serif text-5xl font-bold">
            Make a Reservation
          </h2>

          <p className="relative z-10 mt-3 text-xs text-gray-600">
            Get in touch with restaurant
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="First Name"
            className="h-14 border border-gray-700 bg-transparent px-5 text-sm outline-none"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="h-14 border border-gray-700 bg-transparent px-5 text-sm outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="col-span-2 h-14 border border-gray-700 bg-transparent px-5 text-sm outline-none"
          />

          <input
            type="tel"
            placeholder="Phone"
            className="col-span-2 h-14 border border-gray-700 bg-transparent px-5 text-sm outline-none"
          />

          <input
            type="date"
            className="h-14 border border-gray-700 bg-transparent px-5 text-sm outline-none"
          />

          <select className="h-14 border border-gray-700 bg-transparent px-5 text-sm outline-none">
            <option>6:00 pm</option>
            <option>7:00 pm</option>
            <option>8:00 pm</option>
            <option>9:00 pm</option>
          </select>

          <select className="col-span-2 h-14 border border-gray-700 bg-transparent px-5 text-sm outline-none">
            <option>2 Person</option>
            <option>3 Person</option>
            <option>4 Person</option>
            <option>5 Person</option>
            <option>6 Person</option>
          </select>
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-[#5B6500] px-12 py-4 font-serif text-base font-bold text-white transition hover:bg-[#202B00]">
            Book Now
          </button>
        </div>

      </div>
    </section>
  );
}

export default Section2;