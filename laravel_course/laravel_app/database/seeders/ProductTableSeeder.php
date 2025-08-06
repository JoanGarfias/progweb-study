<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductTableSeeder extends Seeder
{
    public function run(): void
    {
        //Pluck genera un arrat de valores, sin los ids (llaves)
        $categoryIds = DB::table("category")->pluck("id")->toArray();
        if(empty($categoryIds)){
            $this->command->warn("No hay categorias");
            return;
        }

        $products = [];

        for($i = 1; $i <= 50; $i++){
            $products[] = [
                'name' => "Producto " . $i,
                'description' => "Descripción del producto " . $i,
                'price' => rand(100,1000), //Genera un numero aleatorio entre 100 y 1000
                'category_id' => $categoryIds[array_rand($categoryIds)], //Devuelve un valor aleatorio dentro del array
            ];
        }
        DB::table("product")->insert($products); //Inserta de forma masiva los datos
    }
}
