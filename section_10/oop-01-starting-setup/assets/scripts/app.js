class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}
class Component {
  constructor (renderHookId) {
    this.hookId = renderHookId;
  }

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if(cssClasses) {
      rootElement.className = cssClasses;
    }
    if(attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    console.log(this.hookId, rootElement)
    document.getElementById(this.hookId).append(rootElement);
    console.log(document.getElementById(this.hookId))
    return rootElement
  }
}

class Product extends Component{
  constructor (hookId, title,imgUrl, desc, price) {
    super(hookId)
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
    let prodEl = this.createRootElement("li", "product-item")

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

class ProductList extends component{
  constructor (hookId) {
    this.products = [ 
      new Product(hookId, "shoes"," www.test.id", "running shoes", 150.00),
      new Product(hookId, "tshirt"," www.test.id", "running shirt", 15.00) ,
      new Product(hookId, "hoodie"," www.test.id", "running hoodie ", 100.00) 
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
class ShoppingCart extends Component{
  items = [];

  set carItems (value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2> Total: \$${this.totalAmount.toFixed(2)}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce((accu, item) => {
      return accu += item.price;
    }, 0)
    return sum;
  }

  constructor(hookId) {
    super(hookId)
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }
  render () {
    const attribute = `
      <h2>  Total: \$${0}</h2>
      <button> Order Now! </button>
    `
    const cartEL = this.createRootElement("section", 'cart', {name: "innerHTML", value: attribute});

    return cartEL;
  }
}

class Shop {
  constructor () {
    this.pList = new ProductList('app');
    this.cart  = new ShoppingCart('app');
  }

  render() {
    this.pList.render()
    // this.cart.render()
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
