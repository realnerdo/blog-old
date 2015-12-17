<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Article;
use App\Tag;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateArticleRequest;

class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles = Article::latest()->published()->get();

        return view('admin.content', compact('articles'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        $tags = Tag::lists('name', 'id');
        return view('admin.editor', compact('tags'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Requests\CreateArticleRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateArticleRequest $request)
    {

        $tags = $request->input('tags');
        $currentTags = array_filter($tags, 'is_numeric');
        $newTags = array_diff($tags, $currentTags);

        foreach ($newTags as $newTag):
            if ($tag = Tag::create(['name' => $newTag]))
                $currentTags[] = $tag->id;
        endforeach;

        // $article = Auth::user()->articles()->create($request->all());

        $article = Article::create($request->all());
        $article->tags()->attach($currentTags);
        // $article->tags()->sync($currentTags);

        if($request->hasFile('cover')):
            $this->uploadFile($request->file('cover'));
        endif;

        return redirect('admin/content');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return view('admin.edit');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $article = Article::findOrFail($id);
        return view('admin.edit', compact('article'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Upload File with Request
     *
     * @param  \Illuminate\Http\Request::file() $file
     * @return string  $path
     */
    private function uploadFile($file)
    {
        $fileName = time() . '_' . $file->getClientOriginalName();
        $destinationPath = 'uploads';
        $file->move($destinationPath, $fileName);

        $path = $destinationPath . '/' . $fileName;

        return $path;
    }
}
