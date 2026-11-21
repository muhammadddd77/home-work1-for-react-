import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./pages/Layout";
import Loading from "./pages/Loading";
import CrudById from "./components/Crud/CrudById";

const BigHome = lazy(() => import("./components/Home/BigHome"));
const BigMenu = lazy(() => import("./components/Menu/BigMenu"));
const BigContact = lazy(() => import("./components/Contact/BigContact"));
const BigAbout = lazy(() => import("./components/About/BigAbout"));
const Reservations = lazy(() => import("./pages/Reservations"));
const BigPortfolio = lazy(() => import("./components/Portfolio/BigPortfolio"));
const Crud = lazy(() => import("./components/Crud/Crud"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
  {
    path: "/crud",
    element: <Crud />,
  },
  {
    path: "/crud/:id",
    element: <CrudById />,
  },
  {
    path: "*",
    element: <NotFound />,
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
