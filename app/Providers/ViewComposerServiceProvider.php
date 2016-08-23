<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ViewComposerServiceProvider extends ServiceProvider
{
    public function boot()
    {
        view()->composer('*', function($view){
            return $view->with('meta', (new \App\Meta));
        });
    }

    public function register()
    {
        // TODO: Implement register() method.
    }
}