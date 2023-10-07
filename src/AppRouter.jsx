import React from "react";
import { useRoutes } from "react-router";
import Login from "./presentation/pages/Login";
import Register from "./presentation/pages/Register";
import Home from "./presentation/pages/Home";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];

const AppRouter = () => {
  const element = useRoutes(routes);
  return element;
};

export default AppRouter;
