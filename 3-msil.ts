class Properties {
  constructor(private todos:{
    id:string,
    name: string;
    age: number;}[]){
  }

  set addTask(todo : {
    id:string
    name: string;
    age: number;}){
      this.todos.push(todo)
  }

  set deleteTask(id:string){
    this.todos =  this.todos.filter((el)=>el.id !== id)
  }

  set editTask(id:string){
    let values = {id:id , name:"Edited" , age:15}
    let todos2 : {
      id:string,
      name: string;
      age: number;}[] = []

    this.todos.map((el)=>{
      if (el.id === id) {
        todos2.push(values)
      } else{
        todos2.push(el)
      }
    })

    this.todos = todos2
  }

  getTask (id : string){
    let task : object = {}
    this.todos.map((el)=>{
      if (el.id === id) {        
        task = el
      } else {
        return "Bunday task yoq )"
      }
    })

    return task
  }

  get getTasks (){
    return this.todos
  }
}

let p1 = new Properties([{id:"1" , name:"Roka" , age:15}])

p1.addTask = {id:"2" , name:"Zona" , age:17}
p1.addTask = {id:"3" , name:"Yassa" , age:13}

p1.deleteTask = "3"

p1.editTask = "2"

console.log(p1.getTasks);




