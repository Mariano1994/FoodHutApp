import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cart } from "./components/Cart/Cart.jsx";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage.jsx";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorMessage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  // {
  //   path: "*",
  //   element: <ErrorMessage />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRoutes} />
  </React.StrictMode>
);
