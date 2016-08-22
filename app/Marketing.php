<?php

namespace App;

use App\Libraries\ActivateableTrait;
use Keyhunter\Administrator\Repository;
use Keyhunter\Translatable\HasTranslations;

class Marketing extends Repository
{
    use ActivateableTrait, HasTranslations;

    /**
     * @var array
     */
    protected $fillable = [
        'id', 'active'
    ];

    /**
     * @var MarketingTranslations
     */
    public $translationModel = MarketingTranslations::class;

    /**
     * @var array
     */
    public $translatedAttributes = ['name'];
}