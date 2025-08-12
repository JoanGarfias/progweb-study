En lugar de tener varias validaciones con validate() podemos crear
nuestras propias reglas.

Creamos un FormRequest

> php artisan make:request UpdateProductRequest

> [!NOTE]
> Cambiar el authorize() para que retorne true

```php
<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'required|max:2000',
            'price' => 'required|numeric',
            'category_id' => 'required|exists:category,id',
        ];
    }

    public function messages(){
        return [
                'name.required' => "El nombre del producto es obligatorio",
                'name.string' => "El nombre debe ser string",
                'name.max' => "Supera los 255 caracteres",
                'description.required' => "La descripción es obligatoria",
        ];
    }
}
```

> [IMPORTANT]
> Si queremos visualizar los mensajes de errores es importante que consideremos estas 2 opciones:
> 1) El cliente siempre manda el header: Accept: application/json
> 2) Sobrescribir la función `failedValidation` del FormRequest

# Cómo sobrescribir el `failedValidation` del FormRequest

Debemos crear esta función dentro de nuestro FormRequest
```php
protected function failedValidation(Validator $validator)
{
    throw new HttpResponseException(
        response()->json([
            "message" => "Error de validación",
            "errors" => $validator->errors()
        ], 422)
    );
}
```

> [!NOTE]
> Se debe usar el namespace de Validator para evitar errores



# TIP: Crear una clase para generalizar el metodo de envio de errores de api

1) Creamos un `ApiFormRequest.php` que herede de la clase en `FormRequest` en `app/Http/Request` y dentro ponemos el `failedValidation`.

2) Luego hacemos que nuestros FormRequest (ejemplo: `UpdateProductRequest`) herede de la clase nueva `ApiFormRequest`.

### Resultado:

> app/Http/Request/ApiFormRequest.php
```php
<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class ApiFormRequest extends FormRequest{
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            response()->json([
                "message" => "Error de validación",
                "errors" => $validator->errors()
            ], 422)
        );
    }
}
```

> app/Http/Request/ProductFormRequest.php
```php
<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class UpdateProductRequest extends ApiFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'required|max:2000',
            'price' => 'required|numeric',
            'category_id' => 'required|exists:category,id',
        ];
    }

    public function messages(){
        return [
            'name.required' => "El nombre del producto es obligatorio",
            'name.string' => "El nombre debe ser string",
            'name.max' => "Supera los 255 caracteres",
            'description.required' => "La descripción es obligatoria",
            'price.required' => "El precio es obligatorio",
            'category_id.required' => "La categoria es obligatoria",
        ];
    }

}
```