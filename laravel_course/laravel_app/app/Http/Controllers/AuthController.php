<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(UserRequest $request){
        $validatedData = $request->validated();

        $user = User::create([
            'name' => $validatedData["name"],
            'email' => $validatedData["email"],
            'password' => bcrypt($validatedData["password"])
        ]);

        return response()->json([
            "message" => "Se ha creado el usuario correctamente",
        ], 201);
    }

    public function login(LoginRequest $request){
        $validatedData = $request->validated();

        $credentials = [
            "email" => $validatedData["email"],
            "password" => $validatedData["password"]
        ];

        try{
            if(! $token = JWTAuth::attempt($credentials)){
                return response()->json([
                    "error" => "Usuario o contraseña invalida"
                ], 403);
            }

        }catch(JWTException $e){
            return response()->json([
                "error" => "No se pudo generar el token"
            ], 500);
        }

        return $this->respondWithToken($token);
    }

    //Para saber los datos de la persona autenrtificada
    public function who(){
        $user = auth()->user();
        return response()->json($user);
    }

    //Para invalidar el token y cerrar sesión
    public function logout(){
        try{
            $token = JWTAuth::getToken();
            JWTAuth::invalidate($token);
            return response()->json([
                "message" => "Se ha cerrado la sesión correctamente",
            ]);
        }catch(JWTException $e){
            return response()->json([
                'error' => "No se pudo cerrar la sesión, el token no es valido"
            ], 500);
        }
    }

    public function refresh(){
        try{
            $token = JWTAuth::getToken();
            $newToken = auth()->refresh();
            JWTAuth::invalidate($token);

            $this->respondWithToken($newToken);
        }catch(JWTException $e){
            return response()->json([
                "error" => "No se pudo generar el token"
            ], 500);
        }
    }


    //Para mandar más datos en la respuesta
    protected function respondWithToken($token){
        return response()->json(['token' => $token,
        'token_type' => 'bearer',
        'expires_in' => auth()->factory()->getTTL(),
        ]);
    }

}
