import reviewsImage from "../assets/image copy 5.png";

function Reviews() {
  return (
    <section className="py-16 px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-10">
          What everyone says
        </h2>
        <img src={reviewsImage} alt="Student reviews" className="w-full h-auto object-contain" />
      </div>
    </section>
  );
}

export default Reviews;