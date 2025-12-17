import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo"  />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla"  logo" />
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
    title: "Hatune Miku Sakura",
    picture:
      "https://i0.wp.com/beneaththetangles.com/wp-content/uploads/2022/03/sakura-miku-hatsune-VOCALOID.jpg?resize=786%2C1024&ssl=1",

    description: "pinku pinku pinku",
    category: "miku",
  },
  {
    title: "Hatune Miku Cinimonroll",
    picture:
      "https://i.pinimg.com/474x/37/96/e2/3796e2e2e2d116867e555eda310c7f81.jpg?nii=t",
    description: "sanrio sanrio sanrio",
    category: "miku",
  },
  {
    title: "Hatune Miku birdku",
    picture:
      "https://encrypted-tbn0.gstatic.com/pictures?q=tbn:ANd9GcTUlmrwOtGIwzms3x5GAqyFkX8NIKiTmlUd1g&s",
    description: "birdku birdku birdku",
    category: "miku",
  },
  {
    title: "HOK no1",
    picture:
      "https://dthezntil550i.cloudfront.net/qz/latest/qz2407251559163930024606430/b99c9cc1-0020-4088-978b-64dbe0c070d0.png",

    description: "hok character",
    category: "dolia",
  },
  {
    title: "HOK no2",
    picture:
      "https://cdnb.artstation.com/p/assets/pictures/pictures/070/984/595/large/dao-trong-le-doria.jpg?1704182829",

    description: "im on a lose streak",
    category: "dolia",
  },
  {
    title: "HOK no3",
    picture:
      "https://i1.sndcdn.com/artworks-GNBzyirpdRUtkKaw-yCXqgQ-t240x240.jpg",
    description: "i think i rage quitted the game",
    category: "dolia",
  },
  {
    title: "HOK no4",
    picture:
      "https://pictures.steamusercontent.com/ugc/2201758194121780179/7B2B7892764DC84774CAFCBD72107B993CADDE09/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    description: "im still on gold 3 after 2 years ...",
    category: "dolia",
  },
];

const gallery = document.getElementById("imagedes"); //pick it from html

artworks.forEach((item) => {
  //loop through artworks
  const cry =
    //create html
    ` <div class="container">
<div class="picture"> <img 
src="${item.picture}"
/></div>
<div class="title"> ${item.title}
</div>
<div class="description"> <p>${item.description}</p></div>
</div>
`;
  gallery.insertAdjacentHTML("beforeend", cry); //insert in to gallery (image des div)
});

//  <button class="tab" id="Alls">All</button>
//       <button class="tab" id="teal">Miku</button>
//       <button class="tab" id=" bestgirl">Dolia</button>

const filterButtons = {
  all: document.querySelector('[data-category="all"]'),
  miku: document.querySelector('[data-category="miku"]'),
  dolia: document.querySelector('[data-category="dolia"]'),
};
const cards = document.querySelectorAll(".container");
Object.values(filterButtons).forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedCategory = e.target.textContent.toLowerCase(); //take text of clicked element and coverts to lowercase so no worries bout capitilization
    cards.forEach((card) => {
      const cardCategory = card.getAttribute("category");
      if (selectedCategory === "all" || cardCategory === selectedCategory) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});
