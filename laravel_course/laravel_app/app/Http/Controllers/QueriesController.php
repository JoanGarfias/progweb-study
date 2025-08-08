<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

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
}
