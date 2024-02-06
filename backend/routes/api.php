<?php
/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
|
| Routes that do not require authentication.
|
*/
// use App\Http\Controllers\AuthController;
// use App\Http\Controllers\UserController;


$router->group(['prefix' => 'api'], function () use ($router) {
    // Matches "/api/register"
    $router->post('register', 'AuthController@register');
    // Matches "/api/login"
    $router->post('login', 'AuthController@login');
});

/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
|
| Routes that require authentication.
|
*/

$router->group(['prefix' => 'api', 'middleware' => 'auth'], function () use ($router) {
    // Define your authenticated routes here
    // Example: Matches "/api/users/1"
    // $router->get('users/{id}', 'UserController@show');
});
