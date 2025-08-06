<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

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
            return response()->json(["error"=> "La persona no existe"], 404);
        }
    }

    public function get(int $id = 0){
        if(isset($this->persons[$id]) && gettype($id) === 'integer'){
            return response()->json([
                'success' => true,
                'message' => "Hola, el backend funciona correctamente",
                'id' => $id,
            ]);
        }else{
            return response()->json(["error"=> "La persona no existe"], 404);
        }
    }


    public function create(Request $request){
        $person = [
            "id" => count($this->persons) + 1,
            "name" => $request->input('name'),
            "age" => $request->input('age')
        ];

        $this->persons[$person['id']] = $person;
        return response()->json([
            'success' => true,
            'person' => $person
        ], 201);
    }

    public function update(Request $request, int $id){
        /**
         * En request->input() podemos pasarle un segundo valor por defecto
         * para detectar que si no llega ese input que se aplique otro valor
         */

        if(isset($this->persons[$id])){
            $this->persons[$id]["name"] = $request->input('name', $this->persons[$id]['name']);
            $this->persons[$id]["age"] = $request->input('age', $this->persons[$id]['age']);
            return response()->json([
                "message" => "Se modificó el usuario con exito",
                "person" => $this->persons[$id],
            ]);
        }

        return response()->json([
            "error" => "La persona no existe, no puede modificarlo.",
        ], 404);
    }

    public function delete(Request $request, int $id){

        /**
         * La función unset() nos permite eliminar un elemento del array
         */

        if(isset($this->persons[$id])){
            unset($this->persons[$id]);

            return response()->json([
                "message" => "La persona ha sido eliminada con exito",
                "persons" => $this->persons,
            ]);
        }
        return response()->json([
            "error" => "La persona no existe, no se puede borrarlo.",
        ], 404);
    }

}
