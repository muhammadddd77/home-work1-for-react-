import sendpay from "../assets/sendpay.png";
import ecommerce from "../assets/ecommerce.png";
import beatslearning from "../assets/beatslearning.png";

export default function Section2() {
  return (
    <section id="portfolio" className="py-16">
      <h2 className="mb-10 text-center text-2xl text-blue-900">
        My <span className="font-bold">Portfolio</span>
      </h2>

      <div className="mx-auto flex w-[1000px] justify-between">
        <img src={sendpay} alt="Sendpay" className="w-[300px]" />

        <img src={ecommerce} alt="E-Commerce" className="w-[300px]" />

        <img src={beatslearning} alt="BeatsLearning" className="w-[300px]" />
      </div>
    </section>
  );
}
