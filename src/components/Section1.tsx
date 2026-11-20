
import foto1 from "../assets/images/foto1.png";
import foto2 from "../assets/images/foto2.png";
import foto3 from "../assets/images/foto3.png";

function Section2() {
  return (
    <section className="w-full px-6 py-10 md:px-12 lg:px-20 xl:px-24">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">
            Our most popular Hotels
          </h2>

          <p className="mt-3 max-w-100 text-[13px] leading-6 text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <button className="rounded-full bg-[#E8F7F1] px-5 py-3 text-[12px] text-[#20AD78]">
          View All
        </button>
      </div>

      <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        <div className="overflow-hidden rounded-2xl bg-[#FAFAFA]">
          <img src={foto1} alt="Hotel" className="h-65 w-full object-cover" />

          <div className="p-4">
            <p className="text-[10px] text-[#20AD78]">London NW8 7JT England</p>
            <h3 className="mt-2 text-lg font-medium">Danubius Hotel Regents Park</h3>

            <div className="mt-5 flex items-center justify-between">
              <p className="text-sm">$200 Par Night</p>
              <p className="text-sm">
                <span className="text-[#FF5959]">★★★★</span>
                <span className="text-gray-300">★</span> 4.8
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-[#FAFAFA]">
          <img src={foto2} alt="Hotel" className="h-65 w-full object-cover" />

          <div className="p-4">
            <p className="text-[10px] text-[#20AD78]">London NW8 7JT England</p>
            <h3 className="mt-2 text-lg font-medium">The Resident Soho</h3>

            <div className="mt-5 flex items-center justify-between">
              <p className="text-sm">$200 Par Night</p>
              <p className="text-sm">
                <span className="text-[#FF5959]">★★★★</span>
                <span className="text-gray-300">★</span> 4.8
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-[#FAFAFA]">
          <img src={foto3} alt="Hotel" className="h-65 w-full object-cover" />

          <div className="p-4">
            <p className="text-[10px] text-[#20AD78]">London NW8 7JT England</p>
            <h3 className="mt-2 text-lg font-medium">London Bridge Hotel</h3>

            <div className="mt-5 flex items-center justify-between">
              <p className="text-sm">$200 Par Night</p>
              <p className="text-sm">
                <span className="text-[#FF5959]">★★★★</span>
                <span className="text-gray-300">★</span> 4.8
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Section2;
