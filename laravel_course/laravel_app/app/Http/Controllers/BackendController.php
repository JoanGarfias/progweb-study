<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BackendController extends Controller
{

    private $persons = [
        1 => ['name' => 'Joan Garfias', 'age' => 16],
        2 => ['name' => 'John Doe', 'age' => 29],
        3 => ['name' => 'Jane Smith', 'age' => 41],
    ];

    public function getAll(){
        return response()->json(
            $this->persons
        );
    }

    public function getPerson(int $id){
        if(isset($this->persons[$id]) and gettype($id) === 'integer'){
            return response()->json($this->persons[$id]);
        }
        else{
            return response()->json([
                'error' => "No existe la persona con el id: $id",
            ]);
        }
    }

    public function get(int $id = 0){
        return response()->json([
            'success' => true,
            'message' => "Hola, el backend funciona correctamente",
            'id' => $id,
        ]);
    }
}
