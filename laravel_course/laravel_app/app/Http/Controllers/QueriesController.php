<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class QueriesController extends Controller
{
    public function get(){
        $products = Product::all();
        return response()->json($products);
    }

    public function getById($id){
        $product = Product::find($id);
        if($product){
            return response()->json($product);
        }
        else{
            return response()->json([
                "error" => "Producto no encontrado",
            ], 404);
        }
    }

    public function getNames(){
        $products = Product::select('name')
                                ->orderBy('name', 'desc')
                                ->get();
        return response()->json($products);
    }

    public function searchName(string $name, float $price){
        $products = Product::select("name", "price", "description")
                                ->where("name", $name) //Por defecto el operador es "="
                                ->where("price", ">", $price)
                                ->orderBy("price", "asc")
                                ->get();
        return response()->json($products);
    }

    public function searchString(string $value){
        $products = Product::select("name", "price")
                            ->where("name", "like", "%{$value}%")
                            ->get();
        return response()->json($products);
    }

    public function searchProductPerNameDesc(string $value){
        $products = Product::select("name", "description")
                            ->where("name", "like", "%{$value}%")
                            ->orWhere("description", "like", "%{$value}%")
                            ->get();
        return response()->json($products);
    }

    public function advancedSearch(Request $request)
    {
        $query = Product::where(function ($q) use ($request) {
                if ($request->filled('name')) {
                    // concatenación para evitar problemas de comillas
                    $q->where('name', 'like', '%' . $request->input('name') . '%');
                }
            })
            ->where(function ($q) use ($request) {
                if ($request->filled('description')) {
                    $q->where('description', 'like', '%' . $request->input('description') . '%');
                }
            })
            ->where(function ($q) use ($request) {
                if ($request->filled('price')) {
                    $price = $request->input('price');

                    // si es numérico en el request, usa comparación normal
                    if (is_numeric($price)) {
                        $q->where('price', '>', (float) $price);
                    } else {
                        // si en la BD price es texto, castealo para comparar correctamente
                        $q->whereRaw('CAST(price AS DECIMAL(10,2)) > ?', [(float) $price]);
                    }
                }
            });

        // debug útil: ver SQL y bindings antes de ejecutar
        // dd($query->toSql(), $query->getBindings());

        $products = $query->get();

        return response()->json($products);
    }


    public function join(){
        $products = Product::select("product.name as nombre", "category.name as categoria")
                            ->join("category", "product.category_id", "=", "category.id")
                            ->get();
        return response()->json($products);
    }

    public function groupBy(){
        $products = Product::select("category.name as categoria", "category.id as id_categoria", DB::raw("COUNT(product.id) as total"))
                            ->join("category", "product.category_id", "=", "category.id")
                            ->groupBy("category.id", "category.name")
                            ->orderBy("category.name")
                            ->get();
        return response()->json($products);
    }
}
