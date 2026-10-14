// entidades: son lo que vamos a tener en la bd 


interface updateWithOptions {
    name?: string,
    description?: string,
    stock?: number,
    category?: string,
    price?: number
}

export class Product {
    constructor(
        public id: string,
        public name: string,
        public price: number,
        public stock: number,
        public category?: string,
        public description?: string,) { }
    updateWith({ name, description, price, stock, category }: updateWithOptions) {
        this.name = name ?? this.name;
        this.description = description ?? this.description;
        this.price = price ?? this.price;
        this.category = category ?? this.category;
        this.stock = stock ?? this.stock;


    }
}
