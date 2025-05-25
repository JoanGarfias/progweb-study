# Qué son los Watchers

Son funciones que nos permiten escuchar si alguna palabra de los elementos que tenemos en Vue, han cambiado.

Nos permite controlar ciertos valores de la aplicación dependiendo de si los valores de un objeto cambia o no.

# Ejemplo de un watcher


```ts

    const msg = ref<string>("Hola Pablito");
    const error = ref<string>("");

    watch(msg, (m) => {
        if(!m){ //Si m es vacio...
            error.value = "Este campo es obligatorio";
        }
        else{
            error.value = "";
        }
    })

```

Como se puede observar, `msg` y `error` son referencias y están vinculados a elementos en el html.
`msg` está conectado a un input y a un div. Mientras que `error` está vinculado a un label `(span)`.

Analizando el watcher vemos que su primer parámetro `msg` es la variable que queremos vigilar. Mientras que su segundo parámetro, en este caso `m` es el valor que se le pasa al callback.

El callback es el tratamiento del watcher. Podemos hacer lo que queramos.

Para este escenario el watcher analiza si `msg` está vacío, en caso de que eso ocurra se visualiza el mensaje de error. Si no está vacío no pasa nada, el mensaje de error se mantiene vacío, y por lo tanto no se muestra.