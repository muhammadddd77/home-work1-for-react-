
import studentImage from "../assets/student.png";

function Students() {
  return (
    <section className="max-w-7xl mx-auto px-12 py-20 flex items-center justify-between gap-12">
      <div className="w-1/2">
        <img
          src={studentImage}
          alt="International students and teachers"
          className="w-full max-w-125 h-auto object-contain"
        />
      </div>

      <div className="w-1/2 relative">
        <h2 className="text-4xl font-bold text-slate-900 leading-tight">
          Meet international
          <br />
          students & teachers
        </h2>

        <p className="mt-6 text-sm text-slate-800 leading-7">
          Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
          senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
          facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
          urna, faucibus aenean lorem faucibus integer.
        </p>

        <a href="" className="inline-flex items-center gap-3 mt-8 text-blue-600 text-sm">
          Explore teachers and students
        </a>

      </div>
    </section>
  );
}

export default Students;
