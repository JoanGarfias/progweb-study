# Creando un middleware Log

Sirve para guardar cosas cuando lo necesitemos, monitoreo, etc.

```php
<?php
namespace App\Http\Middleware;
use Closure;
use Illuminate\Http\Request;
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

        dd($data);
        return $next($request);
    }
}
```