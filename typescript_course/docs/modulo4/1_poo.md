# Paradigma Orientado a Objetos en TypeScript

TypeScript nos da la posibilidad de utilizar el paradigma orientado a objetos.

# Clases

Las clases se definen con la sintaxis:

```ts
    class Persona{
        //Contenido
    }
```

# Atributos y metodos publicos / privados

```ts
    class Usuario{
        name: string;
        email: string;
        age: string;

        constructor(name: string, email: string, age: number){
            this.name = name;
            this.email = email;
            this.age = age;
        }
    }
```

> [!TIP]
> En este ejemplo los atributos son públicos, por lo que podemos acceder a ellos si los instanciamos y hacemos algo como `user.email` o un `user.age`, si queremos evitar eso debemos agregar los atributos de tipo `private`. Lo que significa que si los queremos obtener habrá que hacer `getters`.

```ts
    class Usuario{
        name: string;
        email: string;
        age: string;

        constructor(name: string, email: string, age: number){
            this.name = name;
            this.email = email;
            this.age = age;
        }

        getName(): string{
            return this.name;
        }

        setName(newName): string{
            this.name = newName;
        }
    }

   const user = new Usuario('joan', 'joang9@gmail.com', 20);
   console.log(user.getName());
   //Cambiamos el nombre
   user.setName("Pedro")
```