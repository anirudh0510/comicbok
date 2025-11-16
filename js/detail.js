document.addEventListener("DOMContentLoaded", () => {
  try {
    populateDetail();
    attachDetailHandlers();
    updateCartCountHeader();
  } catch (e) {
    console.error("detail init error", e);
  }
});

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function populateDetail() {
  const id = Number(getQueryParam("id")); // FIX → number ID

  // Find comic safely
  const comic =
    (window.COMICS || []).find((c) => Number(c.id) === id) ||
    (window.COMICS && window.COMICS[0]);

  if (!comic) return;

  // DO NOT CHANGE YOUR cover logic
  const cover = document.getElementById("cover-img");
  if (cover) cover.src = comic.cover || comic.image || "";

  document.getElementById("comic-title").textContent = comic.title || "";
  document.getElementById("comic-synopsis").textContent = comic.synopsis || "";
  document.getElementById("comic-publisher").textContent =
    comic.publisher || "";

  // ⭐ ONLY THIS LINE UPDATED (safer creators support)
  document.getElementById("comic-creators").textContent =
    comic.creators || "Unknown";

  document.getElementById("comic-price").textContent = comic.price || "";
}

function attachDetailHandlers() {
  const addBtn = document.getElementById("add-cart");
  if (!addBtn) return;

  addBtn.addEventListener("click", () => {
    const id = Number(getQueryParam("id")); // FIX → ensure number
    const comic = (window.COMICS || []).find((c) => Number(c.id) === id);

    if (!comic) {
      alert("Comic not found");
      return;
    }

    const qty = Number(document.getElementById("qty").value) || 1;

    let cart = JSON.parse(localStorage.getItem("comic_cart") || "[]");

    const existing = cart.find((item) => Number(item.id) === id);

    if (existing) {
      existing.qty += qty;
    } else {
      // DO NOT CHANGE your cart.push cover usage
      cart.push({
        id: comic.id,
        title: comic.title,
        price: comic.price,
        cover: comic.cover, // you specifically wanted this kept
        qty,
      });
    }

    localStorage.setItem("comic_cart", JSON.stringify(cart));
    updateCartCountHeader();
    showNotify("Added to cart!");
  });
}

function updateCartCountHeader() {
  const cart = JSON.parse(localStorage.getItem("comic_cart") || "[]");
  const count = cart.reduce((total, item) => total + (item.qty || 0), 0);

  document.querySelectorAll("#cart-count, .cart-count").forEach((el) => {
    el.textContent = count;
  });
}

function showNotify(msg) {
  const n = document.getElementById("notify");
  if (!n) return;

  n.textContent = msg;
  n.classList.add("show");

  setTimeout(() => {
    n.classList.remove("show");
  }, 2000);
}
