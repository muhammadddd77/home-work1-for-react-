import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="footerContainer">
          <div className="footerColumn">
            <h3>Get In Touch</h3>
            <p>the quick fox jumps over the lazy dog</p>

            <div className="social">
              <a href="#">f</a>
              <a href="#">◎</a>
              <a href="#">♥</a>
            </div>
          </div>

          <div className="footerColumn">
            <h3>Company info</h3>
            <a href="#">About Us</a>
            <a href="#">Carrier</a>
            <a href="#">We are hiring</a>
            <a href="#">Blog</a>
          </div>

          <div className="footerColumn">
            <h3>Features</h3>
            <a href="#">Business Marketing</a>
            <a href="#">User Analytic</a>
            <a href="#">Live Chat</a>
            <a href="#">Unlimited Support</a>
          </div>

          <div className="footerColumn">
            <h3>Resources</h3>
            <a href="#">IOS & Android</a>
            <a href="#">Watch a Demo</a>
            <a href="#">Customers</a>
            <a href="#">API</a>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p>Made With Love By Figmaland All Right Reserved</p>
      </div>
    </footer>
  );
}

export default Footer