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