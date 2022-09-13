class Stack {
    constructor(){
        this.array = []
    }

    agregar(dato){  
        this.array.push(dato)
    }

    quitar(){
        this.array.pop()
    }
}

var miStack1 = new Stack
miStack1.agregar(1)
miStack1.agregar(2)

console.log(miStack1);
