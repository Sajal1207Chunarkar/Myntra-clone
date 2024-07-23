import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import CartPage from "./Pages/CartPage.jsx";
import ErrorsPage from "./Pages/ErrorsPage.jsx";
import store from './store/store.js'
import {Provider} from "react-redux";
const routes = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <HomePage /> },
  { path: "/cart", element: <CartPage /> },
  { path: "*", element: <ErrorsPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
    </Provider>
  </React.StrictMode>
);
