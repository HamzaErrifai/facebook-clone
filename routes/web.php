<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ReactController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


#Posts
Route::get('/api/users', [PostController::class, 'getUsers']);
Route::get('/api/myposts', [PostController::class, 'getPosts']);
Route::get('/api/post/{id}', [PostController::class, 'getPost']);

Route::put('/api/post/{id}', [PostController::class, 'update']);
Route::post('/api/addpost', [PostController::class, 'store']);
Route::delete('/api/post/{id}', [PostController::class, 'destroy']);

Route::post('/api/likepost', [PostController::class, 'likePost']);
Route::delete('/api/dislikepost/{id}', [PostController::class, 'dislikePost']);

Route::get('/{path?}', function () {
    return view('welcome');
})->where('path', '^((?!api).)*$');




Route::get('/api/logout', function () {
    Auth::logout();
    return ['logged_off' => true];
});


Route::get('/api/isconnected', function () {
    if (Auth::user())
        return ['etat' => true];
    return ['etat' => false];
});
