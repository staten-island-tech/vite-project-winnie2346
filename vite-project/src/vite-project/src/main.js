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
const filterbuttons = document.querySelectorAll(`.tab`);
// use event listeners ^
const artworks = [
  {
    title: "Hatune Miku Orginal",
    image:
      "https://i.pinimg.com/originals/b7/45/dd/b745dde0ca59f0ffeebee2d9e67af8f7.jpg",
    alt: "ogku",
    description: "miku miku miku",
    category: "miku",
  },
  {
    title: "Hatune Miku Sakura",
    image:
      "https://i0.wp.com/beneaththetangles.com/wp-content/uploads/2022/03/sakura-miku-hatsune-VOCALOID.jpg?resize=786%2C1024&ssl=1",
    alt: "skuraku",
    description: "pinku pinku pinku",
    category: "miku",
  },
  {
    title: "Hatune Miku Cinimonroll",
    image:
      "https://i.pinimg.com/474x/37/96/e2/3796e2e2e2d116867e555eda310c7f81.jpg?nii=t",
    alt: "rollku",
    description: "sanrio sanrio sanrio",
    category: "miku",
  },
  {
    title: "Hatune Miku birdku",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUlmrwOtGIwzms3x5GAqyFkX8NIKiTmlUd1g&s",
    alt: "birdku",
    description: "birdku birdku birdku",
    category: "miku",
  },
  {
    title: "HOK no1",
    image:
      "https://dthezntil550i.cloudfront.net/qz/latest/qz2407251559163930024606430/b99c9cc1-0020-4088-978b-64dbe0c070d0.png",
    alt: "dolia #1 fan",
    description: "hok character",
    category: "dolia",
  },
  {
    title: "HOK no2",
    image:
      "https://cdnb.artstation.com/p/assets/images/images/070/984/595/large/dao-trong-le-doria.jpg?1704182829",
    alt: "grr grr grr",
    description: "im on a lose streak",
    category: "dolia",
  },
  {
    title: "HOK no3",
    image:
      "https://i1.sndcdn.com/artworks-GNBzyirpdRUtkKaw-yCXqgQ-t240x240.jpg",
    alt: "peak",
    description: "i think i rage quitted the game",
    category: "dolia",
  },
  {
    title: "HOK no4",
    image:
      "https://images.steamusercontent.com/ugc/2201758194121780179/7B2B7892764DC84774CAFCBD72107B993CADDE09/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    alt: "OMG ITS DOLIA",
    description: "im still on gold 3 after 2 years ...",
    category: "dolia",
  },
];

const container = document.querySelector(".img+des");
artworks.forEach((item) => {
  container.insertAdjacentHTML("beforeend", ``);
});
