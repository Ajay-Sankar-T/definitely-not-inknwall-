/* ============================================================
   INKNWALL – script.js (image-only version)
   Vanilla JS: navbar, filter, poster grid, modal, cart
   ============================================================ */

// ---- POSTER DATA (IMAGE-ONLY) ----

const POSTERS = [
  {
    id: 1,
    name: "SPIDERMAN",
    cat: "movie",
    premium: true,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779259132/md3bgnxwgaxkpvca1mk1.jpg",
    price: 129,
  },
  {
    id: 2,
    name: "INKNWALL LOGO",
    cat: "test",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779259438/kzbw0i0oyjgwpeuetyvb.png",
    price: 129,
  },
  {
    id: 3,
    name: "BOOM BOOM BUMRAH",
    cat: "cricket",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779268846/bs9mibsshuo4mrkabhbx.png",
    price: 129,
  },
  {
    id: 4,
    name: "LEO MESSI",
    cat: "football",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779270421/f7m5n0qbx8ktblggm1ak.png",
    price: 129,
  },
  {
    id: 5,
    name: "MS DHONI – CSK",
    cat: "cricket",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779270951/wwa3nytj0xdfucopjkxp.jpg",
    price: 129,
  },
  {
    id: 6,
    name: "VIRAT KOHLI – RCB",
    cat: "minimal",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779270954/n9yqr0gqqlvq3spe8cre.jpg",
    price: 129,
  },
  {
    id: 7,
    name: "BRUCE LEE",
    cat: "movies",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363536/fdg6dam5o1o1w5gxxljd.jpg",
    price: 129,
  },
  {
    id: 8,
    name: "TAYLOR SWIFT",
    cat: "music",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363622/lq9xv8n6un0tr7g3em4u.jpg",
    price: 129,
  },
  {
    id: 9,
    name: "VADA CHENNAI",
    cat: "movies",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363539/kn0s2bvtiet6x5a2l3af.jpg",
    price: 129,
  },
  {
    id: 10,
    name: "GEORGE RUSSELL",
    cat: "f1",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363527/rjmhxg8sbigm0ipp9wv0.jpg",
    price: 129,
  },
  {
    id: 11,
    name: "MAX VERSTAPPEN",
    cat: "f1",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363531/w2xpt7lfqjrmckdfc8l2.jpg",
    price: 129,
  },
  {
    id: 12,
    name: "RONALDO – CR7",
    cat: "football",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363532/zsfexbvwv8cmopmv8cz7.jpg",
    price: 129,
  },
  {
    id: 13,
    name: "ROHIT SHARMA",
    cat: "cricket",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363533/klwvy7qzv6z9uc9pfsmq.jpg",
    price: 129,
  },
  {
    id: 14,
    name: "ATTACK ON TITAN",
    cat: "anime",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779258170/f189fuweq5zgyjlgxrb7.jpg",
    price: 129,
  },
  {
    id: 15,
    name: "NARUTO",
    cat: "anime",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363529/qq0b6l0yvyu0p8t2yxvw.jpg",
    price: 129,
  },
  {
    id: 16,
    name: "DEATH NOTE",
    cat: "anime",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363536/cuxdc3nq6u7tih91qipd.jpg",
    price: 129,
  },
  {
    id: 17,
    name: "VIRAT KOHLI",
    cat: "cricket",
    premium: true,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779270952/uwlijnzql9va4j6v4l7k.jpg",
    price: 129,
  },
  {
    id: 18,
    name: "LEWIS HAMILTON",
    cat: "f1",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779258510/umzenlzkpwsgra8jpa2w.jpg",
    price: 129,
  },
  {
    id: 19,
    name: "ONE PIECE",
    cat: "anime",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363538/mxj2azk1qj9pg5y7uh7w.jpg",
    price: 129,
  },
  {
    id: 20,
    name: "MOTIVATION – GRIND",
    cat: "motivation",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363545/da0mmo3yq9k32gfsmj2c.jpg",
    price: 129,
  },
  {
    id: 21,
    name: "GALAXY MINIMAL",
    cat: "minimal",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363543/g0t9sjjk9n4n63t1x0gk.jpg",
    price: 129,
  },
  {
    id: 22,
    name: "PULP FICTION",
    cat: "movie",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363535/edtxcjh3pwn7cqj8ux0g.jpg",
    price: 129,
  },
  {
    id: 23,
    name: "GODFATHER",
    cat: "movie",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363536/b9sxu7rzvpgxf6s7p7is.jpg",
    price: 129,
  },
  {
    id: 24,
    name: "DEMON SLAYER",
    cat: "anime",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363537/q9rj0ceo0bpmexb5m1xw.jpg",
    price: 129,
  },
  {
    id: 25,
    name: "PUSH YOUR LIMITS",
    cat: "fitness",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363545/da0mmo3yq9k32gfsmj2c.jpg",
    price: 129,
  },
  {
    id: 26,
    name: "DAFT PUNK",
    cat: "music",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363541/s0wh5ey3a0r0h6bm1mto.jpg",
    price: 129,
  },
  {
    id: 27,
    name: "KENDRICK LAMAR",
    cat: "music",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363542/pt3b5qjmj7jdq0qzy9uu.jpg",
    price: 129,
  },
  {
    id: 28,
    name: "SENNA",
    cat: "f1",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363530/uz0zj1o4jifjtij09j8p.jpg",
    price: 129,
  },
  {
    id: 29,
    name: "SCHUMACHER",
    cat: "f1",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363531/w2xpt7lfqjrmckdfc8l2.jpg",
    price: 129,
  },
  {
    id: 30,
    name: "RONNIE COLEMAN",
    cat: "minimal",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363526/dnrpr5kbijke085asasc.jpg",
    price: 129,
  },
];

