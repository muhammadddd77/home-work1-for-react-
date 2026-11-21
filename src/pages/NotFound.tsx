import { Link } from "react-router";

function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-[#202B00] px-5 text-center text-white">
      <h1 className="font-serif text-8xl font-bold">404</h1>

      <h2 className="mt-4 font-serif text-3xl">
        Page Not Found
      </h2>

      <p className="mt-3 text-sm text-gray-300">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-8 border border-white px-8 py-3 transition hover:bg-white hover:text-[#202B00]"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;