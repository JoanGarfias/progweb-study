# Configurando JWT

[Documentación de jwt-auth](https://jwt-auth.readthedocs.io/en/develop/)


### Instalación
```bash
composer require tymon/jwt-auth
```

### Generar el archivo `config/jwt.php`

```bash
php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
```

### Generando la clave privada

```bash
php artisan jwt:secret
```

> [!NOTE]
> Esto genera una clave en el `.env` de forma aleatoria.


# Parámetros de `config/jwt.php`


### algo
Es el algoritmo que se usa para encriptar, normalmente será `H256` pero
en proyectos legacy puede ser diferente.

### ttl
Tiempo de expiración del token
```php
'ttl' => env('JWT_TTL', 60),
```
> [!NOTE]
> Este TTL está configurado para 60 minutos