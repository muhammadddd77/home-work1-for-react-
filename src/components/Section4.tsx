import foto5 from "../assets/images/foto5.png";

function Section4() {
  return (
    <section className="w-full px-6 py-12 md:px-12 lg:px-20 xl:px-24">
      <div className="relative grid min-h-75 overflow-hidden rounded-xl bg-[#FAFAFA] md:grid-cols-[2fr_1fr]">

        <div className="flex flex-col justify-center px-8 py-10 md:px-12 lg:px-16">
          <p className="relative text-[12px] leading-5.5 text-gray-500">
            <span className="absolute -left-6 -top-3 text-3xl font-bold text-[#20AD78]">
              “
            </span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <span className="text-3xl font-bold text-[#20AD78]">”</span>
          </p>

          <h3 className="mt-8 text-lg font-semibold text-[#333333]">
            Alexandr Ivchenko
          </h3>

          <p className="mt-2 text-xs text-gray-500">
            Businessman
          </p>
        </div>

        <div className="min-h-70">
          <img src={foto5} alt="Alexandr Ivchenko" className="h-full w-full object-cover object-top" />
        </div>

        <button className="absolute left-0 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg text-[#20AD78] shadow">
          ‹
        </button>

        <button className="absolute right-0 top-1/2 flex h-8 w-8 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg text-[#20AD78] shadow">
          ›
        </button>

      </div>
    </section>
  );
}

export default Section4;
