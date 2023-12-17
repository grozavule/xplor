<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCustomerRequest;
use App\Models\Customer;

class CustomerController extends Controller
{
    public function index()
    {
        return response()->json(Customer::all());
    }

    public function create(CreateCustomerRequest $request)
    {
        try {
            $validated = $request->validated();

            $customer = new Customer;
            $customer->full_name = $validated['full_name'];
            $customer->email_address = $validated['email_address'];
            $customer->phone_number = $validated['phone_number'];
            $customer->address = $validated['address'];
            $customer->save();

            return response()->json($customer, 200);
        } catch(\Exception $e)
        {
            return response()->json($e->getMessage(), 500);
        }
    }
}
