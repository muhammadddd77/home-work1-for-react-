import foto6 from "../assets/images/foto6.png";

function Section5() {
  return (
    <section className="w-full px-6 py-12 md:px-12 lg:px-20 xl:px-24">
      <div className="relative flex min-h-87 items-start overflow-hidden rounded-xl">
        <img src={foto6} alt="Location" className="absolute inset-0 h-full w-full object-cover" />

        <h2 className="absolute left-[15%] top-[22%] text-2xl font-bold tracking-widest text-[#292929] md:text-[28px]">
          United States
        </h2>

        <div className="absolute bottom-5 left-1/2 flex w-[90%] -translate-x-1/2 flex-col items-center gap-5 rounded-xl bg-white px-6 py-6 shadow-lg md:bottom-7 md:flex-row md:justify-between md:px-8 md:py-5">

          <div className="w-full md:w-[50%]">
            <h2 className="text-xl font-semibold text-[#292929]">
              Location of our Hotels
            </h2>

            <p className="mt-3 max-w-87.5 text-[10px] leading-5 text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </p>
          </div>

          <div className="flex w-full items-center gap-2 rounded-full bg-[#F8F8F8] p-1 md:w-[42%]">
            <input type="email" placeholder="Enter your email" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-[11px] outline-none" />

            <button className="rounded-full bg-[#20AD78] px-6 py-3 text-[11px] text-white transition hover:bg-[#168c60]">
              Contact
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Section5;
