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
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363851/fmlboyjqljep8v8vujlb.jpg",
    price: 129,
  },
  {
    id: 9,
    name: "VADA CHENNAI",
    cat: "movies",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363853/jeijvrtufn9jkaichd9c.jpg",
    price: 129,
  },
  {
    id: 10,
    name: "GEORGE RUSSELL",
    cat: "f1",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779704518/rlflvzut4gbmvnnoiuix.jpg",
    price: 129,
  },
  {
    id: 11,
    name: "MAX VERSTAPPEN",
    cat: "f1",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363537/tzhwaggicd8vgclw6gxc.jpg",
    price: 129,
  },
  {
    id: 12,
    name: "RONALDO – CR7",
    cat: "football",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779270957/y2hx83prjpgenydchstn.jpg",
    price: 129,
  },
  {
    id: 13,
    name: "ROHIT SHARMA",
    cat: "cricket",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779271568/btdt9gneuthinjwu2uvb.jpg",
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
    name: "CYBERPUNK EDGERUNNER",
    cat: "anime",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779258169/atdp2bdrwyufe1bfsz2w.jpg",
    price: 129,
  },
  {
    id: 16,
    name: "VEGETA",
    cat: "anime",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779258178/k8to030d8i6ydaoljj9u.jpg",
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
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779258176/ee1tn2d6yuo9eodiusw7.jpg",
    price: 129,
  },
  {
    id: 20,
    name: "ROLONDO – CR7",
    cat: "motivation",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779270958/vstr0ni300qeyxtyy5cr.jpg",
    price: 129,
  },
  {
    id: 21,
    name: "KURUSAKI ICHIGO",
    cat: "minimal",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779258175/hjjpovehvxarcyvtqlme.jpg",
    price: 129,
  },
  {
    id: 22,
    name: "PORSCHE 911",
    cat: "cars",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779258502/kbgxfwrfxtzjmpxecilm.jpg",
    price: 129,
  },
  {
    id: 23,
    name: "MCLAREN SENNA GTR",
    cat: "cars",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779258506/lsmfll6kyqdr4cw5pekh.jpg",
    price: 129,
  },
  {
    id: 24,
    name: "TECHNOBLADE – MINECRAFT",
    cat: "game",
    premium: true,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779258701/zcgosjjrlmq85nh2jnvd.jpg",
    price: 129,
  },
  {
    id: 25,
    name: "GOKU",
    cat: "fitness",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779258172/i8a3ahb5xrapvafudtjw.jpg",
    price: 129,
  },
  {
    id: 26,
    name: "CHARLIE PUTH",
    cat: "music",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779259133/cf1zm6hln7xzzjmnxry2.jpg",
    price: 129,
  },
  {
    id: 27,
    name: "FIGHT CLUB",
    cat: "movie",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779258705/gbon6bjitaeappdersmq.jpg",
    price: 129,
  },
  {
    id: 28,
    name: "FAST AND FURIOUS",
    cat: "movie",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779258704/rixkzyfixid3q1ldikgv.jpg",
    price: 129,
  },
  {
    id: 29,
    name: "CHARLES LECLERC ",
    cat: "f1",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779258508/vommwupedyvpuqdaayds.jpg",
    price: 129,
  },
  {
    id: 30,
    name: "RONNIE COLEMAN",
    cat: "fitness",
    premium: false,
    image:
      "https://res.cloudinary.com/dmtnw2ago/image/upload/v1779363526/dnrpr5kbijke085asasc.jpg",
    price: 129,
  },
];


(function () {
  const card = document.querySelector(".featured-card.neo");
  if (!card) return;

  const slides = Array.from(card.querySelectorAll(".featured-slide"));
  const dots   = Array.from(card.querySelectorAll(".featured-dots-bar .dot"));

  let current = 0;
  let timer   = null;
  const AUTO_DELAY = 5000;

  function goTo(index) {
    if (!slides.length) return;
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === current);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
    });
  }

  function nextSlide() {
    goTo(current + 1);
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(nextSlide, AUTO_DELAY);
  }

  function stopAuto() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      goTo(i);
      startAuto();
    });
  });

  card.addEventListener("mouseenter", stopAuto);
  card.addEventListener("mouseleave", startAuto);

  goTo(0);
  startAuto();
})();


// ---- STATE ----
// Application state for the cart, active filter, and current modal poster.
let cart = [];
let activeFilter = "all";
let currentModalPoster = null;

// ---- DOM REFS ----
// Cache all DOM nodes used by interaction handlers and render logic.
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
  // Builds a single poster card and attaches its event listeners.
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag relative z-10 h-4 w-4" aria-hidden="true">
            <path d="M16 10a4 4 0 0 1-8 0">  </path>
            <path d="M3.103 6.034h17.794"> </path>
            <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"> </path>
          </svg>
          ADD TO CART
        </button>
      </div>
    </div>
  `;

  card.addEventListener("click", (e) => {
    if (e.target.closest(".add-to-cart-btn")) return; // Prevent opening the modal when the add button is clicked.
    openModal(poster);
  });

  card.querySelector(".add-to-cart-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    addToCart(poster);
    animateCartBtn();
  });

  return card;
}

function renderPosterCards(posters) {
  posterCount.textContent = `${posters.length} POSTERS SHOWING`;
  postersGrid.innerHTML = "";

  posters.forEach((poster, index) => {
    const card = renderPosterCard(poster, index);
    postersGrid.appendChild(card);
  });
}

// ---- RENDER POSTERS ----

function renderPosters() {
  const filtered =
    activeFilter === "all"
      ? POSTERS
      : POSTERS.filter((p) => p.cat === activeFilter);

  renderPosterCards(filtered);
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

    renderPosterCards(filtered);
  });
}

// ---- INIT ----

renderPosters();
