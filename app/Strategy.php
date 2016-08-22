<?php

namespace App;

use Keyhunter\Administrator\Repository as Model;
use Keyhunter\Translatable\HasTranslations;
use App\Libraries\Presenterable\Presenterable;
use App\Libraries\Presenterable\Presenters\StrategyPresenter;

class Strategy extends Model
{
	use HasTranslations, Presenterable;

	protected $table = 'strategies';
	public $translationModel = StrategyTranslation::class;
	public $presenter = StrategyPresenter::class;

    protected $fillable = [
        'id', 'icon', 'active'
    ];
    public $translatedAttributes = ['name', 'body'];
}