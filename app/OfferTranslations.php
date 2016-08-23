<?php

namespace App;

use Keyhunter\Administrator\Repository as Model;
use App\Libraries\ActivateableTrait;
use Keyhunter\Translatable\Translatable;

class OfferTranslations extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'offer_translations';

    protected $fillable = [
        'id', 'title', 'body'
    ];

    public $timestamps = false;
}