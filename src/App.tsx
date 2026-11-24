import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const Home = lazy(() => import("./components/home/Home"));
const NotFound = lazy(() => import("./components/NotFound"));
const Formik = lazy(() => import("./components/formik/Formik"));
const RHF = lazy(() => import("./components/rhf/RHF"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/formik",
    element: <Formik/>,
  },
  {
    path: "/rhf",
    element: <RHF/>,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;