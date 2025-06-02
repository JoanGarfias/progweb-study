<img  align="left" width="150" style="float: left;" src="https://www.upm.es/sfs/Rectorado/Gabinete%20del%20Rector/Logos/UPM/CEI/LOGOTIPO%20leyenda%20color%20JPG%20p.png">
<img  align="right" width="150" style="float: right;" src="https://miriadax.net/miriadax-theme/images/custom/logo_miriadax_new.svg">

<br/><br/><br/>
# Ejemplo Progressive Web Application (PWA)
# Módulo 10:  Diseño de Aplicaciones para Android y iOS con Aplicaciones Web Progresivas (PWA)

Versión: 28 de Junio de 2020

## Objetivos

 - Transformar una aplicación web en una PWA.
 - Entender la potencia de las PWA y todas las posibilidades que ofrecen.

## Descripción del ejemplo

Este ejemplo se basa en transformar la aplicación web de base de datos de películas utilizada en el módulo 4 del MOOC en una PWA.
Para ello partiremos de la rama de este repositorio llamada "sinPWA" e iremos aplicando paso a paso los cambios necesarios hasta tranformar dicha aplicación web en una PWA (rama master).
IMPORTANTE: La aplicación web que se encuentra en la rama "sinPWA" no está completa (en el código proporcionado sólo está implementada la funcionalidad de listar las películas existentes y editar película) por tratarse de la utilizada para la entrega del módulo 4 del MOOC. Pero igualmente se pueden ir aplicando los diferentes pasos sobre la entrega que el alumno realizó en el MOOC.
Esta es la aplicación web en cuestión:
<p align="center">
  <img width="568" height="320"  src="https://raw.githubusercontent.com/CORE-2020/Entrega2_MVC_Cliente/master/files/enunciado.png">
</p>


## Descargar el código del proyecto

El proyecto debe clonarse en el ordenador desde el que se está trabajando:

```
$ git clone https://github.com/ging-moocs/MOOC_html_mod10-PWA_ejemplo
```
A continuación se debe acceder al directorio de trabajo.

```
$ cd MOOC_html_mod10-PWA_ejemplo
```

## Arrancar la aplicación web
El fichero server.js contiene un servidor muy simple que tan solo sirve archivos estáticos que se encuentren en la carpeta "public" y redirige el tráfico http a https (condición indispensable para las PWAs).
Para ejecutar dicho servidor y poder ver nuestra aplicación web funcionando ejecutamos:
```
$ npm start
```
