# Never en TypeScript

El tipo never en TypeScript sirve para representar cosas que nunca deberían ocurrir. Es una herramienta para:

- Indicar funciones que no retorna
- Forzar que se cubran todos los casos en condicionales (switch)
- Evitar errores lógicos

Si algo tiene tipo never, es porque no debería pasar jamás. Entonces, si pasa, es un indicio de que hay un bug o un caso sin manejar.

> [!TIP]
> never es como un candado de seguridad que TypeScript pone donde algo no debería existir ni ocurrir.