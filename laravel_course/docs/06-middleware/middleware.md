# Qué es un Middleware

Es una capa que intercepta una solicitud, muy util para:
- autentificación
- permisos
- logs
- etc

# Ejemplo básico

Primero, podemos crear un middleware usando artisan:

> php artisan make:middleware CheckValueInHeader

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckValueInHeader
{
    public function handle(Request $request, Closure $next): Response
    {
        if($request->header("token") !== "123456"){
            return response()->json([
                "message" => "Acceso denegado"
            ], 403);
        }

        return $next($request);
    }
}
```


# Registrar middleware de forma global

```php
<?php
use App\Http\Middleware\CheckValueInHeader;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        //
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
```


# Registrar Middleware por cada ruta

```php
Route::apiResource("/products", ProductController::class)
    ->middleware(CheckValueInHeader::class);
```

# Registrar alias para un middleware

Modificamos el archivo bootstrap/app.php

```php
->withMiddleware(function (Middleware $middleware): void {
        //
        $middleware->alias([
            "checkvalue" => CheckValueInHeader::class
        ]);
    })
```

Ahora podemos usarlo de esta forma:

```php
Route::get("/backend", [BackendController::class, 'get'])
    ->middleware("checkvalue");
```