// ---- STATE ----

let cart = [];
let activeFilter = "all";
let currentModalPoster = null;

// ---- DOM REFS ----

const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const filterTags = document.getElementById("filterTags");
const postersGrid = document.getElementById("postersGrid");
const posterCount = document.getElementById("posterCount");

const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalCat = document.getElementById("modalCat");
const modalPoster = document.getElementById("modalPoster");
const modalAddBtn = document.getElementById("modalAddBtn");

const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const cartClose = document.getElementById("cartClose");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartFooter = document.getElementById("cartFooter");
const cartCount = document.getElementById("cartCount");

const scrollLeft = document.getElementById("scrollLeft");
const scrollRight = document.getElementById("scrollRight");

const searchInput = document.getElementById("searchInput");

// ---- NAVBAR SCROLL ----

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});

// ---- HAMBURGER ----

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
});

// ---- FILTER SHELF SCROLL ----

scrollLeft.addEventListener("click", () => {
  filterTags.scrollBy({ left: -200, behavior: "smooth" });
});

scrollRight.addEventListener("click", () => {
  filterTags.scrollBy({ left: 200, behavior: "smooth" });
});

// ---- FILTER TAGS ----

filterTags.addEventListener("click", (e) => {
  const tag = e.target.closest(".filter-tag");
  if (!tag) return;
  document
    .querySelectorAll(".filter-tag")
    .forEach((t) => t.classList.remove("active"));
  tag.classList.add("active");
  activeFilter = tag.dataset.cat;
  renderPosters();
});

// ---- RENDER HELPERS ----

function renderPosterCard(poster, index) {
  const card = document.createElement("div");
  card.className = "poster-card" + (poster.premium ? " premium-card" : "");
  card.style.animationDelay = `${index * 0.04}s`;

  card.innerHTML = `
    <div class="card-img-wrap">
      <div class="card-img">
        <img class="poster-real-img" src="${poster.image}" alt="${poster.name}" loading="lazy">
      </div>
      <div class="card-cat-badge badge-${poster.cat}">
        ${poster.cat.toUpperCase()}
      </div>
      ${
        poster.premium
          ? `<div class="premium-badge-tag">PREMIUM</div>`
          : ""
      }
      <div class="card-preview-hint">
        <div>
          <span class="preview-label">PREVIEW</span>
          <span class="preview-text">Open artwork view</span>
        </div>
        <div class="preview-eye">👁</div>
      </div>
    </div>
    <div class="card-body">
      <div class="card-name">${poster.name}</div>
      <div class="card-price-row">
        <div>
          <div class="card-price">PRICE</div>
          <div class="card-price-val">Rs. ${poster.price}</div>
        </div>
        <button class="add-to-cart-btn" data-id="${poster.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="13" height="13">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="13" y1="16" x2="21" y2="26"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          ADD TO CART
        </button>
      </div>
    </div>
  `;

  card.addEventListener("click", (e) => {
    if (e.target.closest(".add-to-cart-btn")) return;
    openModal(poster);
  });

  card.querySelector(".add-to-cart-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    addToCart(poster);
    animateCartBtn();
  });

  return card;
}

