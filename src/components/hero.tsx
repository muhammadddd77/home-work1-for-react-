import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <>
      <section className="mx-auto flex max-w-6xl items-center justify-between gap-10 px-6 py-16">
        <div className="max-w-xl">
          <p className="mb-2 text-lg text-blue-900">Hi !</p>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-blue-950">
            I’m Muhammad Raul.
            <br />a Front-End Developer
          </h1>

          <p className="max-w-md text-sm leading-relaxed text-gray-700">
            Front-End developer based in Bekasi, Indonesia. I’m coding with a
            clean and beautiful problem-solving mindset.
          </p>
        </div>

        <img
          src={heroImage}
          alt="Front-End Developer"
          className="w-full max-w-sm object-contain"
        />
      </section>
    </>
  );
}
