import toolsImage from "../assets/tools.png";

function Tools() {
  return (
    <section className="bg-slate-100 px-6 py-14">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          All the{" "}
          <span className="underline decoration-orange-500 decoration-4 underline-offset-4">
            tools
          </span>{" "}
          that you need
        </h2>

        <p className="mt-5 text-sm text-slate-700 leading-6">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris.
          <br />
          Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
        </p>

        <img
          src={toolsImage}
          alt="All tools"
          className="w-full max-w-275 h-auto mx-auto mt-5 object-contain"
        />
      </div>
    </section>
  );
}

export default Tools;
