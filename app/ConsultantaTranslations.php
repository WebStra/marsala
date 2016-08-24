<?php

namespace App;

use Keyhunter\Administrator\Repository as Model;

class ConsultantaTranslations extends Model
{
    /**
     * @var string
     */
    protected $table = 'consultanta_translations';

    /**
     * @var bool
     */
    public $timestamps = false;

    /**
     * @var array
     */
    protected $fillable = [
        'id', 'consultanta_id', 'language_id', 'title'
    ];
}