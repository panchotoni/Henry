function Arbol (data) {
    this.value = data
    this.left = null
    this.right = null
}

Arbol.prototype.insert = function(data) {
    var nuevoArbol = new Arbol(data)
    if(data < this.value) {
        if(this.left === null) {
            this.left = nuevoArbol
        } else {
            this.left.insert(data)
        }
    } else if (data >= this.value) {
        if(this.right === null) {
            this.right = nuevoArbol
        } else {
            this.right.insert(data)
        }
    }
}

var miArbol = new Arbol(10)
miArbol.insert(3)
miArbol.insert(1)
miArbol.insert(11)
console.log(miArbol);