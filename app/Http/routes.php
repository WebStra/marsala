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

use App\Subscriber;

Route::bind('unsub_token', function($token) {
	return (new Subscriber)
        ->where('unsubscribe_token', $token)
        ->active()
        ->first();
});

Route::bind('static_page', function ($slug) {
    return (new \Keyhunter\Administrator\Model\Page)
        ->whereSlug($slug)
        ->first();
});

Route::get('/', [
    'as' => 'home',
    'uses' => 'LandingController@index'
]);

Route::get('page/{static_page}.html', [
    'as' => 'show_page',
    'uses' => 'PagesController@show'
]);

Route::post('subscribe', [ 
	'as' => 'subscribe', 
	'uses' => 'SubscribeController@subscribe'
]);

Route::get('unsubscribe/{unsub_token}', [ 
	'as' => 'unsubscribe', 
	'uses' => 'SubscribeController@unsubscribe'
]);

Route::post('downloadBookForm', [ 
	'as' => 'downloadBookForm', 
	'uses' => 'SubscribeController@downloadBookForm'
]);
