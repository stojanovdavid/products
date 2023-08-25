class Products {
    constructor(products) {
      this.products = products;
    }
  
    updateWeightProperty(products) {
      if (!products.weight) {
        products.weight = "N/A";
      } else if (typeof products.weight === "number") {
        products.weight = products.weight + "g";
      }
    }
  
    updateDescriptionProperty(product) {
      product.description =
        product.description.length > 10
          ? product.description.substring(0, 10) + "..."
          : product.description;
    }
  
    updatePriceProperty(product) {
      if (typeof product.price === "number") {
        product.price = product.price.toFixed(1);
      }
    }
  
    sortProducts() {
      for (const key in this.products) {
        this.updateWeightProperty(this.products[key]);
        this.updateDescriptionProperty(this.products[key]);
  
        this.updatePriceProperty(this.products[key]);
      }
      return this.products;
    }
  }
  
  module.exports = Products;
  