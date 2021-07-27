<?php

namespace App\Http\Controllers;

use App\Models\User;
use Facade\FlareClient\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }

    /**
     * Adds a friend
     * @param \Illuminate\Http\Request
     * @return \Illuminate\Http\Response
     */
    public function AddFriend(Request $req)
    {
        /*add idFriend to the current user
            and add id of current user to friend 
        */
        return Auth::user()->friends;
    }
    public function getFriends()
    {
        return Auth::user()->friends;
    }

    public function setPorfilePhoto(Request $req)
    {
        if ($req->hasFile('photo')) {
            $user = User::find(Auth::user()->id);
            $user->photo = $req->file('photo')->store('user_photo/' . Auth::user()->id);
            $user->save();
            return Response()->json(['etat' => true]);
        }
        return Response()->json(['etat' => false]);
    }

    public function getSuggestions()
    {
        $suggestedUsers = User::where('id', '!=', auth()->id())->get();
        return $suggestedUsers;
    }

    public function getUser($id)
    {
        $user = User::find($id);
        return $user;
    }
    public function getUsers()
    {
        $users = User::all();
        return $users;
    }
}
