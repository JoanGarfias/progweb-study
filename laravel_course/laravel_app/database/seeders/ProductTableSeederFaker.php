<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class ProductTableSeederFaker extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        $categoryIds = DB::table('category')->pluck("id")->toArray();

        $persons = [];

        for($i = 150 ; $i <= 333; $i++){
            $persons[] = [
                'name' => $faker->word(),
                'description' => $faker->sentence(),
                'price' => $faker->randomFloat(3, 5, 999),
                'category_id' => $faker->randomElement($categoryIds),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }
        DB::table("product")->insert($persons);
    }
}
