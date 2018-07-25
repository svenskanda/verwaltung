<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    //http_response_code(200);
    //return $router->app->version();
});

$router->get('/about', 'WebContentController@about');

$router->get('/archiv', 'WebContentController@archiv');

$router->get('/news', 'WebContentController@news');

$router->get('/awards', 'WebContentController@awards');

$router->get('/results', 'WebContentController@results');

// Doesn't work
$router->post('/loginUser', 'UserController@loginUser');
