# Propiedades Computadas

En Vue.js, computed() (o la opción computed: {} en Vue 2) se usa para declarar propiedades computadas, que 
son valores derivados de otras propiedades reactivas (como datos en data()), pero que se recalculan automáticamente cuando esas cambian.

# 🧠 ¿Qué es una propiedad computada?
Es una función que se comporta como una propiedad reactiva, pero su valor se calcula a partir de otras y se actualiza automáticamente cuando esas otras cambian.

> ✅ Se cachea (no se vuelve a ejecutar si las dependencias no han cambiado).