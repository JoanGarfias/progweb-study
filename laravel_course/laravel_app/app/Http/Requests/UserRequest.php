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
