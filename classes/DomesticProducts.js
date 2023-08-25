const Products = require("./Products");

class DomesticProduct extends Products {
  constructor(products) {
    super(products);
  }

  domesticProductsCount() {
    let count = 0;

    for (const key in this.products) {
      this.products[key].domestic && count++;
    }

    return count;
  }

  domesticProductSum() {
    let sum = 0;

    for (const key in this.products) {
      this.products[key].domestic
        ? (sum += parseFloat(this.products[key].price))
        : 0;
    }

    return "$" + sum.toFixed(1);
  }

  filterDomesticProducts() {
    return this.products.filter((p) => p.domestic);
  }
}

module.exports = DomesticProduct;
