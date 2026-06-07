# InkNWall – README

**Author:** Ajay Sankar. T

---

## Overview

InkNWall is a **single-page poster library and mini-cart experience** built using **vanilla HTML, CSS, and JavaScript**. The project is designed to be lightweight, responsive, and fully client-side, with no external dependencies or build steps required.

---

## Approach

I adopted a **modular, layered architecture** to ensure clean separation of concerns:

- **Data Layer:** A constant `POSTERS` array serves as the single source of truth for all poster entities, including metadata like `id`, `name`, `category`, `image URL`, `premium flag`, and `price`.
- **State Layer:** In-memory state variables (`cart`, `activeFilter`, `currentModalPoster`, and search query) manage the dynamic aspects of the application.
- **DOM Bindings:** Core DOM nodes (navbar, filter shelf, poster grid, modal, cart sidebar) are cached for efficient updates.
- **Event Layer:** Centralized event listeners handle user interactions (scroll, filter clicks, card interactions, modal and cart toggles, search input) and dispatch to pure functions that update state and re-render the UI.

The project follows a **rendering pipeline** where all UI updates flow through dedicated helper functions, ensuring a clear separation between event handling and rendering logic.

---

## Features Implemented

- **Poster Library:** Dynamic rendering of a grid of posters with support for filtering by category (e.g., `movie`, `anime`, `f1`, `cricket`, `music`, `minimal`, `motivation`, `fitness`).
- **Search Functionality:** Real-time search to filter posters by name or category.
- **Premium Posters:** Visual distinction for premium posters with a `premium-card` class and badge.
- **Mini-Cart:** A sidebar cart with the ability to add, remove, and update quantities of posters. The cart computes total price and item count dynamically.
- **Modal View:** Clicking a poster opens a modal with detailed information and an "Add to Cart" button.
- **Responsive Design:** Fully responsive layout with breakpoints at 1200px, 1024px, 768px, and 480px. Adapts to mobile, tablet, and desktop screens.
- **Micro-Interactions:** Smooth animations for card hover effects, cart button scaling, modal transitions, and staggered poster grid animations.
- **Dark Theme:** Aesthetic dark theme with orange accents using CSS variables for easy theming.

---

## Challenges Faced

- **State Management:** Ensuring consistency between the `cart` state, `activeFilter`, and search results while maintaining a reactive UI required careful handling of state transitions and re-renders.
- **Event Delegation:** Implementing efficient event delegation for dynamic elements (e.g., filter tags, cart item removal) without attaching individual listeners to each element.
- **Responsive Layout:** Balancing the poster grid layout, modal, and cart sidebar across different screen sizes while maintaining usability and visual appeal.
- **Performance:** Optimizing the rendering pipeline to avoid unnecessary DOM updates, especially when filtering or searching through the poster library.
- **Cross-Browser Compatibility:** Ensuring smooth animations and transitions across modern browsers without relying on external libraries.

---

## Additional Improvements

- **Code Organization:** Structured the code into logical sections (data, state, rendering, events) for better readability and maintainability.
- **Accessibility:** Added semantic HTML and ARIA attributes to improve accessibility for screen readers and keyboard navigation.
- **Error Handling:** Implemented basic error handling for missing images and edge cases in the cart logic.
- **Scalability:** Designed the data model and rendering pipeline to easily accommodate future additions, such as new poster categories or cart features.
- **User Experience:** Enhanced UX with visual feedback (e.g., cart button animations, modal transitions) and clear UI states (e.g., active filters, empty cart messages).

---

## How to Run

1. Clone or download the project files (`index.html`, `css/style.css`, `js/script.js`, and `assets/` folder).
2. Open `index.html` in a modern browser, or serve the files using a static server (e.g., `npx serve`, `python -m http.server`, or VS Code Live Server).
3. No build step or external dependencies are required.

---



```
InkNWall/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet
├── js/
│   └── script.js       # JavaScript logic
└── assets/             # Local images and logos
```
