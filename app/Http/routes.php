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

Route::bind('unsub_token', function($token) {
	return (new Subscribe)->where('unsubscribe_token', $token)->first();
});

use App\Test;

Route::get('/', function () {
	// dd(Test::all());
    return view('welcome', ['test' => Test::first()]);
});

Route::post('subscribe', [ 
	'as' => 'subscribe', 
	'uses' => 'SubscribeController@subscribe'
	]);

Route::get('unsubscribe/{unsub_token}', [ 
	'as' => 'unsubscribe', 
	'uses' => 'SubscribeController@unsubscribe'
]);
