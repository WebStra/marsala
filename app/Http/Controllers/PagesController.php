<?php

namespace App\Http\Controllers;


use Keyhunter\Administrator\Model\Page;

class PagesController extends Controller
{
    /**
     * Show page method.
     *
     * @param $page
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show(Page $page)
    {
        return view('pages.show', compact('page'));
    }
}