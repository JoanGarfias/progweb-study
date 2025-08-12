# Fascade LOG

Asi como hay Fascade para meter consultas en crud también hay para Logs.

```php
<?php
namespace App\Http\Middleware;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class LogRequest
{
    public function handle(Request $request, Closure $next): Response
    {
        $data = [
            'url' => $request->fullUrl(),
            'ip' => $request->ip(),
            'method' => $request->method(),
            'headers' => $request->headers->all(),
            'body' => $request->getContent()
        ];

        Log::info("Solicitud Recibida", $data);

        return $next($request);
    }
}
```

# Configurar el Loggin
Por defecto se guarda en `laravel.log`

Para configurar el Login debemos ir a:

> config/logging.php

Ahí hay un parámetro llamado `default` el cual usa valores del ENV (`LOG_CHANNEL`, `LOG_STACK`, etc)

# Log por tipo Stack
Significa que puedo guardarlo en multiples lados:
- archivos globales, generados por dia, bases de datos, etc.



# Guardando logs por día

Solo debemos cambiar la configuración del `logging.php` de esta forma:

```php
    'channels' => [

        'stack' => [
            'driver' => 'stack',
            'channels' => ['single', 'daily'],
            //'channels' => explode(',', (string) env('LOG_STACK', 'single')),
            'ignore_exceptions' => false,
        ],
        //mas codigo...
    ]
```
