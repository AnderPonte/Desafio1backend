class Productmanager {
  constructor() {
    this.products = [];
  }

  generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
  }

  addProduct(title, description, price, thumbail, code, stock) {
    if (this.products.some((p) => p.code === code)) {
      console.log("Si, existe un producto con el mismo código");
    }

    this.products.push({
      title,
      description,
      price,
      thumbail,
      code,
      stock,
      id: this.generateUniqueId(),
    });
  }

  getproduct() {
    return this.products;
  }

  isProductId(id) {
    return this.products.find((producto) => producto.id === id);
  }

  getproductById(id) {
    this.isProductId(id)
      ? console.log(this.isProductId(id))
      : console.log("Not Found");
  }
}

const productos = new Productmanager();

//Para validar el carrito inicial
console.log("1. Carrito vacio");
console.log(productos.getproduct());

//Agregamos productos
productos.addProduct("Producto1", "description1", 23, "imagen1", "jhn23", 23);
productos.addProduct("Producto2", "description2", 34, "imagen2", "abc23", 3);
productos.addProduct("Producto3", "description3", 120, "imagen1", "xyz345", 2);
productos.addProduct("Producto4", "description4", 12, "imagen1", "lmn987", 54);

//Visualizar los productos
console.log("2. Carrito lleno");
console.log(productos.getproduct());

//Error por código repetido
console.log("3. Existe el producto con el mismo código? ");
productos.addProduct("Producto5", "description5", 15, "imagen5", "lmn987", 20);

//Buscar el 1er producto
console.log("4. Buscar el 1er producto");
const PrimeroId = productos.getproduct()[0].id;
console.log(productos.getproductById(PrimeroId));

//Producto no encontrado
console.log("5. Encontró el producto?");
console.log(productos.getproductById("sdsdf4545"));
