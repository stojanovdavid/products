const Products = require("./Products");

class ForeignProducts extends Products {
  constructor(products) {
    super(products);
  }

  foreignProductCount() {
    let count = 0;

    for (const key in this.products) {
      !this.products[key].domestic && count++;
    }

    return count;
  }

  foreignProudctSum() {
    let sum = 0;

    for (const key in this.products) {
      !this.products[key].domestic
        ? (sum += parseFloat(this.products[key].price))
        : 0;
    }

    return "$" + sum.toFixed(1);
  }

  filterForeignProducts() {
    return this.products.filter((p) => !p.domestic);
  }
}

module.exports = ForeignProducts;
