<?php

use App\Http\Controllers\PostController;
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

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


#Posts
Route::get('/users', [PostController::class, 'getUsers']);
Route::get('/myposts', [PostController::class, 'getPosts']);
Route::get('/post/{id}', [PostController::class, 'getPost']);

Route::put('/post/{id}', [PostController::class, 'update']);
Route::post('/addpost', [PostController::class, 'store']);
Route::delete('/post/{id}', [PostController::class, 'destroy']);

Route::post('/likepost', [PostController::class, 'likePost']);
Route::delete('/dislikepost/{id}', [PostController::class, 'dislikePost']);



Route::get('logout', function () {
    Auth::logout();
    return redirect('/login');
});
