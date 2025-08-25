const products = [
  { name: "T-Shirt", category: "Clothing" },
  { name: "Jeans", category: "Clothing" },
  { name: "Headphones", category: "Electronics" },
  { name: "Smartphone", category: "Electronics" },
  { name: "Novel", category: "Books" },
  { name: "Cookbook", category: "Books" }
];

const productList = document.getElementById("productList");
const filter = document.getElementById("filter");

function displayProducts(category) {
  productList.innerHTML = "";
  let filtered = products.filter(p => category === "All" || p.category === category);
  filtered.forEach(p => {
    let div = document.createElement("div");
    div.className = "product";
    div.textContent = p.name;
    productList.appendChild(div);
  });
}

filter.addEventListener("change", () => {
  displayProducts(filter.value);
});

// Show all by default
displayProducts("All");