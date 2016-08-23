<?php

namespace App;

use Keyhunter\Administrator\Repository as Model;

class StrategyTranslation extends Model implements Translatable
{
	protected $table = 'strategy_translations';

	public $timestamps = false;

	  protected $fillable = [
        'id', 'strategy_id', 'language_id', 'name', 'body'
    ];
}