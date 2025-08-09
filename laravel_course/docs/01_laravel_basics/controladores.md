# Controladores en Laravel

## Crear un controlador

```bash
php artisan make:controller <nombre>
```

## Ejemplo de controlador que retorna JSON

```php
public function get(){
    return response()->json([
        'success' => true,
        'message' => "Hola, el backend funciona correctamente",
    ]);
}
```

## Parámetros en rutas

```php
Route::get("/backend/{id}", [BackendController::class, 'get']);
```

```php
public function get(int $id = 0){
    return response()->json([
        'success' => true,
        'message' => "Hola, el backend funciona correctamente",
        'id' => $id,
    ]);
}
```

## Códigos de respuesta

```php
public function get(int $id = 0){
    if(isset($this->persons[$id]) && gettype($id) === 'integer'){
        return response()->json([
            'success' => true,
            'message' => "Hola, el backend funciona correctamente",
            'id' => $id,
        ]);
    }else{
        return response()->json(["error"=> "La persona no existe"], 404);
    }
}
```
