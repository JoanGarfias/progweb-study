function Decorator(target: any){
    console.log(target);
    target.prototype.email = 'pepe@gmail.com';
}

interface User{
    name: string;
    age: number;
    email: string;
}

@Decorator
class User{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const usuario = new User("Pepe", 29);
console.log(usuario);