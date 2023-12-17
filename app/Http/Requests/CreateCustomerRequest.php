<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateCustomerRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'full_name' => ['required', 'string', 'max:100'],
            'email_address' => ['required', 'unique:customers,email_address', 'email:dns', 'max:100'],
            'phone_number' => ['required', 'string', 'max:20'],
            'address' => ['required', 'string']
        ];
    }
}
