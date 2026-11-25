import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from "./App";
import Info from "./pages/Info";
import HomePage from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/info/:id",
    element: <Info />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

function Home() {
  return <RouterProvider router={router} />;
}

export default Home;
