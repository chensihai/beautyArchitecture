<?php
/** @var \Laravel\Lumen\Routing\Router $router */

// Global OPTIONS response to handle CORS preflight requests
$router->options('/{any:.*}', function () {
    return response('', 200)
        ->header('Access-Control-Allow-Origin', '*')
        ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
        ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
});

// Public routes
$router->group(['prefix' => 'api', 'middleware' => 'cors'], function () use ($router) {
    $router->post('register', 'AuthController@register');
    $router->post('login', 'AuthController@login');
    $router->post('form', 'FormController@store');
    $router->get('forms', 'FormController@index');
    $router->get('form/{id}', 'FormController@show');
});

// Protected routes
$router->group(['prefix' => 'api', 'middleware' => ['auth', 'cors']], function () use ($router) {
    // Define protected routes here
});

