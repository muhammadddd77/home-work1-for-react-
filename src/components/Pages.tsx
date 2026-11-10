
import pagesImage from "../assets/pages.png";

function Pages() {
  return (
    <section className="max-w-7xl mx-auto px-12 py-20 flex items-center justify-between gap-12">

      <div className="w-1/2">
        <h2 className="text-4xl font-bold text-slate-900 leading-tight">
          An all-in-one app
          <br />
          that makes it easier
        </h2>

        <div className="mt-7 flex flex-col gap-3 text-sm text-slate-800">
          <p>✓ Est et in pharetra magna adipiscing ornare aliquam.</p>
          <p>✓ Tellus arcu sed consequat ac velit ut eu blandit.</p>
          <p>✓ Ullamcorper ornare in et egestas dolor orci.</p>
        </div>

        <a
          href=""
          className="inline-flex items-center gap-3 mt-10 text-blue-600 font-medium"
        >
          Find more about the app <span>→</span>
        </a>
      </div>

      <div className="w-1/2">
        <img
          src={pagesImage}
          alt="All-in-one app"
          className="w-full h-auto object-contain"
        />
      </div>

    </section>
  );
}

export default Pages;
