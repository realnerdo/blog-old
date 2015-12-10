<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('admin', function() {
    return view('admin.home');
});

Route::get('admin/content', function() {
    return view('admin.content');
});

Route::get('admin/editor', function() {
    return view('admin.editor');
});

Route::post('admin/test', function(){
    return Request::all('title');
});
