# Configuración de config/auth.php

Se necesita cambiar el archivo auth.php para que utilice el modo API, ya que por defecto viene integrado con web.

Tomar en cuenta:

```php
'defaults' => [
        'guard' => 'api',
        'password' => 'users',
    ],
'guards' => [
        'web' => [
            'driver' => 'session',
            'provider' => 'users',
        ],
        'api' => [
            'driver' => 'jwt',
            'provider' => 'users',
        ],
    ],
```
