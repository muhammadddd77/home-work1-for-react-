import "./hero.css";
import phone from "../../assets/image.png";

function Hero() {
  return (
    <section className="hero">
      <div className="heroText">
        <h1>
          Financial <br />
          Assistance With <br />
          True Purpose
        </h1>

        <p>
          We know how large objects will act,
          <br />
          but things on a small scale.
        </p>
      </div>

      <img src={phone} alt="Phone" />
    </section>
  );
}

export default Hero;