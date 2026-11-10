import featuresImage from "../assets/image copy 6.png";

function Features() {
  return (
    <section className="max-w-7xl mx-auto px-12 py-20 flex items-center justify-between gap-12">
      <div className="w-1/2">
        <h2 className="text-4xl font-bold text-slate-900">
          All the cool{" "}
          <span className="underline decoration-orange-500 decoration-4 underline-offset-4">
            features
          </span>
        </h2>

        <p className="mt-6 text-sm text-slate-800 leading-8">
          Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac.
          In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque
          augue feugiat cras ullamcorper. Ultrices in amet, ullamcorper non
          viverra a, neque orci.
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-3 mt-8 text-blue-600 font-medium text-sm"
        >
          View all the features <span>→</span>
        </a>
      </div>


      <div className="w-1/2">
        <img
          src={featuresImage}
          alt="Cool features"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}

export default Features;
