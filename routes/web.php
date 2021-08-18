<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
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

Auth::routes();


#users
Route::get('/api/user/{id}', [UserController::class, 'getUser']);
Route::post('/api/user/{id}/photo', [UserController::class, 'setPorfilePhoto']);
Route::get('/api/users', [UserController::class, 'getUsers']);
Route::get('/api/suggestions', [UserController::class, 'getSuggestions']);

#friends
Route::get('/api/friends', [UserController::class, 'getFriends']);
Route::get('/api/allfriendships', [UserController::class, 'getAllFriends']);
Route::post('/api/addfriend/{idFriend}', [UserController::class, 'addFriend']);
Route::delete('/api/removefriend/{idFriend}', [UserController::class, 'removeFriend']);

#posts
Route::get('/api/posts', [PostController::class, 'getPosts']);
Route::get('/api/postsof/{id}', [PostController::class, 'getPostsOf']);
Route::get('/api/myposts', [PostController::class, 'getMyPosts']);
Route::get('/api/post/{id}', [PostController::class, 'getPost']);
Route::get('/api/post/{id}/comments', [PostController::class, 'getPostComments']);
Route::put('/api/post/{id}', [PostController::class, 'update']);
Route::post('/api/addpost', [PostController::class, 'store']);
Route::delete('/api/post/{id}', [PostController::class, 'destroy']);


#likes
Route::post('/api/likepost', [PostController::class, 'likePost']);
Route::delete('/api/dislikepost/{id}', [PostController::class, 'dislikePost']);

#react routes
Route::get('/{path?}', function () {
    return view('welcome');
})->where('path', '^((?!api).)*$');

#log out
Route::get('/api/logout', function () {
    Auth::logout();
    return ['logged_off' => true];
});

#check if user authenticated
Route::get('/api/isconnected', function () {
    if (Auth::user())
        return ['etat' => true];
    return ['etat' => false];
});
