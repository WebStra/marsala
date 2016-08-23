<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subscriber;

class SubscribeController extends Controller
{
    protected $subscribe;

    public function __construct(Subscriber $subscribe)
    {
        $this->subscribe = $subscribe;
    }

    public function subscribe(Request $request) 
    {
        $subscribe = $this->subscribe->firstOrCreate(['email' => $request->get('email')]);
        return redirect()->back();
        if(! $this->checkSubscriber($request->get('email')))
        {
            $subscribe = $this->subscribe->create([
                'email' => $request->get('email'),
                'unsubscribe_token' => str_random(30)
            ]);

            return redirect()->back();
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