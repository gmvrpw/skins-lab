import type { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import Index from "./pages/Index";
import Lab from "./pages/Lab";

const App: Component = () => {
  return (
    <Routes>
      <Route path={"/"} component={Index} />
      <Route path={"/lab/*"} component={Lab} />
    </Routes>
  );
};

export default App;
