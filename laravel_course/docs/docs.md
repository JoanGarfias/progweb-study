
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


> Comando
```bash
php artisan make:migration add_price_to_product_table --table=product
```
> [!NOTE]
> Con este comando Laravel sabrá que haremos cambios sobre la tabla `product`.

> Código
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

> Comando
```bash
php artisan make:migration add_category_id_to_product_table --table=product
```

> Código

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('product', function (Blueprint $table) {
            //Debe tener el mismo tipo de datos que los id (llaves primarias)
            $table->unsignedBigInteger("category_id")->nullable();
            $table->foreign("category_id")
                    ->references("id")->on("category")
                    ->onDelete("set null"); /* Qué se hace al eliminar un registro de category en el campo de llave foranea de product */
        });
    }

    public function down(): void
    {
        Schema::table('product', function (Blueprint $table) {
            $table->dropForeign(["category_id"]);
            $table->dropColumn("category_id");
        });
    }
};

```



# Seeders en Laravel

Sirven para poblar las base de datos

> Comando
```bash
php artisan make:seeder CategoryTable
```

> Código
```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoryTable extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Este objeto es código directo en la BD, no es optimo usarlo en otros códigos
        DB::table("category")->insert([

            [
                'name' => 'Comida',
            ],
            [
                'name' => 'Bebida',
            ],
            [
                'name' => 'Alcohol',
            ],

        ]);
    }
}
```

> [!IMPORTANT]
> Tambien hay que tomar en cuenta el archivo *DatabaseSeeder.php* ya que ese control que seeders se ejecutan al momento de ejecutar los seeders.

```php
<?php
namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\CategoryTableSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'testssyy@example.com',
        ]);

        $this->call([
            CategoryTableSeeder::class,
            //Podemos usar más seeders...
        ]);
    }
}

```

# Ejecutar los Seeders

```bash
php artisan db:seed
```

# Resetear base de datos
```bash
php artisan migrate:fresh --seed
```
> [!IMPORTANT]
> Esto borrará todas las tablas y ejecutará los seeders.


# Seeders y llaves foraneas
Supongamos que queremos insertar datos en una tabla pero que tiene una columna que es llave foranea, entonces podemos apoyarnos del Fascades DB y un par de funciones de PHP
como rand() y array_rand() para llenar los datos cuidando la consistencia.

> Comando

> [!NOTE]
> Esto ejecuta solo un seeder en especifico
```bash
php artisan db:seed --class=ProductTableSeeder
```

> Código

```php
<?php
namespace Database\Seeders;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ProductTableSeeder extends Seeder
{
    public function run(): void
    {
        //Pluck genera un arrat de valores, sin los ids (llaves)
        $categoryIds = DB::table("category")->pluck("id")->toArray();
        if(empty($categoryIds)){
            $this->command->warn("No hay categorias");
            return;
        }

        $products = [];

        for($i = 1; $i <= 50; $i++){
            $products[] = [
                'name' => "Producto " . $i,
                'description' => "Descripción del producto " . $i,
                'price' => rand(100,1000), //Genera un numero aleatorio entre 100 y 1000
                'category_id' => $categoryIds[array_rand($categoryIds)], //Devuelve un valor aleatorio dentro del array
            ];
        }


        DB::table("product")->insert($products); //Inserta de forma masiva los datos
    }
}
```


# Seeders con datos aleatorios generados con Faker

> Comando
```bash
php artisan db:seed --class=ProductTableSeederFaker
```

> Código

```php
<?php
namespace Database\Seeders;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class ProductTableSeederFaker extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create();
        $categoryIds = DB::table('category')->pluck("id")->toArray();

        $persons = [];

        for($i = 150 ; $i <= 333; $i++){
            $persons[] = [
                'name' => $faker->word(),
                'description' => $faker->sentence(),
                'price' => $faker->randomFloat(3, 5, 999),
                'category_id' => $faker->randomElement($categoryIds),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        DB::table('product')->insert($persons);
    }
}
```



# Factories en PHP Laravel

Las factories son para meter información de manera masiva sin hacerlo de forma manual (como los seeders)

Para usar las factories requerimos a los modelos. 

# Modelos en PHP Laravel
Son una representación de una tabla de la base de datos.

```bash
php artisan make:model "nombre"
```

De esta forma solo le indicamos en la clase el nombre de la tabla en la base de datos.
```php
<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    protected $table = 'product';
}
```

# Sobre modelos en PHP Laravel
Cuando usamos Eloquent la información la podemos proteger.
Es decir, le podemos decir al ORM qué datos van a poder ser rellenados de forma masiva.

Esto significa que ciertos campos no puedes meterlos con el modelo.

# Proteger atributos de inserciones masivas con Eloquent ORM
Para proteger ciertos campos de la base de datos podemos indicar en el modelo cúales son los campos que SI pueden ser llenados
de forma masiva.

De la siguiente forma:
```php
<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    protected $table = 'product';
    protected $fillable = [ /**Determina cuales son los campos que se pueden insertar de forma masiva, los que no aparezcan acá no podrán ser rellenados
        Eloquent ORM ya gestiona esto */
        'name',
        'price',
        'description',
        'category_id',
    ];
}
```


# Llaves foraneas en Eloquent ORM

Para indicar que un atributo pertenece a otra tabla o está conectado/depende de otra tabla podemos utilizar la función `belongsTo()` que significa `pertenece a`.
Debemos usarla dentro de una función del modelo que contiene la llave foranea.

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    protected $table = 'product';
    protected $fillable = [
        'name',
        'price',
        'description',
        'category_id', //Este atributo es una llave foranea, esto proviene de la tabla Category
    ];

    public function category(){ /**Con esto le decimos a Eloquent que nuestro atributo category pertenece a otra tabla, en este caso otro modelo llamado Category */
        return $this->belongsTo(Category::class);
        //Tomar en cuenta que también se debe configurar la relación en la tabla Category.
    }
}
```

