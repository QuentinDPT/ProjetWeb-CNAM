export interface Product{
  name: string;
  price: number;
  image_url: string;
  description: string;
  note: number;

  /*
  constructor(name:string="SANS NOM",price:number=1, description:string="", note:number=3,image_url:string="https://www.odoo.com/web/image/res.users/548727/image_1024?unique=248097a")
  {
    this.name = name;
    this.description = description ;
    this.price = price;
    this.note = note;
    this.image_url = image_url;
  }
  //*/
}

export class ProductStateModel {
  products: Product[] ;
}
