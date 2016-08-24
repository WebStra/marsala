<?php

namespace App;

use Keyhunter\Administrator\Repository as Model;

class StrategyTranslation extends Model
{
    /**
     * @var string
     */
    protected $table = 'strategy_translations';

    /**
     * @var bool
     */
    public $timestamps = false;

    /**
     * @var array
     */
    protected $fillable = [
        'id', 'strategy_id', 'language_id', 'name', 'body'
    ];
}