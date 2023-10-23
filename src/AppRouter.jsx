import React from "react";
import { useRoutes } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Categories from "./pages/Categories";
import DetailDestination from "./pages/DetailDestination";
import Dashboard from "./pages/Dashboard";
import Banner from "./pages/Banner";
import User from "./pages/User";
import DashCategories from "./pages/DashCategories";
import DashPromo from "./pages/DashPromo";
import DashDestination from "./pages/DashDestination";
import DashBanner from "./pages/DashBanner";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/destination", element: <Destination /> },
  { path: "/categories", element: <Categories /> },
  { path: "/detaildestination/:userId", element: <DetailDestination /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "destination", element: <DashDestination /> },
      { path: "categories", element: <DashCategories /> },
      { path: "banner", element: <DashBanner /> },
      { path: "promo", element: <DashPromo /> },
      { path: "user", element: <User /> },
    ],
  },
];

const AppRouter = () => {
  const element = useRoutes(routes);
  return element;
};

export default AppRouter;
