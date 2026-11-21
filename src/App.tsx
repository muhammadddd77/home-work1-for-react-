import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./pages/Layout";
import Loading from "./pages/Loading";

const BigHome = lazy(() => import("./components/Home/BigHome"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BigMenu = lazy(() => import("./components/Menu/BigMenu"));
const BigContact = lazy(() => import("./components/Contact/BigContact"));
const BigAbout = lazy(() => import("./components/About/BigAbout"));
const Reservations = lazy(() => import("./pages/Reservations"));
const BigPortfolio = lazy(() => import("./components/Portfolio/BigPortfolio"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <BigHome />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/menu",
    element: <BigMenu />,
  },
  {
    path: "/contact",
    element: <BigContact />,
  },
  {
    path: "/about",
    element: <BigAbout />,
  },
  {
    path: "/portfolio",
    element: <BigPortfolio />,
  },
  {
    path: "/reservations",
    element: <Reservations />,
  },
]);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
