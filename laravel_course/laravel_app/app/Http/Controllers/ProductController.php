<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class ProductController extends Controller
{
    /**Esta clase debe cumplir ciertos requisitos definidos en la documentación de Laravel
     *
     * https://laravel.com/docs/12.x/controllers
     *
     */

    //GET con Paginado
    public function index(Request $request){
        //Cuantos registros quieres por pagina
        $perPage = $request->query("per_page", 10);
        //Que pagina quieres
        $page = $request->query("page", 0);
        //Apartir de qué registro haremos la solicitud
        $offset = $page * $perPage;

        /**
         * El skip es para omitir los primeros N registros
         * El take() indica cuantos riegistros debe regresar
         */
        $products = Product::skip($offset)
                    ->take($perPage)
                    ->get();

        return response()->json(
            $products
        );
    }

    //POST
    public function store(Request $request){
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
            $product = Product::create($validatedData);

            return response()->json($product);

        }catch(ValidationException $e){
            return response()->json([
                "error" => $e->errors()
            ], 422);
        }
    }


    //UPDATE

    public function update(UpdateProductRequest $request, Product $product)
    {
        try {
            $validatedData = $request->validated();
            $product->update($validatedData);

            return response()->json([
                "message" => "Producto actualizado exitosamente",
                "product" => $product
            ]);
        } catch (\Exception $e) {
            return response()->json(["error" => $e->getMessage()]);
        }
    }


    public function destroy(Product $product){
        $product->delete();
        return response()->json([
                "message" => "Producto eliminado exitosamente",
            ]);
    }

}
