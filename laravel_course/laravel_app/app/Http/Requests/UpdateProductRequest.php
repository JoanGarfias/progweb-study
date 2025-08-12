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
