<?php

namespace App;

use Keyhunter\Administrator\Repository as Model;

class OfferTranslations extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'offer_translations';

    protected $fillable = [
        'id', 'offer_id', 'language_id', 'title', 'body'
    ];

    public $timestamps = false;
}