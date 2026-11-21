import chef from "../../assets/images/image copy.png";

function Section3() {
  return (
    <section className="relative overflow-hidden bg-[#EEF1E8] text-black">
      <div className="relative mx-auto max-w-6xl px-12 py-12">
        <img
          src={chef}
          alt="Chef cooking food"
          className="block w-full object-contain"
        />

        <div className="absolute right-12 top-20 z-10 w-1/3">
          <h2 className="font-serif text-5xl font-bold leading-none">
            Excellent
            <br />
            cook
          </h2>

          <p className="mt-5 text-xs leading-5 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Purus lorem id penatibus imperdiet. Turpis egestas ultricies
            purus auctor tincidunt lacus nunc.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section3;
