import React, { useState } from "react";
import Login from "../presentation/pages/Login";
import Register from "../presentation/pages/Register";

const Tesje = () => {
  const h = "ini baru h";
  return (
    <>
      <AppRouter />
      <Login h={h} />
    </>
  );
};

export default Tesje;
