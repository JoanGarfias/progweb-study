<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Category; //Esto es necesario para usar las fábricas de Eloquent, debemos indicar el modelo que estamos creando

class CategoryFactory extends Factory
{
    protected $model = Category::class; //Esto es necesario para usar las fábricas de Eloquent
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
        ];
    }
}
