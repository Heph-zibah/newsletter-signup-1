import React from "react";
// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Newsletter from "./components/Newsletter";
import Success from "./components/Success";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Newsletter />,
  },
  {
    path: "/success/:email",
    element: <Success />,
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
