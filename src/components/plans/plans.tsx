import "./plans.css";

function Plans() {
  return (
    <section className="plans">
      <h2>Pricing</h2>
      <p>Problems trying to resolve the conflict between<br />the two major realms of Classical physics: Newtonian mechanics</p>

      <div className="plansCards">
        <div className="planCard">
          <div>
            <h3>FREE</h3>
            <p>
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way</p>
          </div>

          <div>
            <h2>0 <span>$</span></h2>
            <p>Per Month</p>
            <button>Try for free</button>
          </div>
        </div>

        <div className="planCard">
          <div>
            <h3>STANDARD</h3>
            <p>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way</p>
          </div>

          <div>
            <h2>19 <span>$</span></h2>
            <p>Per Month</p>
            <button>Try for free</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plans;
