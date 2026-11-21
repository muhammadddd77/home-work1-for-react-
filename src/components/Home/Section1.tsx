import soup from "../../assets/images/soup.png";
import pepper from "../../assets/images/pepper.png";

function Section1() {
  return (
    <section className="bg-[#202B00] text-white">
      <div className="mx-auto flex max-w-310 justify-between pl-16 pr-16 pt-20 pb-24">

        <div className="w-150">
          <img src={soup} alt="Seafood soup" className="h-106 w-full object-cover"/>

          <h2 className="mt-8 font-serif text-[2.5rem] leading-[1.15]">
            Start to plan
            <br />
            your diet today
          </h2>

          <p className="mt-6 max-w-108 text-sm leading-6 text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Neque congue arcu
          </p>
        </div>

        <div className="w-[24rem] pt-1">
          <p className="max-w-88 text-sm leading-6 text-white/80">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Neque congue arcu
          </p>

          <img src={pepper} alt="Pepper grinders" className="mt-10 h-135 w-full object-cover" />
        </div>
      </div>
    </section>
  )
}

export default Section1;