<?php

namespace App\Http\Controllers;

use App\Strategy;
use App\Social;
use App\WebDesign;

class LandingController extends Controller
{
    protected $strategy;

    protected $social;

    protected $webDesign;

    public function __construct(Strategy $strategy, Social $social, WebDesign $webdesign)
    {
        $this->strategy = $strategy;
        $this->social = $social;
        $this->webdesign = $webdesign;
    }

    /**
     * Home page.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('welcome', [
            'strategies' => $this->getPublicStrategies(),
            'social' => $this->getPublicSocials(),
            'webdesign' => $this->getPublicWebDesign()

                    ]);
    }

    public function getPublicStrategies()
    {
        return $this->strategy
                ->active()
                ->get();
    }

     public function getPublicSocials()
    {
        return $this->social
                ->active()
                ->get();
    }
     public function getPublicWebDesign()
    {
        return $this->webdesign
                ->active()
                ->get();
    }
}