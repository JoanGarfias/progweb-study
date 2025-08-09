# Consultas con Eloquent ORM

## Obtener todos los registros
```php
Product::all();
```

## Buscar por ID
```php
Product::find($id);
```

## Select específico
```php
Product::select('name')->get();
```

## Order By
```php
Product::orderBy('name', 'desc')->get();
```

## Where
```php
Product::where('name', $name)->where('price', '>', $price)->get();
```

## Like
```php
Product::where('name', 'like', "%{$value}%")->get();
```

## OrWhere
```php
Product::where('name', 'like', "%{$value}%")->orWhere('description', 'like', "%{$value}%")->get();
```

## Join
```php
Product::select('product.name as nombre', 'category.name as categoria')
    ->join('category', 'product.category_id', '=', 'category.id')
    ->get();
```

## Group By
```php
Product::select('category.name as categoria', 'category.id as id_categoria', DB::raw('COUNT(product.id) as total'))
    ->join('category', 'product.category_id', '=', 'category.id')
    ->groupBy('category.id', 'category.name')
    ->orderBy('category.name')
    ->get();
```
