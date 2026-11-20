
import foto4 from "../assets/images/foto4.png";

function Section3() {
  return (
    <section className="w-full px-6 py-12 md:px-12 lg:px-20 xl:px-24">
      <div className="grid min-h-84 overflow-hidden rounded-xl bg-[#F3FAF7] md:grid-cols-2">
        <div className="min-h-70">
          <img src={foto4} alt="Our History" className="h-full w-full object-cover"/>
        </div>

        <div className="flex flex-col justify-center px-8 py-10 md:px-10 lg:px-14">
          <h2 className="text-2xl font-semibold text-black md:text-[28px]">
            Discover our History
          </h2>

          <p className="mt-4 text-[12px] leading-4.75 text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>

          <p className="mt-4 text-[12px] leading-4.75 text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <button className="mt-7 w-fit rounded-full bg-[#20AD78] px-6 py-3 text-[11px] font-medium text-white transition hover:bg-[#168c60]">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section3;
