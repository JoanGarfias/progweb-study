# Cómo pasarle datos a un Middleware

Cuando tenemos nuestro middleware con un alias podemos pasarle datos al middleware, como cadenas, numeros, etc, de esta forma:

> CheckValueInHeader.php

```php
<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckValueInHeader
{
    public function handle(Request $request, Closure $next, $number, $some): Response
    {
        if($request->header("token") !== "123456"){
            return response()->json([
                "message" => "Acceso denegado $number $some"
            ], 403);
        }

        return $next($request);
    }
}
```

Y para mandar los valores desde api.php

> api.php

```php
Route::get("/backend", [BackendController::class, 'get'])
    ->middleware("checkvalue:15,pato");
```

> [!NOTE]
> Podemos mandar maś datos separados por comas