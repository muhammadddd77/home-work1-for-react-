import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";
import uiux from "../assets/uiux.png";

export default function Section1() {
  return (
    <section id="passions" className="py-12">
      <h2 className="mb-10 text-center text-2xl text-blue-800">
        Additional <span className="font-bold">passions</span>
      </h2>

      <div className="mx-auto flex w-[1000px] justify-between">
        <div className="w-[200px] rounded-xl bg-white p-4 text-center shadow-lg">
          <img
            src={frontend}
            alt="Front-End"
            className="h-24 w-full object-contain"
          />

          <h3 className="mt-2 text-lg">
            <span className="font-bold">Front-End</span> Developer
          </h3>

          <p className="text-sm">(Sass, Bootstrap, Tailwind)</p>
        </div>

        <div className="w-[200px] rounded-xl bg-white p-4 text-center shadow-lg">
          <img
            src={backend}
            alt="Back-End"
            className="h-24 w-full object-contain"
          />

          <h3 className="mt-2 text-lg">
            <span className="font-bold">Back-End</span> Developer
          </h3>

          <p className="text-sm">(NodeJS, Laravel, CodeIgniter)</p>
        </div>

        <div className="w-[200px] rounded-xl bg-white p-4 text-center shadow-lg">
          <img src={uiux} alt="UI/UX" className="h-24 w-full object-contain" />

          <h3 className="mt-2 text-lg">
            <span className="font-bold">UI/UX</span> Designer
          </h3>

          <p className="text-sm">(Figma, Zeplin, Adobe XD)</p>
        </div>
      </div>
    </section>
  );
}
