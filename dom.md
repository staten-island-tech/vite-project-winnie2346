# 🎵 Lesson: DOM Manipulation in JavaScript

_Building an Album Collection App_

---

## 1. What is the DOM?

The **DOM (Document Object Model)** is like a **map of your webpage** that JavaScript can read and change.

- HTML builds the _structure_ (like LEGO bricks).
- CSS paints them and adds style (like LEGO colors & stickers).
- The DOM is like a **blueprint** that JavaScript can look at and say:

  - “Add another brick here.”
  - “Take that brick away.”
  - “Paint this brick red.”

---

## 2. Selecting Elements in JavaScript

To change something on the page, we first have to **find it**.
Think of it like pointing to a book on a shelf before you can read or replace it.

### Example from our code:

```js
const DOMSelectors = {
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  display: document.getElementById("display"),
};
```

Here’s what’s happening:

- `document.getElementById("title")` → points to the album name input box.
- `document.getElementById("artist")` → points to the artist input box.
- `document.getElementById("url")` → points to the image URL input box.
- `document.getElementById("display")` → points to the empty display section where albums will go.

📌 **Analogy**: Imagine the page is a big school library. `getElementById` is like asking the librarian:

> “Where is the book with ID ‘title’?”
> The librarian points right to it.

### Other selectors you might use:

```js
document.querySelector(".btn"); // selects first element with class "btn"
document.querySelectorAll(".btn"); // selects ALL buttons with class "btn"
```

---

## 3. Event Listeners

An **event listener** is like telling your page:

> “When something happens, do this!”

Some common events:

- `click` → when a button is clicked
- `submit` → when a form is submitted
- `mouseover` → when you hover your mouse

### Example from our code:

```js
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // stops page from refreshing
  let album = {
    title: document.getElementById("title").value,
    artist: document.getElementById("artist").value,
    url: document.getElementById("url").value,
  };
  inject(album); // add to the page
  clearFields(); // reset form inputs
});
```

Step by step:

1. **Listen** to the form for a “submit” event.
2. **Stop** the browser’s default behavior (`e.preventDefault()`) — normally a form reloads the page.
3. **Grab** the values typed in by the user.
4. **Send** them to our `inject` function to create a new album card.
5. **Clear** the form fields for the next entry.

📌 **Analogy**: Think of it like pressing the “Play” button on a music player.
The button doesn’t play music by itself — you need to tell it, _“When pressed, play this song.”_

---

## 4. Injecting into the DOM

This is where the magic happens — **we add new HTML elements with JavaScript**.

### Our function:

```js
function inject(album) {
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="display-card">
      <img class="display-img" src="${album.url}"/>
      <h2 class="display-artist">${album.artist}</h2>
      <h3 class="display-album">${album.title}</h3>
      <button class="remove btn">Remove Album</button>
    </div>`
  );
}
```

### What’s happening:

- `insertAdjacentHTML("afterbegin", "...")` means:

  > “Take this HTML and stick it at the **top** of the display section.”

- The **template string** (with backticks `` ` ``) lets us insert variables:

  - `${album.url}` → puts in the picture.
  - `${album.artist}` → puts in the artist’s name.
  - `${album.title}` → puts in the album name.

📌 **Analogy**: Think of the `display` section as your **scrapbook**.
Every time you inject, you’re gluing a new photo and caption into it.

---

## 5. Removing Items

We also have a remove button:

```js
function removeAlbum(event) {
  event.target.parentElement.remove();
}
```

- `event.target` is the button that got clicked.
- `.parentElement` is the card that holds the button.
- `.remove()` deletes that whole card.

📌 **Analogy**: Like pulling a sticky note off your fridge — gone instantly.

---

## 6. Extra Examples

### Example A: Change the background

```js
document.querySelector("h1").style.color = "blue";
```

👉 This changes the first `<h1>` text color to blue.

---

### Example B: Add a new paragraph

```js
const newP = document.createElement("p");
newP.textContent = "This is a new paragraph!";
document.body.appendChild(newP);
```

👉 Creates a new `<p>` tag and sticks it at the end of the body.

---

### Example C: Button that changes text

```js
document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector("h1").textContent = "You clicked the button!";
});
```

---

## 7. Wrap-Up

- **Selecting elements** = pointing at things on the page.
- **Event listeners** = telling the page what to do when something happens.
- **Injecting HTML** = gluing new content into your scrapbook (the DOM).
- **Removing** = tearing a card out.

Together, these let us **make webpages interactive** 🎉.

---
