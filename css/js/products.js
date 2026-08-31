/* ============================================
   Maison Élan — Product data
   Swap the "image" paths for your own photos later.
   ============================================ */
const PRODUCTS = [
  { id: 1, name: "Wool Overcoat",        category: "outerwear",   price: 4200, image: "images/product-1.jpg" },
  { id: 2, name: "Linen Shirt",          category: "tops",        price: 1450, image: "images/product-2.jpg" },
  { id: 3, name: "Tapered Trouser",      category: "bottoms",     price: 1900, image: "images/product-3.jpg" },
  { id: 4, name: "Silk Scarf",           category: "accessories", price: 950,  image: "images/product-4.jpg" },
  { id: 5, name: "Cotton Turtleneck",    category: "tops",        price: 1650, image: "images/product-5.jpg" },
  { id: 6, name: "Waxed Field Jacket",   category: "outerwear",   price: 3800, image: "images/product-6.jpg" },
  { id: 7, name: "Straight Denim",       category: "bottoms",     price: 1750, image: "images/product-7.jpg" },
  { id: 8, name: "Leather Belt",         category: "accessories", price: 850,  image: "images/product-8.jpg" },
  { id: 9, name: "Cashmere Sweater",     category: "tops",        price: 3100, image: "images/product-9.jpg" },
];

/**
 * Format a price in rupees, e.g. 1450 -> "₹1,450"
 */
function formatPrice(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

/**
 * Build the HTML for one product card.
 */
function productCardHTML(product) {
  return `
    <a class="product-card" href="products.html">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy"
             onerror="this.closest('.product-image').style.background='var(--clay)'; this.remove();">
      </div>
      <p class="product-name">${product.name}</p>
      <div class="product-meta">
        <span>${product.category}</span>
        <span class="product-price">${formatPrice(product.price)}</span>
      </div>
    </a>
  `;
}

/**
 * Render a list of products into a container by id.
 */
function renderProducts(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = products.map(productCardHTML).join("");
}

// Homepage: show first 6 as "featured"
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("featuredGrid")) {
    renderProducts("featuredGrid", PRODUCTS.slice(0, 6));
  }

  // Products page: full grid + filtering
  const grid = document.getElementById("productGrid");
  if (grid) {
    const filterBar = document.getElementById("filterBar");
    const resultCount = document.getElementById("resultCount");

    function applyFilter(category) {
      const filtered = category === "all"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === category);
      renderProducts("productGrid", filtered);
      if (resultCount) {
        resultCount.textContent = `${filtered.length} item${filtered.length !== 1 ? "s" : ""}`;
      }
    }

    applyFilter("all");

    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filterBar.querySelectorAll(".filter-btn").forEach(b => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      applyFilter(btn.dataset.filter);
    });
  }
});
