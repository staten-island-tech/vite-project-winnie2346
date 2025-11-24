Vite-Project
Michael Whalen
•
Oct 23 (Edited Nov 12)
Learning Progress
•
20 points
Repo: https://classroom.github.com/a/dBnbv67p
SEE ME BEFORE STARTING

NPM create vite@latest
Vanilla
javascript
no
no
cd "app"

npm i
npm run dev
Advanced Vite-Project Options 2025.pdf
PDF

Beginner Vite-Project Options 2025.pdf
PDF

explain.md
Text

Intermediate Vite-Project Options 2025.pdf
PDF

Vite-Project Options 2025.pdf
PDF

style.7z
Unknown

Your work
Assigned
Private comments
Class comments

## 🎨 Lesson: Using Custom Properties (CSS Variables) and JS to Create Themes

### 🧠 Learning Objectives

By the end of this lesson, students will be able to:

- Define and use **CSS custom properties** (variables).
- Explain how to reference and override them in different contexts.
- Use **JavaScript** to dynamically change CSS variables by toggling class names.
- Create a simple **light/dark or warm/cool theme switcher** for a webpage.

---

## 🧩 1. What Are CSS Custom Properties?

CSS custom properties—also called **CSS variables**—let you store reusable values (like colors, fonts, or sizes) under a custom name.

They start with **two dashes (`--`)** and are defined inside a selector, usually `:root`.

```css
:root {
  --primary-color: #135cc5;
  --secondary-color: #2998ff;
}
```

You use them anywhere in your CSS with the `var()` function:

```css
button {
  background-color: var(--primary-color);
  color: white;
}
```

Think of it like using a **nickname** for your color — if you ever change `--primary-color`, every element using it will update automatically.

---

## 🌈 2. Examining the Provided Files

### `index.html`

```html
<body class="cool">
  <h1 class="hero">CSS Custom Properties</h1>
  <div class="main">
    <button class="btn">Click Me</button>
  </div>
</body>
```

- The `body` starts with the class `cool`.
- There’s a heading and a button — this will be the theme toggle button.

---

### `style.css` (key parts)

```css
:root {
  --light-blue: #2998ff;
  --dark-blue: #135cc5;
  --light-red: #f87171;
  --dark-red: #dc2626;

  /* Intentions */
  --primary: var(--light-blue);
  --secondary: var(--dark-blue);
}

.cool {
  --primary: var(--light-blue);
  --secondary: var(--dark-blue);
}

.warm {
  --primary: var(--light-red);
  --secondary: var(--dark-red);
}

.hero {
  background-color: var(--primary);
}

.main {
  background-color: var(--secondary);
  height: 90vh;
}
```

### What’s Happening:

- The `:root` defines **default color variables**.
- `.cool` and `.warm` **override** the same variables with different color sets.
- Elements like `.hero` and `.main` use those variables to color the background.

So depending on which class (`cool` or `warm`) is on the `<body>`, the entire site changes theme!

---

## ⚙️ 3. How JavaScript Makes It Interactive

### `index.js`

```js
document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
```

### Step-by-Step Explanation:

1. `document.querySelector(".btn")` → grabs the button element.
2. `.addEventListener("click", ...)` → listens for a **click** on that button.
3. Inside the function:

   - It checks if the `body` has the class `"cool"`.
   - If yes → it removes `"cool"` and adds `"warm"`.
   - If not → it does the reverse.

When the class changes, the **CSS variables defined under that class** automatically change — so the colors update instantly.

---

## 🔁 4. Visual Analogy

Imagine `:root` is your **default paint palette**.
Adding `.warm` or `.cool` is like switching to a **different palette** — but your paintbrush (the `var()` function) still uses the same color names (`--primary`, `--secondary`).
You just changed what “primary” and “secondary” mean!

---

## 🧠 5. Key Takeaways

| Concept                  | Description                                         | Example                         |
| ------------------------ | --------------------------------------------------- | ------------------------------- |
| **Custom property**      | Reusable variable for styling                       | `--primary: #135cc5;`           |
| **Accessing a variable** | Using its name with `var()`                         | `color: var(--primary);`        |
| **Overriding**           | Redefine variables inside another class or selector | `.warm { --primary: red; }`     |
| **JavaScript toggle**    | Changes class names dynamically                     | `body.classList.toggle("warm")` |

---

## 🧪 6. Practice Ideas

**Activity 1 – Add a Dark Mode**

- Create `.dark` and `.light` classes.
- Use CSS variables for background and text color.
- Add a “Switch Mode” button using the same JS pattern.

**Activity 2 – Add More Themes**

- Add a `.forest` theme (`green` shades) or `.ocean` theme (`teal` shades).
- Modify the JavaScript to rotate between all themes.

**Custom Font Sizes**

- Create variables like `--base-font` or `--heading-font`.
- Change them in `.large-text` or `.small-text` modes.

---
