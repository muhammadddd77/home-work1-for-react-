import "./branches.css";

import world from "../../assets/world.png";
import person from "../../assets/person.png";

function Branches() {
  return (
    <section className="great">
      <div className="greatTop">
        <div className="greatContainer">
          <div className="greatText">
            <h2>We Have Branches All Over The World</h2>

            <p>
              The gradual accumulation of information about atomic and
              small-scale behaviour during the first quarter of the 20th
              century, which gave some indications about how small things do
              behave, produced an increasing confusion.
            </p>
          </div>

          <img className="world" src={world} alt="World map" />
        </div>
      </div>

      <div className="greatBottom">
        <div className="appointmentCard">
          <div className="person">
            <img src={person} alt="Person" />
          </div>

          <div className="appointmentForm">
            <h3>Book Appointment</h3>

            <label>Name *</label>
            <input type="text" placeholder="Full Name *" />

            <label>Email Address *</label>
            <input type="email" placeholder="example@gmail.com" />

            <label>Department *</label>
            <select>
              <option>Please Select</option>
              <option>Department 1</option>
              <option>Department 2</option>
            </select>

            <label>Time *</label>
            <select>
              <option>4:00 Available</option>
              <option>5:00 Available</option>
              <option>6:00 Available</option>
            </select>

            <button>Book Appointment</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Branches;