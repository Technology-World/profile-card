# Profile Card

A semantic, accessible, and responsive profile card built with plain HTML, CSS, and JavaScript — no frameworks or dependencies.

---

## Features

- 🖼 Avatar with gradient ring
- ⏱ Live epoch time — updates every second
- 🔗 Social links — GitHub, LinkedIn, Portfolio
- 🎯 Hobbies and dislikes lists
- ♿ Fully accessible — ARIA labels, live regions, focus styles
- 📱 Responsive — mobile, tablet, and desktop layouts
- 🧪 Full `data-testid` coverage

---

## Tech Stack

- Plain HTML5
- Modern CSS (Custom Properties, Flexbox, Grid)
- Vanilla JavaScript

---

## Usage

Open `index.html` directly in any browser — no build step required.

```bash
open index.html
```

---

## Structure

```
profile-card.html
├── <article>                    → Card root (test-profile-card)
│   ├── .card-left
│   │   ├── <figure>             → Avatar (test-user-avatar)
│   │   └── <nav>                → Social links (test-user-social-links)
│   │       ├── GitHub           → (test-user-social-github)
│   │       ├── LinkedIn         → (test-user-social-linkedin)
│   │       └── Portfolio        → (test-user-social-portfolio)
│   └── .card-right
│       ├── <header>             → Name (test-user-name)
│       ├── <p>                  → Bio (test-user-bio)
│       ├── <time>               → Epoch time (test-user-time)
│       ├── <section>            → Hobbies (test-user-hobbies)
│       └── <section>            → Dislikes (test-user-dislikes)
```

---

## Data Test IDs

| Element | `data-testid` |
|---|---|
| Card root | `test-profile-card` |
| Name | `test-user-name` |
| Bio | `test-user-bio` |
| Epoch time | `test-user-time` |
| Avatar | `test-user-avatar` |
| Social links container | `test-user-social-links` |
| GitHub link | `test-user-social-github` |
| LinkedIn link | `test-user-social-linkedin` |
| Portfolio link | `test-user-social-portfolio` |
| Hobbies list | `test-user-hobbies` |
| Dislikes list | `test-user-dislikes` |

---

## Epoch Time

The `<time>` element displays `Date.now()` in milliseconds and refreshes every **1000ms** via `setInterval`. The `datetime` attribute is kept in sync with the current ISO timestamp.

```js
function updateTime() {
  const now = Date.now();
  timeEl.textContent = now;
  timeEl.setAttribute('datetime', new Date(now).toISOString());
}

updateTime();
setInterval(updateTime, 1000);
```

`aria-live="polite"` and `aria-atomic="true"` ensure screen readers announce updates without interrupting ongoing speech.

---

## Accessibility

- `aria-live="polite"` + `aria-atomic="true"` on the epoch time element
- `aria-labelledby` on hobbies and dislikes sections
- `aria-label` on all social links (including new tab notice)
- Meaningful `alt` text on the avatar image
- `<figcaption>` with `.sr-only` for screen reader context
- Visible `:focus-visible` styles on all interactive elements
- Semantic elements throughout — `<article>`, `<figure>`, `<nav>`, `<section>`, `<header>`, `<time>`

### Keyboard Navigation

`Tab` moves through: GitHub → LinkedIn → Portfolio

All links open in a new tab with `target="_blank" rel="noopener noreferrer"`.

---

## Responsive Layout

| Breakpoint | Layout |
|---|---|
| ≤ 600px | Single column, avatar + social stack vertically |
| 601px – 768px | Two columns, narrower left panel (160px) |
| 769px+ | Two columns, full left panel (200px) |
