const products = [
  {name: "shoe ausucs"},
  {name: "jacket levis"},
  {name: "tshir levis"}
]

const listOfProducts = {
  products: products,
  render() {
    const reenderHook = document.getElementById("app");
    const prodList   = document.createElement("ul");
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className  = 'product-item'; 
      prodEl.innerHTML = `
        <div>
          <div class="product-item__content">
            <p> ${prod.name} </p>
            <button> Add to cart </button>
          </div>
        </div
      `;
      prodList.append(prodEl);
    }
    reenderHook.append(prodList)
  }
}

listOfProducts.render()