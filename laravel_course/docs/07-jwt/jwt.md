# Json Web Tockens

Sirven para identificar a un usuario, permisos, etc.

Antes de generar un JWT debemos autenticarnos a hacer un login en el cual nosotros mandamos un correo y contraseña y se regresa un JWT.

Formato de JWT

1) Header: va tener el algoritmo con el cual se generan los tokens y el tipo de token.

2) Payload: es el cuerpo del mensaje. Aquí van a ir cosas como:
- username
- correo
- cuando se generó el token
- en cuanto tiempo expira el token
- rol

3) Signature: es la firma. Esto se tiene que configurar