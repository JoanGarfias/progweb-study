# Curso de CSS: Resumen y Apuntes

Este archivo contiene un resumen bien estructurado de los temas aprendidos durante el curso de CSS. Está diseñado para verse bien en GitHub y servir como referencia rápida para los conceptos clave.

---

## 1. Display: inline, block e inline-block

- `display: inline;`  
  Se comporta como texto, no acepta ancho ni alto.

- `display: block;`  
  Ocupa todo el ancho disponible, puede tener ancho y alto.

- `display: inline-block;`  
  Combina comportamientos: en línea pero acepta ancho y alto.

---

## 2. Margin

El **margin** es el espacio hacia afuera del borde del contenido.  
Orden: `top`, `right`, `bottom`, `left`.

---

## 3. Padding

El **padding** es el espacio hacia adentro, desde el borde hacia el contenido.  
**No** acepta valores negativos.

---

## 4. Centrar un div

```css
.div-center {
    margin-left: auto;
    margin-right: auto;
}
```

---

## 5. Modelo de Caja

- Contenido
- Padding
- Borde  
**Nota**: El `margin` no pertenece a la caja.

---

## 6. `box-sizing`

Controla si el tamaño incluye padding y borde.  
`box-sizing: border-box;` es común para diseños responsivos.

---

## 7. Propiedades lógicas

Ayudan en diseños multilenguaje:

- `margin-block-start`, `margin-block-end`
- `padding-inline-start`, `padding-inline-end`

---

## 8. Propiedad `border`

Shorthand para:

```css
border: 1px solid red;
```

Equivale a:

- `border-width`
- `border-style`
- `border-color`

---

## 9. `border-radius` y formas

Permite crear formas (círculos, óvalos, etc):

```css
.circle {
    border-radius: 30px 60px 120px 90px;
}
```

Triángulos con:

```css
.box {
    border-width: 50px;
    border-color: red transparent blue transparent;
}
```

---

## 10. `outline`

Borde externo al modelo de caja.  
Útil para formularios (`:focus`, validación, etc).

---

## 11. `box-shadow`

```css
box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.8);
```

Valores: desplazamiento horizontal, vertical, difuminado, expansión, color.

---

## 12. Pseudoclases comunes

- `:hover` → al pasar el mouse
- `:active` → al hacer clic
- `:visited` → enlace visitado

Diferencia importante:

```css
h1:hover {}        /* H1 en hover */
h1 :hover {}       /* Hijos de H1 en hover */
```

---

## 13. Más pseudoclases

- `:target` → mostrar contenido al navegar por anchors
- `:not()` → excluir elementos de una regla
- `:empty` → selecciona elementos sin contenido

---

## 14. Pseudoclases de formularios

- `:required`, `:checked`, `:focus`
- `:is()` → simplifica múltiples selectores
- `:where()` → como `:is()` pero con menor especificidad

---

## 15–18. Selectores por posición

- `:first-child`, `:last-child`
- `:first-of-type`, `:last-of-type`
- `:nth-child(n)`, `:nth-last-child(n)`
- `:nth-of-type(n)`

Ejemplo:

```css
.item:nth-child(odd) { background: red; }
.item:nth-child(even) { background: green; }
```

---

## 19–26. Fondo (`background`)

Propiedades:

- `background-color`
- `background-image`
- `background-size`
- `background-repeat`
- `background-position`
- `background-clip`
- `background-origin`
- `background-attachment`

### Gradientes

```css
background: linear-gradient(to right, red, yellow);
background: radial-gradient(circle, red, blue);
```

### Shorthand

```css
background: image position / size repeat attachment origin clip;
```

---

## 27–29. Colores

- Propiedades: `color`, `background-color`
- Notaciones:
  - `rgb(255, 0, 0)`
  - `#ff0000`
  - `hsl(0, 100%, 50%)`

`transparent` mantiene el espacio pero oculta el contenido visual.

---

## 30–32. Gradientes

- `linear-gradient()`
- `radial-gradient()`
- Gradientes repetidos (`repeating-linear-gradient()`)

---

## 33. Unidades de medida

- `px` (absoluta)
- `em` (relativa al padre)
- `rem` (relativa al `html`, usualmente 16px)

---

## 34. Propiedades de texto

```css
font-size: 1.2rem;
font-style: italic;
font-weight: 400;
text-align: justify;
line-height: 1.5;
text-transform: uppercase;
text-decoration: underline;
letter-spacing: 0.1em;
word-spacing: 0.2em;
```

---

## Fin del curso 🎉

¡Ahora tienes una guía práctica de CSS que puedes consultar siempre que lo necesites!