# Relación 1:M en Eloquent ORM

Cuando una tabla da su atributo id como llave foranea para otras tablas entonces quiere decir que es una relación 1:M y esto se tiene que definir para que Eloquent
sepa cómo manejarlo. Esto se logra con el metodo `hasMany()`. De la siguiente manera:

```php
<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Category extends Model
{
    protected $table = 'category';
    protected $fillable = [
        'name',
    ];

    public function products(){
        return $this->hasMany(Product::class);
    }
}
```


# Trabajando con Factories

Lo primero que debemos hacer para trabajar con Factories es configurar los modelos para usar las Factories, de la siguiente forma:

```php
<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory; // Esto es necesario para usar las fábricas de Eloquent
class Product extends Model
{
    use HasFactory; //Esto es necesario para usar las fábricas de Eloquent
    protected $table = 'product';
    protected $fillable = [
        'name',
        'price',
        'description',
        'category_id',
    ];
    public function category(){
        return $this->belongsTo(Category::class);
    }
}
```

Luego debemos crear nuestro factory, algo como:
```bash
php artisan make:factory CategoryFactory
```

Después definimos qué modelo usaremos dentro de la Factory.
> CategoryFactory.php

```php
<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Category; //Esto es necesario para usar las fábricas de Eloquent, debemos indicar el modelo que estamos creando

class CategoryFactory extends Factory
{
    protected $model = Category::class; //Esto es necesario para usar las fábricas de Eloquent
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
        ];
    }
}
```

# Ejecutar un Factory
Debemos modificar el archivo `DatabaseSeeder.php` el mismo que usamos para los Seeders, pero ahora manejaremos las factories ahí mismo.
La factory se maneja desde el modelo, por lo que debemos importar primero el modelo y luego buscar su metodo `::factory()` y usar los metodos necesarios
para el registro.
```php
<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\Category; //Esto es necesario ya que el metodo ::factory() viene en el modelo

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        Category::factory(10)->create(); //Con esto indicamos que nos cree 10 registros. La lógica viene incrustrada dentro del metodo create()
    }
}
```

# Eloquent ORM

Suponiendo que tenemos un model "Product" hay varios metodos que podemos usar
```php Product::all()```
> [!NOTE]
> Obtiene todos los productos.

```php Product::find($id)```
> [!NOTE]
> Filtra por id, si no se encuentra devuelve `null`.

# Select de SQL en Eloquent
Eloquent trae un metodo llamado `select` el cual podemos usar para seleccionar qué columnas queremos usar.
```php
public function getNames(){
    $products = Product::select('name')
                            ->get();
    return response()->json($products);
}
```

# ORDER BY de SQL en Eloquent
Podemos ordenar por un campo en especifico con eloquent gracias a la función `orderBy()`.
```php
public function getNames(){
    $products = Product::select('name')
                            ->orderBy('name', 'desc') //Esto también puede ser "asc"
                            ->get();
    return response()->json($products);
}
```

# WHERE de SQL en Eloquent (filtrar datos)

```
public function searchName(string $name, float $price){
    $products = Product::select("name", "price", "description")
                            ->where("name", $name) //Por defecto el operador es "="
                            ->where("price", ">", $price)
                            ->orderBy("price", "asc")
                            ->get();
    return response()->json($products);
}
```