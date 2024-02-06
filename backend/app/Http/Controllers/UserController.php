<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
// Request
use Illuminate\Http\Request;

class UserController extends BaseController
{
    //register function called when user registers
    public function register(Request $request)
    {
        //validate incoming request
        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);

    }

}
