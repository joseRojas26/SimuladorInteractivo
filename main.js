class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre; 
        this.precio = precio;
        this.stock = stock;
    }

    sumaIva() {
        return this.precio * 1.21
    }

    sumaStock(cantidad) {
        this.stock = this.stock + cantidad;
        this.stock += cantidad;
    }

    mostrarStock() {
        console.log("El stock de " + this.nombre + " es de " + this.stock );
    }

    vender(cantidad) {
        if( this.stock >= cantidad) {
            this.stock -= cantidad;
            console.log("Se vendieron " + cantidad + " unidades de " + this.nombre);
        } else {
            console.log("No hay stock suficiente de " + this.nombre);
        }
    }
}


const harina = new Producto("Harina morixe", 200, 10);
const tomate = new Producto("Tomate rojo", 150, 30);

harina.mostrarStock();
harina.sumaStock(50);
harina.mostrarStock();
harina.vender(100);
harina.mostrarStock();
harina.sumaStock(500);
harina.vender(350);
