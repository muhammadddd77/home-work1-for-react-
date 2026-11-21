function Section4() {
  return (
    <section className="bg-[#EEF1E8] py-20 text-black">
      <div className="mx-auto max-w-5xl px-12 text-center">
        <h2 className="font-serif text-5xl font-bold">
          Make a Reservation
        </h2>

        <p className="mt-3 text-xs text-gray-600">
          Get in touch with restaurant
        </p>

        <div className="mt-16 grid grid-cols-3 gap-4">
          <input type="date" defaultValue="2021-06-22" className="w-full border border-gray-700 bg-transparent px-4 py-3 text-xs outline-none" />

          <select className="w-full border border-gray-700 bg-transparent px-4 py-3 text-xs outline-none">
            <option>6:00 pm</option>
            <option>7:00 pm</option>
            <option>8:00 pm</option>
            <option>9:00 pm</option>
          </select>

          <select className="w-full border border-gray-700 bg-transparent px-4 py-3 text-xs outline-none">
            <option>2 Person</option>
            <option>3 Person</option>
            <option>4 Person</option>
            <option>5 Person</option>
            <option>6 Person</option>
          </select>
        </div>

        <button className="mt-11 bg-[#202B00] px-12 py-4 font-serif text-sm text-white transition hover:bg-[#5B6500]">
          Book Now
        </button>
      </div>
    </section>
  );
}

export default Section4;