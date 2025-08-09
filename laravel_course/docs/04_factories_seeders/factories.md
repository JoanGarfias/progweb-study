# Factories en Laravel

Las factories permiten crear datos de prueba de manera masiva usando Eloquent.

## Configuración del modelo

```php
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Product extends Model {
    use HasFactory;
    // ...
}
```

## Crear una factory

```bash
php artisan make:factory CategoryFactory
```

## Ejemplo de factory

```php
class CategoryFactory extends Factory {
    protected $model = Category::class;
    public function definition(): array {
        return [
            'name' => $this->faker->word(),
        ];
    }
}
```

## Usar una factory en DatabaseSeeder

```php
Category::factory(10)->create();
```
