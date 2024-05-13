import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import About from "./Pages/About";
import Store from "./Pages/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  { path: "/", element: <Store /> },
  { path: "/about", element: <About /> },
  { path: "/home", element: <Home /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
