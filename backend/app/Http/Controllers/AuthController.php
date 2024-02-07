<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class AuthController extends BaseController
{
    //register function called when user registers
    public function register(Request $request)
    {
        //validate incoming request
        $this->validate($request, [
            // 'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);

        try {
            $user = new \App\Models\User;
            // $user->name = $request->input('name');
            //name get from email the part before @
            $user->name = explode('@', $request->input('email'))[0];
            $user->email = $request->input('email');
            $plainPassword = $request->input('password');
            $user->password = app('hash')->make($plainPassword);
            $user->api_token = Str::random(60);
            $user->role = $request->input('role')??'user';
            $user->first_name = $request->input('firstName');
            $user->last_name = $request->input('lastName');
            $user->age = $request->input('age');
            $user->bio = $request->input('bio');
            $user->language = $request->input('language');
            $user->save();

            //return successful response
            return response()->json(['user' => $user, 'message' => 'CREATED'], 202);
        } catch (\Exception $e) {
            //return error message
            return response()->json(['message' => 'User Registration Failed!'], 409);
        }
    }
    // login function called when user logs in
    public function login(Request $request)
    {
        //validate incoming request
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // $email = $request->input('email');
        // $password = $request->input('password');

        // $user = \App\Models\User::where('email', $email)->first();

        // if (!$user) {
        //     //return error message
        //     return response()->json(['message' => 'Login Failed'], 401);
        // }
        // $credentials = $request->only(['email', 'password']);
        // try {
        //   if ($token = Auth::attempt($credentials)) {
        //     Auth::user()->login_time = \Carbon\Carbon::now();
        //     Auth::user()->login_method = "site";
        //     Auth::user()->update();

        //     return response()->json(['data'=>Auth::user()->toArray(), 'token'=>$token]);

        //   }
        // } catch (\Exception $e) {
        //   return response()->json(['message' => 'Login Failed'], 401);
        // }

        $user = \App\Models\User::where('email', $request->input('email'))->first();

        if ($user && app('hash')->check($request->input('password'), $user->password)) {
            // Password is correct
            // Generate token or log the user in manually
            return response()->json(['data'=>$user->toArray(), 'token'=>$user->api_token]);
        } else {
            // Authentication failed
            return response()->json(['message' => 'Login Failed'], 401);
        }



        //verify the password
        // if (app('hash')->check($password, $user->password)) {
        //     //generate token
        //     $user->api_token = Str::random(60);
        //     $user->save();
        //     //return successful response
        //     return response()->json(['user' => $user, 'message' => 'LOGGED IN'], 200);
        // } else {
        //     //return error message
        //     return response()->json(['message' => 'Login Failed'], 401);
        // }
    }

}
