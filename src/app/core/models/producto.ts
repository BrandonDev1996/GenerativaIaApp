export class Producto {
    public categoria: string;
    public nombre: string;
    public precio: number;
    public imgCode: string;
    public like: number;

    constructor(categoria: string, nombre: string, precio: number, imgCode: string, like: number = 0) {
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.imgCode = imgCode;
        this.like = like;
    }

    // Método opcional para mostrar la información del producto
    public toString(): string {
        return `Producto: ${this.nombre}, Categoría: ${this.categoria}, Precio: $${this.precio}, Likes: ${this.like}`;
    }
}
