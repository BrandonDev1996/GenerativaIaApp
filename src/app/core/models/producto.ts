export class Producto {
    public categoria: string;
    public nombre: string;
    public precio: number;
    public imagen: string;
    public like: number;

    constructor(categoria: string, nombre: string, precio: number, imgCode: string, like: number = 0) {
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imgCode;
        this.like = like;
    }

}
