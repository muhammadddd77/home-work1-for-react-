import "./great.css";
import doctor from "../../assets/image copy.png";

function Great() {
  return (
    <section className="great">
      <div className="greatContainer">
        <h2>What Clients Say</h2>

        <p className="greatDescription">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>

        <div className="greatCard">
          <img src={doctor} alt="Regina Miles" />

          <p>
            Slate helps you see how many more days you need
            <br />
            to work to reach your financial goal for the month and year.
          </p>

          <span>⭐ ⭐ ⭐ ⭐ ☆</span>

          <h3>Regina Miles</h3>

          <p className="greatRole">Designer</p>
        </div>
      </div>
    </section>
  );
}

export default Great;
