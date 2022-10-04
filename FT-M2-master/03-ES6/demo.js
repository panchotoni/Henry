function suma(a , b) {
    return a + b
}

const suma2 = (a, b) => {
    return a + b
}

const suma3 = (a, b) => a + b 
////////////////////////////////////////////////

const bob = {
    name: "Bob",
    friends: ["pancho", "yair", "juli"],
    printFriends() {
        this.friends.forEach((friend) => {
            console.log(this.name + " cononce " + friend);
        })
    }
}

bob.printFriends()