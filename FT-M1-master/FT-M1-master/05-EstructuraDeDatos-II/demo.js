class Nodo {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Lista {
    constructor(){
        this.length = 0
        this.head = null
    }

    agregar(data) {
        let nodo = new Nodo(data)
        if (this.head === null) {
            this.head = nodo
            this.length++
        } else {
            let actual = this.head
            while (actual.next != null) {
                actual = actual.next
            }
            actual.next = nodo
            lista.length++
        }
    }
}

var lista = new Lista()
console.log(lista);

lista.agregar("Camilo")
lista.agregar("Julio")
console.log(lista);
console.log(lista.length);


