import "./style.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h2>Well Dipti is bit lazy so website work is delayed :)</h2>
    <h4>Thanks for visiting</h4>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
