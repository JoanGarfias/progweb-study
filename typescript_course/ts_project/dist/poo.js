"use strict";
class Usuario {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getEdad() {
        return this.age;
    }
    setName(newName) {
        this.name = newName;
    }
}
const user = new Usuario('joan', 'joang9@gmail.com', 20);
console.log(user.getName());
//Cambiamos el nombre
user.setName("Pedro");
console.log(user.getName());
