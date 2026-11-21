import abc from "../../assets/images/abc.png";
import cba from "../../assets/images/cba.png";

function Section4() {
  return (
    <section className="bg-white py-16 text-black">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-12">
        <div>
          <div className="relative">
            <img src={abc} alt="Fruit and vegetables" className="aspect-square w-full object-cover"/>
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs text-[#5B6500]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF1E8]">J</span>
            <span>Julie Christie</span>
            <span>·</span>
            <span>October 17, 2021</span>
            <span>·</span>
            <span>3:33 pm</span>
            <span>·</span>
            <span>2 comments</span>
          </div>

          <h2 className="mt-5 border-b-2 border-dotted border-black pb-2 font-serif text-2xl font-bold leading-tight">
            Fruit and vegetables and protection against diseases
          </h2>

          <p className="mt-3 text-xs leading-5 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <button className="mt-5 flex items-center gap-2 text-sm hover:text-[#5B6500]">
            Read More <span className="text-2xl">→</span>
          </button>
        </div>

        <div>
          <div className="relative">
            <img src={cba} alt="Asparagus salad" className="aspect-square w-full object-cover"
            />
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs text-[#5B6500]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF1E8]">D</span>
            <span>Dianne Russell</span>
            <span>·</span>
            <span>October 17, 2021</span>
            <span>·</span>
            <span>3:33 pm</span>
            <span>·</span>
            <span>2 comments</span>
          </div>

          <h2 className="mt-5 border-b-2 border-dotted border-black pb-2 font-serif text-2xl font-bold leading-tight">
            Asparagus Spring Salad with Rocket, Goat's Cheese
          </h2>

          <p className="mt-3 text-xs leading-5 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <button className="mt-5 flex items-center gap-2 text-sm hover:text-[#5B6500]">
            Read More <span className="text-2xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section4;