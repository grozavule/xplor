<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    public $timestamps = false;

    public function attributesToArray(): array
    {
        $attributes = parent::attributesToArray();
        $attributeOrder = ['id', 'full_name', 'email_address', 'phone_number', 'address'];

        $rearranged = [];
        foreach($attributeOrder as $attribute)
        {
            if(array_key_exists($attribute, $attributes))
            {
                $rearranged[$attribute] = $attributes[$attribute];
            }
        }
        return $rearranged;
    }
}
