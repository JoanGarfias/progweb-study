# Terminable Middleware

Son middleware que se ejecutan cuando ya le respondimos al cliente,
son utiles ya que no afectan la velocidad de respuesta.


Se agrega la función `terminate()` al middleware y ahi es donde se realizan las acciones, ejemplo:

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

    public function terminate(Request $request, Response $response){
        Log::info("Respuesta enviada", [
            "status" => $response->getStatusCode(),
            "content" => $response->getContent()
        ]);
    }
}
```