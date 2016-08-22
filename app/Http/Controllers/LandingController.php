<?php

namespace App\Http\Controllers;

class LandingController extends Controller
{
    public function __construct()
    {

    }

    /**
     * Home page.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('welcome');
    }
}