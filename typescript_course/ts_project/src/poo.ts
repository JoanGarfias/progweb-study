class Usuario{
    private name: string;
    private email: string;
    private age: number;

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getName(): string{
        return this.name;
    }

    getEdad(): number{
        return this.age;
    }

    setName(newName : string): void{
        this.name = newName;
    }
}

const user = new Usuario('joan', 'joang9@gmail.com', 20);
console.log(user.getName());
//Cambiamos el nombre
user.setName("Pedro")
console.log(user.getName());