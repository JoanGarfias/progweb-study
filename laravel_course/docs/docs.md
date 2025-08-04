# api.php

Este archivo se debe primero configurar en bootstrap/app.php y dentro tendrá rutas parecidas a web.php pero se enfocan en endpoints del back-end.
Para acceder a estos archivos hay que entrar en la ruta del navegador *api/ruta*

# Crear un controlador

```bash
php artisan make:controller <nombre>
```

# Retornar jsons con Laravel

> BackendController.php
```php
    public function get(){
        return response()->json([
            'success' => true,
            'message' => "Hola, el backend funciona correctamente",
        ]);
    }
```

# Parámetros en APIs

> api.php
```php
Route::get("/backend/{id}", [BackendController::class, 'get']);
```

> BackendController.php
```php
    class BackendController extends Controller
    {
        public function get(int $id = 0){
            return response()->json([
                'success' => true,
                'message' => "Hola, el backend funciona correctamente",
                'id' => $id,
            ]);
        }
    }
```

> [!NOTE]
> En este caso el parámetro id es opcional y por defecto será un entero con valor de 0 en caso de no recibirse el parámetro id.