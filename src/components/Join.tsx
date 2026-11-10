import joinImage from "../assets/image.png";

function Join() {
  return (
    <section className="relative min-h-130 bg-[#FACC15] flex items-center justify-center overflow-hidden">
      <img
        src={joinImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 text-center px-6">
        <h2 className="text-4xl font-bold text-slate-900">
          Join a world of learning
        </h2>

        <p className="mt-6 text-sm text-slate-900 leading-7">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
          <br />
          Risus elit et fringilla habitant ut facilisi.
        </p>

        <button className="mt-6 bg-orange-600 text-white font-semibold px-9 py-3 rounded-md transition">
          Sign Up Now
        </button>
      </div>
    </section>
  );
}

export default Join;
