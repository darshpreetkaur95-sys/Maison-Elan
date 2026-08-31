# Maison Élan

A clothing boutique website — considered essentials, presented simply.
Built with plain HTML, CSS, and JavaScript (no frameworks or build tools required).

## Pages

- `index.html` — Homepage with hero and featured products
- `products.html` — Full product grid with category filtering
- `contact.html` — Contact details and a working front-end form

## Project structure

```
maison-elan/
├── index.html
├── products.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── products.js   (product data + rendering)
│   └── main.js        (nav toggle + contact form)
├── images/             (add your own product photos here)
└── README.md
```

## Running it locally

No build step needed — just open `index.html` in a browser.
For the best experience (so relative paths behave correctly), serve it with a
simple local server, for example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Adding your own product photos

Drop images into the `images/` folder and update the `image` path for each
product inside `js/products.js`. If an image fails to load, the card falls
back to a plain background so the layout never breaks.

## Deploying for free with GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under "Source", select the `main` branch and `/ (root)` folder
4. Save — GitHub will give you a live URL in a minute or two

## Tech used

- HTML5
- CSS3 (custom properties, CSS Grid, Flexbox)
- Vanilla JavaScript (no libraries)
- Google Fonts: Fraunces (display) and Inter (body)
