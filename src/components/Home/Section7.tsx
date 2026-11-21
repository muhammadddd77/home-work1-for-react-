import image from "../../assets/images/image copy 2.png";

function Section7() {
  return (
    <section className="bg-white py-16 text-black">
      <div className="relative mx-auto max-w-6xl px-12">
        <div className="relative">
          <img
            src={image} alt="John Doe" className="h-auto w-full" />

          <h2 className="absolute left-12 top-24 w-3/4 font-serif text-3xl font-bold leading-tight">
            “ Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Purus lorem id penatibus imperdiet. Turpis egestas
            ultricies purus Lorem ipsum dolor sit amet.
          </h2>

          <div className="absolute bottom-32 left-1/4">
            <h3 className="font-serif text-lg font-bold">
              John Doe
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              Blogger
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section7;