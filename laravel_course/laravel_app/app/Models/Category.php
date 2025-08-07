<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory; // Esto es necesario para usar las fábricas de Eloquent

class Category extends Model
{
    use HasFactory; //Esto es necesario para usar las fábricas de Eloquent
    protected $table = 'category';

    protected $fillable = [
        'name',
    ];

    public function products(){
        return $this->hasMany(Product::class);
    }
}
