import Card from "../card/card";
import "./features.css";

function Features() {
  return (
    <section className="features">
      <h2>Better Strategy With Quality Business</h2>
      <p>Problems trying to resolve the conflict between<br /> the two major realms of Classical physics: Newtonian mechanics</p>

      <div className="cards">
        <Card title="Investment Trading" description="the quick fox jumps over the lazy dog" />

        <Card title="Support On Raising Funds" description="the quick fox jumps over the lazy dog" />

        <Card title="Financial Analysis" description="the quick fox jumps over the lazy dog" />

        <Card title="Taxation Planning" description="the quick fox jumps over the lazy dog" />

        <Card title="Save money and time" description="the quick fox jumps over the lazy dog" />

        <Card title="Outsourced Consulting Business" description="the quick fox jumps over the lazy dog" />
      </div>
    </section>
  );
}

export default Features;