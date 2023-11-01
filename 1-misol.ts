class Car {

  constructor(
    public company : string , 
    public model :string , 
    public year : number ,
    public fuelType : string){
      this.company = company
      this.model = model
      this.year = year
      this.fuelType = fuelType
  }

  get age() {
    return 2023 - this.year
  }

  getInfo (){
    return `${this.company} da ishlab chiqarilgan ${this.model} modelidagi ${this.year} da chiqgan mashina ${this.fuelType} turdagi yoqilgida yuradi !`
  }
}

let c1 = new Car("Nissan" , "Gtr 35" , 1997 , "Ai92")

console.log(c1.getInfo());
