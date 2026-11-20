import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-7xl font-bold text-[#20AD78]">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500">
        Sorry, this page was not found.
      </p>

      <Link to="/" className="mt-6 rounded-full bg-[#20AD78] px-6 py-3 text-white">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound