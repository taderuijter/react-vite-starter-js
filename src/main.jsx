// Import Libraries
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Global styling
import "@/style.css";

// React Views
import Home from "@/views/Home";
import About from "@/views/About";
import NotFound from "@/views/NotFound";

// React Router Paths
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
