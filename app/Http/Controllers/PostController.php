<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
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

        $post = new Post();

        $post->title = $request->title;
        $post->content = $request->content;
        $post->user_id = Auth::user()->id;

        $post->save();

        $user = User::find($post->user_id);
        $post_to_send = array_merge($user->toArray(), $post->toArray());
        return Response()->json(['etat' => true, 'post' => $post_to_send]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $req)
    {
        $post = Post::find($req->id);
        $post->title = $req->title;
        $post->content = $req->content;

        $post->save();
        return Response()->json(['etat' => true]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        return $post->delete();
    }

    public function getUsers()
    {
        $users = User::all();
        return $users;
    }

    public function getPosts()
    {
        $posts_to_send = collect();
        $posts = Auth::user()->posts;
        foreach ($posts as $post) {
            $user = User::find($post->user_id);
            $like = Like::where('post_id', $post->id)->get();
            $post_to_send = array_merge($user->toArray(), $post->toArray());
            if (!empty($like)) {
                $post_to_send = array_merge($like->toArray(), $post_to_send);
            }
            $posts_to_send->push($post_to_send);
        }
        return $posts_to_send;
    }

    public function getPost($id)
    {
        $post = Post::find($id);
        $user = User::find($post->user_id);
        $post_to_send = array_merge($user->toArray(), $post->toArray());

        $this->authorize('view', $post);
        return $post_to_send;
    }

    public function likePost(Request $request)
    {
        $like = new Like();

        $like->post_id = $request->post_id;
        $like->user_id = $request->user_id;

        $like->save();
        return Response()->json(['etat' => true]);
    }

    public function dislikePost($id)
    {
        $like = Like::find($id);
        $like->delete();
        return Response()->json(['etat' => true]);
    }
}
