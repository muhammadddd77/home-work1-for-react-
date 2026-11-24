import { Link } from "react-router";

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-violet-600">404</h1>

      <p className="mt-4 text-xl">Page Not Found</p>

      <Link to="/" className="mt-6 rounded-lg bg-violet-600 px-6 py-3 text-white">
        Back Home
      </Link>
    </div>
  );
}

export default NotFound;