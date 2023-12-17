<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCustomerRequest;

class CustomerController extends Controller
{
    public function index()
    {
        return response()->json(Customer::all());
    }

    public function create(CreateCustomerRequest $request)
    {

    }
}
