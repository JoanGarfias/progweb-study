<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\CategoryTableSeeder;
use Database\Seeders\ProductTableSeeder;
use App\Models\Category;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        Category::factory(10)->create();
        // $this->call([
        //     CategoryTableSeeder::class,
        //     ProductTableSeeder::class,
        //     //Podemos usar más seeders...
        // ]);
    }
}
