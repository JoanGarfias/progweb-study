```php
    //UPDATE

    public function update(Request $request, $id){
        try{
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'description' => 'required|max:2000',
                'price' => 'required|numeric',
                'category_id' => 'required|exists:category,id',
            ], [
                'name.required' => "El nombre del producto es obligatorio",
                'name.string' => "El nombre debe ser string",
                'name.max' => "Supera los 255 caracteres",
                'description.required' => "La descripción es obligatoria",
            ]);
            $product = Product::find($id);
            $product->update($validatedData);

            return response()->json([
                "message" => "Producto actualizado exitosamente",
                "product" => $product
            ]);
        }catch(Exception $e){
            return response()->json(["error" => $e]);
        }
    }
```