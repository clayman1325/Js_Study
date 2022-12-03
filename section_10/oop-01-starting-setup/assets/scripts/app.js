


class Product {
  constructor (title,imgUrl, desc, price) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.description = desc;
    this.price = price
  }

  addToCart () {
    console.log("Adding product to cart....")
    App.addProductTocart(this)
  }

  createElement() {
    let prodEl = document.createElement("li");
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
      <div>
        <div class="product-item__content">
          <img> ${this.imgUrl} </img>
          <h2> ${this.title}</h2>
          <h2> ${this.price} </h2>
          <h3> ${this.description}</h3>
          <button> Add to cart </button>
        </div>
      </div>
    `
    const addButton = prodEl.querySelector("button")
    addButton.addEventListener('click', this.addToCart.bind(this))
    return prodEl;
  }
}

class ProductList {
  constructor () {
    this.products = [ 
      new Product("shoes"," www.test.id", "running shoes", 150.00),
      new Product("tshirt"," www.test.id", "running shirt", 15.00) ,
      new Product("hoodie"," www.test.id", "running hoodie ", 100.00) 
    ]
  }

  render() {
    const productList     = document.createElement("ul");
    productList.className = 'product-list';

    for (const product of this.products){
      const prodEl = product.createElement()
      productList.append(prodEl)
    }

    return(productList);
  }
}

class ShoppingCart {
  items = [];
  addProduct(product) {
    this.items.push(product)
  }
  render () {
    const cartEL = document.createElement("section");
    cartEL.innerHTML = `
      <h2>  Total: \$${0}</h2>
      <button> Order Now! </button>
    `
    cartEL.className = 'cart'
    return cartEL;
  }
}

class Shop {
  constructor () {
    this.pList = new ProductList();
    this.cart  = new ShoppingCart();
  }

  render() {
    const productList = this.pList.render()
    const cartEl      = this.cart.render()

    const renderHook = document.getElementById("app");

    renderHook.append(cartEl);
    renderHook.append(productList);
  }
}

class App {
  static init() {
    const shop = new Shop;
    this.cart = shop.cart
    shop.render();
  }

  static addProductTocart(product) {
    this.cart.addProduct(product)
  }
}

App.init()
console.log(App.cart)
// const listOfProducts = {
//   products: [newProduct],
//   render() {
//     const reenderHook = document.getElementById("app");
//     const prodList   = document.createElement("ul");
//     prodList.className = 'product-list';
//     for (const prod of this.products) {
//       const prodEl = document.createElement("li");
//       prodEl.className  = 'product-item'; 
//       prodEl.innerHTML = `
//         <div>
//           <div class="product-item__content">
//             <p> ${prod.title} </p>
//             <button> Add to cart </button>
//           </div>
//         </div
//       `;
//       prodList.append(prodEl);
//     }
//     reenderHook.append(prodList)
//   }
// }
