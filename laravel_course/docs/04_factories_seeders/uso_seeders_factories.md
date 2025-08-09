# Uso de Seeders y Factories

## Ejecutar seeders

```bash
php artisan db:seed
```

## Ejecutar un seeder específico

```bash
php artisan db:seed --class=ProductTableSeeder
```

## Ejecutar factories desde DatabaseSeeder

```php
Category::factory(10)->create();
```

## Resetear y poblar la base de datos

```bash
php artisan migrate:fresh --seed
```
