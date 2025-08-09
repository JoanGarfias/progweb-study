# Migraciones en Laravel

Las migraciones permiten versionar la base de datos.

## Crear una migración

```bash
php artisan make:migration create_product_table
```

## Ejemplo de migración para crear una tabla

```php
Schema::create('product', function (Blueprint $table) {
    $table->id();
    $table->string("name");
    $table->text("description");
    $table->timestamps();
});
```

## Modificar una tabla existente

```bash
php artisan make:migration add_price_to_product_table --table=product
```

```php
Schema::table('product', function (Blueprint $table) {
    $table->decimal("price", 8, 2);
});
```

## Llaves foráneas

```php
Schema::table('product', function (Blueprint $table) {
    $table->unsignedBigInteger("category_id")->nullable();
    $table->foreign("category_id")
        ->references("id")->on("category")
        ->onDelete("set null");
});
```

## Ejecutar y revertir migraciones

```bash
php artisan migrate
php artisan migrate:rollback
php artisan migrate:reset
```

## Resetear y poblar la base de datos

```bash
php artisan migrate:fresh --seed
```
