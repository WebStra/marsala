<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Keyhunter\Translatable\Translatable;

class MarketingTranslations extends Model
{
    /**
     * @var string
     */
    protected $table = 'marketing_translations';

    /**
     * @var array
     */
//    protected $fi = ['name'];
    protected $fillable = ['name'];

    public $timestamps = false;
}