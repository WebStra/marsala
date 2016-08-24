<?php

namespace App;

use Keyhunter\Administrator\Repository as Model;
use App\Libraries\ActivateableTrait;
use Keyhunter\Translatable\HasTranslations;
use Keyhunter\Translatable\Translatable;

class Offer extends Model implements Translatable
{
	use ActivateableTrait, HasTranslations;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'offers';

    protected $fillable = [
        'id', 'image', 'active'
    ];

    public $translationModel = OfferTranslations::class;

    public $translatedAttributes = ['title', 'body'];
}

