<?php

namespace App\Http\Controllers;

use App\Subscribe;

class SubscribeController extends Controller
{
    protected $subscribe;

    public function __construct(Subscribe $subscribe)
    {
        $this->subscribe = $subscribe;
    }

    public function subscribe(Request $request) 
    {
        $subscribe = $this->subscribe->firstOrCreate(['email' => $request->get('email')]);
        return;
        if(! $this->checkSubscriber($request->get('email')))
        {
            $subscribe = $this->subscribe->create([
                'email' => $request->get('email'),
                'unsubscribe_token' => str_random(30)
            ]);

            return 'you have subscribed';
        }
    }

    public function checkSubscriber($email)
    {
        return (bool) $this->subscribe
                ->whereEmail($email)
                ->active()
                ->first();
    }

    public function unsubscribe($token)
    {
        $token->active = (int) false;
        $token->save();
        
        return redirect()->route('home')->withMessage('unsub..');
    }
}