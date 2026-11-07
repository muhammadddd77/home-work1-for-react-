import "./download.css";

import apple from "../../assets/apple.png";
import google from "../../assets/google.png";
import amazon from "../../assets/amazon.png";
import windows from "../../assets/windows.png";

function Download() {
  return (
    <section className="download">
      <div className="downloadContainer">
        <h2>Download Our App</h2>

        <p className="downloadDescription">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>

        <div className="downloadButtons">
          <button className="downloadButton">
            <img src={apple} alt="Apple" />
            <div>
              <p>Download on</p>
              <h3>App Store</h3>
            </div>
          </button>

          <button className="downloadButton">
            <img src={google} alt="Google" />
            <div>
              <p>Download on</p>
              <h3>Google Play</h3>
            </div>
          </button>

          <button className="downloadButton">
            <img src={amazon} alt="Amazon" />
            <div>
              <p>Download on</p>
              <h3>Amazon.com</h3>
            </div>
          </button>

          <button className="downloadButton">
            <img src={windows} alt="Windows" />
            <div>
              <p>Download on</p>
              <h3>Windows Store</h3>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Download;
