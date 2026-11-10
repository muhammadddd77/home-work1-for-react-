import img1 from "../assets/image copy 2.png";
import img2 from "../assets/image copy 3.png";
import img3 from "../assets/image copy 4.png";

function Stats() {
  return (
    <section className="max-w-6xl mx-auto py-10 px-6 bg-[#0F172A]">
      <div className="grid grid-cols-3 gap-10 place-items-center">
        <img src={img1} alt="" className="w-full max-w-58 h-auto" />
        <img src={img2} alt="" className="w-full max-w-58 h-auto" />
        <img src={img3} alt="" className="w-full max-w-58 h-auto" />
      </div>
    </section>
)
}

export default Stats;