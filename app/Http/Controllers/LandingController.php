<?php

namespace App\Http\Controllers;

use App\Marketing;
use App\Strategy;
use App\Social;
use App\WebDesign;
use App\Offer;
use App\Consultanta;
use Keyhunter\Administrator\Model\Page;

class LandingController extends Controller
{
    /**
     * @var Strategy
     */
    protected $strategy;

    /**
     * @var Social
     */
    protected $social;

    /**
     * @var WebDesign
     */
    protected $webdesign;

    /**
     * @var Marketing
     */
    protected $marketings;

    /**
     * @var Offer
     */
    protected $offer;

    /**
     * @var Offer
     */
    protected $consultanta;

    /**
     * @var Page;
     */
    protected $page;

    /**
     * LandingController constructor.
     * @param Strategy $strategy
     * @param Social $social
     * @param WebDesign $webdesign
     * @param Marketing $marketing
     * @param Offer $offer
     * @param Consultanta $consultanta
     * @param Page $page
     */
    public function __construct(
        Strategy $strategy,
        Social $social,
        WebDesign $webdesign,
        Marketing $marketing,
        Offer $offer,
        Consultanta $consultanta,
        Page $page
    )
    {
        $this->strategy = $strategy;
        $this->social = $social;
        $this->webdesign = $webdesign;
        $this->marketings = $marketing;
        $this->offer = $offer;
        $this->consultanta = $consultanta;
        $this->page = $page;
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
            'webdesign' => $this->getPublicWebDesign(),
            'marketings' => $this->getPublicMarketings(),
            'offer' => $this->getPublicOffer(),
            'consultanta' => $this->getPublicConsultanta(),
            'pages' => $this->getPublicPages()
        ]);
    }

    /**
     * @return mixed
     */
    public function getPublicStrategies()
    {
        return $this->strategy
            ->active()
            ->get();
    }

    /**
     * @return mixed
     */
    public function getPublicSocials()
    {
        return $this->social
            ->active()
            ->get();
    }

    /**
     * @return mixed
     */
    public function getPublicWebDesign()
    {
        return $this->webdesign
            ->active()
            ->get();
    }

    /**
     * @return mixed
     */
    public function getPublicMarketings()
    {
        return $this->marketings
            ->active()
            ->get();
    }

    /**
     * @return mixed
     */
    public function getPublicOffer()
    {
        return $this->offer
            ->active()
            ->get();
    }

    /**
     * @return mixed
     */
    public function getPublicConsultanta()
    {
        return $this->consultanta
            ->active()
            ->get();
    }

    /**
     * @return mixed
     */
    public function getPublicPages()
    {
        return $this->page
            ->select('*')
            ->whereActive(1)
            ->get();
    }
}