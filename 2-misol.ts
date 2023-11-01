class Product {

  constructor(
    public name : string , 
    public price :number , 
    public quantity : number ){
      this.name = name
      this.price = price
      this.quantity = quantity
  }

  get totalPrice() {
    return this.quantity * this.price
  }

  set add (quan : number){
    this.quantity += quan
  }

  set sell (quan : number){
    this.quantity = this.quantity - quan
  }
}

let p1 = new Product("apple" , 1200 , 1000)

p1.add = 200

console.log(p1);