// ---- RENDER POSTERS ----

function renderPosters() {
  const filtered =
    activeFilter === "all"
      ? POSTERS
      : POSTERS.filter((p) => p.cat === activeFilter);

  posterCount.textContent = `${filtered.length} POSTERS SHOWING`;
  postersGrid.innerHTML = "";

  filtered.forEach((poster, i) => {
    const card = renderPosterCard(poster, i);
    postersGrid.appendChild(card);
  });
}

// ---- MODAL ----

function openModal(poster) {
  currentModalPoster = poster;
  modalTitle.textContent = poster.name;
  modalCat.textContent = poster.cat.toUpperCase();
  modalPoster.innerHTML = `
    <img class="modal-real-img" src="${poster.image}" alt="${poster.name}">
  `;
  document.getElementById("modalPrice").textContent = poster.price;
  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
  currentModalPoster = null;
}

modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

modalAddBtn.addEventListener("click", () => {
  if (currentModalPoster) {
    addToCart(currentModalPoster);
    animateCartBtn();
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeCart();
  }
});

// ---- CART ----

function addToCart(poster) {
  const existing = cart.find((i) => i.id === poster.id);
  if (existing) existing.qty += 1;
  else cart.push({ ...poster, qty: 1 });
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  if (count > 0) {
    cartCount.textContent = count;
    cartCount.classList.add("visible");
  } else {
    cartCount.classList.remove("visible");
  }

  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="cart-empty">Your cart is empty.</p>`;
    cartFooter.style.display = "none";
  } else {
    cartFooter.style.display = "block";
    cartTotal.textContent = `₹${total}`;
    cartItems.innerHTML = cart
      .map(
        (item) => `
      <div class="cart-item">
        <img class="cart-item-thumb" src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <div class="cart-item-name">
            ${item.name} ${item.qty > 1 ? `× ${item.qty}` : ""}
          </div>
          <div class="cart-item-price">Rs. ${item.price * item.qty}</div>
          <button class="cart-item-remove" data-id="${item.id}" title="Remove">
            Remove
          </button>
        </div>
      </div>
    `
      )
      .join("");

    cartItems.querySelectorAll(".cart-item-remove").forEach((btn) => {
      btn.addEventListener("click", () =>
        removeFromCart(Number(btn.dataset.id))
      );
    });
  }
}

function openCart() {
  cartSidebar.classList.add("open");
  cartOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartSidebar.classList.remove("open");
  cartOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

cartBtn.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

function animateCartBtn() {
  cartBtn.style.transform = "scale(1.3)";
  cartBtn.style.borderColor = "var(--orange)";
  cartBtn.style.color = "var(--orange)";
  setTimeout(() => {
    cartBtn.style.transform = "";
    cartBtn.style.borderColor = "";
    cartBtn.style.color = "";
  }, 300);
}

// ---- SEARCH ----

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) {
      renderPosters();
      return;
    }

    const filtered = POSTERS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.cat.toLowerCase().includes(q)
    );

    posterCount.textContent = `${filtered.length} POSTERS SHOWING`;
    postersGrid.innerHTML = "";

    filtered.forEach((poster, i) => {
      const card = renderPosterCard(poster, i);
      postersGrid.appendChild(card);
    });
  });
}

// ---- INIT ----

renderPosters();