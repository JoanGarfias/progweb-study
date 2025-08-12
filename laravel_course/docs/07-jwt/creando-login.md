# Crear un login con JWT

Lo primero que hay que hacer es configurar el modelo para admitir JWT, luego creamos los request para login y register.

### Configurando el modelo User para JWT
Debemos implementar `JWTSubject` y cumplir con los metodos del contrato `getJWTIdentifier()` y `getJWTCustomClaims()` de la siguiente forma:


> User.php
```php
<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use SoftDeletes, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    //Metodos de JWT, es el contrato para cumplir con JWTSubject
    public function getJWTIdentifier(){
        return $this->getKey();
    }

    public function getJWTCustomClaims(){ //Información extrs que quieres tener en el token, deben ser cosas públicas
        return [];
    }

}
```

Luego creamos un `LoginRequest` y `UserRequest` con:
> php artisan make:request LoginRequest
> php artisan make:request UserRequest



> UserRequest.php
```php
<?php

namespace App\Http\Requests;

use App\Http\Requests\ApiFormRequest;

class UserRequest extends ApiFormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255|unique:users',
            'password' => 'required|string|min:6',
        ];
    }

    public function messages(){
        return [
            'name.required' => 'El nombre es obligatorio',
            'name.string' => 'El nombre debe ser un string',
            'name.max' => 'El nombre no puede exceder 255 carácteres',
            'email.string' => 'El email debe ser un string',
            'email.max' => 'El email no puede exceder 255 carácteres',
            'email.unique' => 'El email ya está en uso',
            'password.required' => 'La contraseña es obligatoria',
            'password.string' => 'La contraseña debe ser un string',
            'password.min' => 'La contraseña debe tener al menos 6 carácteres',
        ];
    }
}
```

> LoginRequest.php

```php
<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'email' => 'required|string|max:255',
            'password' => 'required|string|min:6',
        ];
    }

    public function messages(){
        return [
            'email.string' => 'El email debe ser un string',
            'email.max' => 'El email no puede exceder 255 carácteres',
            'password.required' => 'La contraseña es obligatoria',
            'password.string' => 'La contraseña debe ser un string',
            'password.min' => 'La contraseña debe tener al menos 6 carácteres',
        ];
    }
}
```
> [!NOTE]
> Este no tiene el campo del nombre y además el correo no debe ser único ya que este Request está enfocado a Logear.


### Creando el controlador para el registro y login

> php artisan make:controller AuthController

> AuthController.php
```php
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
```



### Generando las rutas en api.php
```php
Route::post("/register", [AuthController::class, 'register']);
Route::post("/login", [AuthController::class, 'login']);
```

### Protegiendo rutas con el middleware de jwt
```php
Route::get("/backend", [BackendController::class, 'get'])
    ->middleware("jwt.auth");
```

> [!NOTE]
> El middleware `jwt.auth` es el middleware para verificar que estés autentificado.
> El usuario debe mandar el token.


### Registrar el middleware de jwt como un grupo de middleware en api.php
Esto se hace para evitar escribir muchas veces el middleware en una ruta.

```php
Route::middleware("jwt.auth")->group(function(){
    Route::get("who", [AuthController::class, 'who']);
    Route::post("logout", [AuthController::class, 'logout']);
    Route::post("fresh", [AuthController::class, 'refresh']);
});
```


### Dónde guarda Laravel la información de las sesiones/tokens/jwt

En el archivo de configuración de `cache.php` se puede ver como se guarda información del framework, por defecto usa database.

```php
'default' => env('CACHE_STORE', 'database'),
```

> [!NOTE]
> Por defecto usa database, pero también puede ser file, redis, memcached, etc.
