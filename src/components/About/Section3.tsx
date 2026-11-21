import bg6 from "../../assets/images/bg6.png";

function Section3() {
  return (
    <section className="relative flex h-84 items-center justify-center overflow-hidden text-white">
      <img src={bg6} alt="Delicious food" className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#202B00]/60"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="font-serif text-4xl font-bold">
          It looks delicious
        </h2>

        <p className="mt-2 text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-full border border-white">
          <span className="ml-1 text-2xl">▶</span>
        </div>
      </div>
    </section>
  );
}

export default Section3;