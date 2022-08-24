function LinkedList (){
    this.head = null;
    this.size = 0;
}

function Node(data){
    this.data = data;
    this.next = null;
}

LinkedList.prototype.add = function (value) {
    const newNode = new Node(value)
    let current = this.head; //aca hacemos referencia a head, en current
    if (!current) {
        this.head = newNode
        this.size++
        return newNode
    }
    while(current.next){ //Si hay un nodo adelante del current, me muevo
        current = current.next //ahora current deja de estar en el head y apunta al nodosiguiente, haasta que no haya nada y sea falso. 
    } 
    current.next = newNode; //Cuando salimos del while significa que current.next es null, POR ESO GUARDAMOS NUESTRO NUEVO NODO AHI.
    this.size++
};

const miLista = new LinkedList();
miLista.add(10);
miLista.add(11);
miLista.add(25)

console.log(miLista) 

