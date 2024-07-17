import React from "react";
import { Route, Routes } from "react-router-dom";
import { allRoutes } from "./routes";

const AllRoutes = () => {
  return (
    <Routes>
      {allRoutes.map((route) => (
        <Route key={route.id} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
};

export default AllRoutes;
