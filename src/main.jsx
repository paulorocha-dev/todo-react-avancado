import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");

createRoot(root).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
