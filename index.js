const Products = require("./classes/Products");
const DomesticProduct = require("./classes/DomesticProducts");
const ForeignProducts = require("./classes/ForeignProducts");

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const filename = "productData.json";

let output = "";

fs.readFile(filename, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading ${filename}: ${err}`);
    rl.close();
    return;
  }

  const products = JSON.parse(data);

  let productObj = new Products(products);

  let domesticProductObj = new DomesticProduct(productObj.sortProducts());
  let foreignProductObj = new ForeignProducts(productObj.sortProducts());

  let domesticProducts = domesticProductObj.filterDomesticProducts();
  let foreignProducts = foreignProductObj.filterForeignProducts();

  const domesticCount = domesticProductObj.domesticProductsCount();
  const domesticSum = domesticProductObj.domesticProductSum();

  const foreignCount = foreignProductObj.foreignProductCount();
  const foreignSum = foreignProductObj.foreignProudctSum();

  const spaces = 6;
  output += ". Domestic\n";

  for (const key in domesticProducts) {
    output += `... ${domesticProducts[key].name}\n`;
    output += `${" ".repeat(spaces)}Price:$${domesticProducts[key].price}\n`;
    output += `${" ".repeat(spaces)}${domesticProducts[key].description}\n`;

    output += `${" ".repeat(spaces)}Weight: ${domesticProducts[key].weight}\n`;
  }

  output += ". Foreign\n";

  for (const key in foreignProducts) {
    output += `... ${foreignProducts[key].name}\n`;
    output += `${" ".repeat(spaces)}Price:$${foreignProducts[key].price}\n`;
    output += `${" ".repeat(spaces)}${foreignProducts[key].description}\n`;

    output += `${" ".repeat(spaces)}Weight: ${foreignProducts[key].weight}\n`;
  }

  output += `Domestic cost: ${domesticSum}\n`;
  output += `Foreign cost: ${foreignSum}\n`;
  output += `Domestic count: ${domesticCount}\n`;
  output += `Foreign count: ${foreignCount}`;

  console.log(output);

  rl.close();
});
