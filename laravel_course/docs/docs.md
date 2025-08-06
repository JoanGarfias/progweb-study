
# encender servidor
```bash
php -S localhost:8080 -t public
```

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

# Códigos de respuesta en PHP Laravel
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


# Ejecutar todas las migraciones
```bash
php artisan migrate
```

# Migraciones en Laravel
Son para versiones nuestra base de datos

```bash
php artisan make:migration create_product_table
```

# Crear tablas desde Laravel

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->text("description");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product');
    }
};

```

> [!IMPORTANT]
> Notese como se coloca el tipo de datos después de *$table*

> [!NOTE]
> El timestraps() genera dos columnas llamadas `created_at` y `updated_at` las cuales gestiona automaticamente Eloquent al hacer uso del ORM.


# Modificar una tabla existente con Migraciones en Laravel

```bash
php artisan make:migration add_price_to_product_table --table=product
```
> [!NOTE]
> Con este comando Laravel sabrá que haremos cambios sobre la tabla `product`.


```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('product', function (Blueprint $table) {
            //
            $table->decimal("price", 8, 2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('product', function (Blueprint $table) {
            //
            $table->dropColumn("price");
        });
    }
};
```

> Nuestro down() será solamente quitar la columna "price".



# Revertir la última migración realizada

```bash
php artisan migrate:rollback
```

# Revertir todas las migraciones existentes

```bash
php artisan migrate:reset
```

# Llaves foraneas en migraciones