import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cart } from "./components/Cart/Cart.jsx";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage.jsx";
import { RestaurantMenu } from "./components/RestaurantMenu/RestaurantMenu.jsx";
import { FoodContextProvider } from "./context/FoodContext.jsx";
import { ShoppingCardContextProvider } from "./context/ShoppingCardContext.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";

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
  {
    path: "/restaurants/:resId",
    element: <RestaurantMenu />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FoodContextProvider>
      <UserContextProvider>
        <ShoppingCardContextProvider>
          <RouterProvider router={appRoutes} />
        </ShoppingCardContextProvider>
      </UserContextProvider>
    </FoodContextProvider>
  </React.StrictMode>
);
