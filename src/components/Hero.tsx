import heroImage from "../assets/image copy.png";
import logosImage from "../assets/logos.png";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-12 pt-12">
      <div className="flex items-center justify-between gap-10">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold text-slate-900 leading-tight">Teach students<br />worldwide</h1>

          <p className="mt-6 text-base text-slate-700 leading-8">
            Amet nunc diam orci duis ut sit diam arcu, nec.
            <br />
            Eleifend proin massa tincidunt viverra lectus pulvinar.
            <br />
            Nunc ipsum est pellentesque turpis ultricies.
          </p>

          <div className="flex items-center gap-7 mt-6">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-md">Sign Up Now</button>

            <button className="text-blue-600 text-sm">View Demo</button>
          </div>
        </div>

        <div className="w-1/2 flex justify-end">
          <img
            src={heroImage}
            alt="Students"
            className="w-full max-w-125 h-105 object-contain"
          />
        </div>
      </div>

      <div className="mt-10">
        <img
          src={logosImage}
          alt="Company logos"
          className="w-95 h-auto object-contain"
        />
      </div>
    </section>
  );
}

export default Hero;
