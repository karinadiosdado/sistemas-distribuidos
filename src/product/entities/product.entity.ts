// entidades: son lo que vamos a tener en la bd 


interface updateWithOptions {
    name?: string, 
    description?: string, 
    price?: number
}

export class Product {
    constructor(
        public id: string,
        public name: string,
        public price: number,
        public description?: string,) { }
    updateWith({ name, description, price }:updateWithOptions ){
        this.name=name?? this.name;
         this.description=description?? this.description;
        this.price=price?? this.price;


    }
}
