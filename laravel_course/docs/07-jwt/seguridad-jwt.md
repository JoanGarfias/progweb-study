# Seguridad con JWT

Si alguien roba el token puede hacer lo que quiera ya que tendrá acceso.
Lo que se puede hacer es refrescar el token cada hora.

# RefreshToken
Cada hora (o X tiempo) se hace un refreshtoken donde el front-end manda una solicitud y en el backend se vuelve a generar otro token, invalidando el anterior pero devolviendole el token nuevo para que el usuario pueda seguir usando la aplicación sin problemas.

# Claims
Es la parte intermedia de un JWT.
En [JSONWebtoken.io](JSONWebtoken.io) podemos ver el contenido del token, esto está codificado en Base64.
Se puede decodificar en (base64decode)

Si queremos mandar otros datos podemos utilizar el metodo del modelo User.php

> User.php
```php
public function getJWTCustomClaims(){ //Información extrs que quieres tener en el token, deben ser cosas públicas
        return []; //Aqui van otros datos, puede ser el nombre del usuario, etc
}
```