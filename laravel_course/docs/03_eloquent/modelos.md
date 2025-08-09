# Modelos en Laravel

Los modelos representan tablas de la base de datos y permiten interactuar con ellas usando Eloquent ORM.

## Crear un modelo

```bash
php artisan make:model Nombre
```

## Ejemplo de modelo

```php
class Product extends Model {
    protected $table = 'product';
}
```

## Atributos protegidos para inserciones masivas

```php
protected $fillable = [
    'name', 'price', 'description', 'category_id',
];
```

## Relaciones

### belongsTo
```php
public function category() {
    return $this->belongsTo(Category::class);
}
```

### hasMany
```php
public function products() {
    return $this->hasMany(Product::class);
}
```
