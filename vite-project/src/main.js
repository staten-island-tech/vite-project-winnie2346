import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));

const artworks = [
  {
    heading: "Hatune Miku Orginal",
    image:
      "https://i.pinimg.com/originals/b7/45/dd/b745dde0ca59f0ffeebee2d9e67af8f7.jpg",
    alt: "insert majig",
    description: "aaa",
  },
  {
    heading: "Hatune Miku Sakura",
    image:
      "https://i0.wp.com/beneaththetangles.com/wp-content/uploads/2022/03/sakura-miku-hatsune-VOCALOID.jpg?resize=786%2C1024&ssl=1",
    alt: "insert majig",
    description: "aaa",
  },
  {
    heading: "Hatune Miku Cinimonroll",
    image:
      "https://i.pinimg.com/474x/37/96/e2/3796e2e2e2d116867e555eda310c7f81.jpg?nii=t",
    alt: "insert majig",
    description: "aaa",
  },
  {
    heading: "Hatune Miku birdku",
    image: "insert thing",
    alt: "insert majig",
    description: "aaa",
  },
];
