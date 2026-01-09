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
    button: "more",
  },
  {
    title: "Hatune Miku Cinimonroll",
    picture:
      "https://i.pinimg.com/474x/37/96/e2/3796e2e2e2d116867e555eda310c7f81.jpg?nii=t",
    description: "sanrio sanrio sanrio",
    category: "miku",
    button: "more",
  },
  {
    title: "Hatune Miku birdku",
    picture:
      "https://encrypted-tbn0.gstatic.com/pictures?q=tbn:ANd9GcTUlmrwOtGIwzms3x5GAqyFkX8NIKiTmlUd1g&s",
    description: "birdku birdku birdku",
    category: "miku",
    button: "more",
  },
  {
    title: "HOK no1",
    picture:
      "https://dthezntil550i.cloudfront.net/qz/latest/qz2407251559163930024606430/b99c9cc1-0020-4088-978b-64dbe0c070d0.png",

    description: "hok character",
    category: "dolia",
    button: "more",
  },
  {
    title: "HOK no2",
    picture:
      "https://cdnb.artstation.com/p/assets/pictures/pictures/070/984/595/large/dao-trong-le-doria.jpg?1704182829",

    description: "im on a lose streak",
    category: "dolia",
    button: "more",
  },
  {
    title: "HOK no3",
    picture:
      "https://i1.sndcdn.com/artworks-GNBzyirpdRUtkKaw-yCXqgQ-t240x240.jpg",
    description: "i think i rage quitted the game",
    category: "dolia",
    button: "more",
  },
  {
    title: "HOK no4",
    picture:
      "https://pictures.steamusercontent.com/ugc/2201758194121780179/7B2B7892764DC84774CAFCBD72107B993CADDE09/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    description: "im still on gold 3 after 2 years ...",
    category: "dolia",
    button: "more",
  },
];

const gallery = document.getElementById("imagedes"); //pick it from html

artworks.forEach((item) => {
  //loop through artworks
  const card =
    //create html
    ` <div class="container" data-category="${item.category}">
<div class="picture"> <img 
src="${item.picture}"
/></div>
<div class="title"> ${item.title}
</div>
<div class="description"> <p>${item.description}</p></div>
<button class="bigger">${item.button}</button>
</div>
`;
  gallery.insertAdjacentHTML("beforeend", card); //insert in to gallery (image des div)
});

const buttons = document.querySelectorAll(".tab");
const cardsuh = document.querySelectorAll(".container");


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.category; //in html, used the data-category=""uh . dataset anything that had data- in html is part of dataset BASIXCALLy when clicked finds the category given in buttons (because button.)

    cardsuh.forEach((card) => {
      const cardCategory = card.dataset.category; // category in containers

      if (selectedCategory === "all" || cardCategory === selectedCategory) {  //when category clicked equals to category in container (all has to have its own bc no all label in containers)
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});
const big = document.querySelectorAll(".bigger");
big.forEach((button) => {
  button.addEventListener("click", () => {
    const container = button.closest(".container");
    container.style.display= "flex";
   container.style.width = "800px";
 container.style.height = "800px";
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



// The length data property of an Array instance represents the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length

function getRandomInt(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max) || min > max) { //makesure its a number and an intergetr(whole)
    throw new Error("Invalid range: min must be <= max and both must be integers.");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min; //math.random gives randome decimal between 0 & 1. multiply by (max - min + 1) to give new range bigger tha 0-1 (  return Math.floor(Math.random() * (max - min + 1)) + min; if my minimun wasnt 0)
};

const generate = document.querySelector(".CLICK");


function magic() {
  const greatimage = document.querySelector(".randomimage");
  const numbershaha = getRandomInt(0, artworks.length - 1) // index starts at 0 but .length counts items in the arry and we need index. if we didnt subtract one, the last index would comme as undefimed
  greatimage.src = artworks[numbershaha].picture; //.src for the url stuff and . picture bc its called picture in array (thingy ses it as object not image)
}
generate.addEventListener("click", magic);

document.getElementById("ihatecoding").addEventListener("submit", function (e) {
  e.preventDefault();
  let newworks = {
    title: document.getElementById("tital").value,
    picture: document.getElementById("image").value,
    description: document.getElementById("deez").value,
    button:"more",
  };
  inject(newworks);
  document.getElementById("ihatecoding").reset(); //https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset
});
function inject(newworks) {
  gallery.insertAdjacentHTML(
    "afterbegin",
    `<div class="container">
      <div class="picture"> <img 
src="${newworks.picture}"
/></div>
<div class="title"> ${newworks.title}
</div>
<div class="description"> <p>${newworks.description}</p></div>
<button class="bigger">${newworks.button}</button>

    </div>`
  );
}
//add flex box to imagedes for exapnsion overlapping
//put in to app f