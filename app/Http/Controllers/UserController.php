<?php

namespace App\Http\Controllers;

use App\Models\Friend;
use App\Models\User;
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
        //needs fixing
        $suggestedUsers = User::where('id', '!=', Auth::user()->id)->get();
        return $suggestedUsers;
    }

    public function getUser($id)
    {
        $user = User::find($id);
        $refUser = $user->toArray();
        $friends = $this->getFriends();

        foreach ($friends as $friend) {
            if ($friend->id == $id) {
                $isfriend = true;
                break;
            }
            $isfriend = false;
        }

        $user = array_merge($refUser, ['is_friend' => $isfriend]);

        return $user;
    }

    public function getUsers()
    {
        $users = User::all();
        return $users;
    }

    public function addFriend($idFriend)
    {
        //Add the friend to the current user 
        $friendship1 = new Friend();
        $friendship1->user_id = Auth::user()->id;
        $friendship1->friend_id = $idFriend;
        $friendship1->save();

        //Add the current user to the friend
        $friendship2 = new Friend();
        $friendship2->user_id = $idFriend;
        $friendship2->friend_id = Auth::user()->id;
        $friendship2->save();

        return Response()->json(['etat' => true]);
    }

    public function removeFriend($idFriend)
    {
        //Find the friend to the current user 
        $friendship1 = Friend::where([['user_id', "=", Auth::user()->id], ['friend_id', '=', $idFriend]]);
        $friendship1->delete();

        //Find the current user to the friend
        $friendship2 = Friend::where([['user_id', "=", $idFriend], ['friend_id', '=', Auth::user()->id]]);
        $friendship2->delete();

        return Response()->json(['etat' => true]);
    }



    //returns a list of friends of the current user 
    public function getFriends()
    {
        $friends = User::select('users.id', 'name', 'photo')
            ->leftJoin('friends', 'friends.friend_id', '=', 'users.id')
            ->where('friends.user_id', '=', Auth::user()->id)->get();

        return $friends;
    }

    public function getAllFriends() //temporary function
    {
        return Friend::all();
    }
}
