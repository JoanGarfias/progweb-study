```php
//POST
    public function store(Request $request){
        $product = Product::create($request->all());

        return response()->json($product);
    }
```