# Seeders en Laravel

Los seeders permiten poblar la base de datos con datos de prueba.

## Crear un seeder

```bash
php artisan make:seeder CategoryTable
```

## Ejemplo de seeder

```php
DB::table("category")->insert([
    ['name' => 'Comida'],
    ['name' => 'Bebida'],
    ['name' => 'Alcohol'],
]);
```

## Ejecutar seeders

```bash
php artisan db:seed
php artisan db:seed --class=ProductTableSeeder
```

## Seeders con Faker

```php
$faker = Faker::create();
DB::table('product')->insert([
    'name' => $faker->word(),
    'description' => $faker->sentence(),
    'price' => $faker->randomFloat(3, 5, 999),
    'category_id' => $faker->randomElement($categoryIds),
    'created_at' => now(),
    'updated_at' => now(),
]);
```

## Configuración en `DatabaseSeeder.php`

```php
$this->call([
    CategoryTableSeeder::class,
    // Otros seeders...
]);
```
