<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends ApiFormRequest
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
            'email.required' => "El email es obligatorio",
            'email.string' => 'El email debe ser un string',
            'email.max' => 'El email no puede exceder 255 carácteres',
            'password.required' => 'La contraseña es obligatoria',
            'password.string' => 'La contraseña debe ser un string',
            'password.min' => 'La contraseña debe tener al menos 6 carácteres',
        ];
    }
}
