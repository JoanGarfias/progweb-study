# Unknown y Any

Los tipos de datos `Unknown` y `Any` son muy parecidos. Ambos permiten omitir definir un tipo de dato explicito.

Sin embargo, la diferencia entre ambos es que `any` desactiva el tipado de Typescript.
Mientras que `unknown` acepta cualquier tipo, pero te obliga a realizar validaciones de tipos de dato con `typeof(<variable>)`.