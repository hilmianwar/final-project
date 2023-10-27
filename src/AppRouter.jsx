import React from "react";
import { useRoutes } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Categories from "./pages/Categories";
import DetailDestination from "./pages/DetailDestination";
import Dashboard from "./pages/Dashboard";
import User from "./pages/DashUser";
import DashCategories from "./pages/DashCategories";
import DashPromo from "./pages/DashPromo";
import DashDestination from "./pages/DashDestination";
import DashBanner from "./pages/DashBanner";
import DetailBanner from "./pages/DetailBanner";
import DetailCategories from "./pages/DetailCategories";
import DetailPromo from "./pages/DetailPromo";
import DestinationByCategories from "./pages/DestinationByCategories";
import DashDashboard from "./pages/DashDashboard";
import Profil from "./pages/Profil";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/profil", element: <Profil /> },
  { path: "/destination", element: <Destination /> },
  { path: "/categories", element: <Categories /> },
  { path: "/detaildestination/:userId", element: <DetailDestination /> },
  { path: "/detailpromo/:userId", element: <DetailPromo /> },
  { path: "/detailcategories/:userId", element: <DetailCategories /> },
  {
    path: "/destinationbycategories/:userId",
    element: <DestinationByCategories />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "", element: <DashDashboard /> },
      { path: "destination", element: <DashDestination /> },
      { path: "categories", element: <DashCategories /> },
      { path: "banner", element: <DashBanner /> },
      { path: "promo", element: <DashPromo /> },
      { path: "user", element: <User /> },
      { path: "destination/detail/:userId", element: <DetailDestination /> },
      { path: "banner/detail/:userId", element: <DetailBanner /> },
      { path: "categories/detail/:userId", element: <DetailCategories /> },
      { path: "promo/detail/:userId", element: <DetailPromo /> },
    ],
  },
];

const AppRouter = () => {
  const element = useRoutes(routes);
  return element;
};

export default AppRouter;
