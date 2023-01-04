import { render } from "solid-js/web";
import { Router } from "@solidjs/router";

import "./index.css";
import App from "./App";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.getElementById("root")!
);
