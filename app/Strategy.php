<?php

namespace App;

use App\Libraries\ActivateableTrait;
use Keyhunter\Administrator\Repository as Model;
use Keyhunter\Translatable\HasTranslations;
use App\Libraries\Presenterable\Presenterable;
use App\Libraries\Presenterable\Presenters\StrategyPresenter;
use Keyhunter\Translatable\Translatable;

class Strategy extends Model implements Translatable
{
	use HasTranslations, Presenterable, ActivateableTrait;

    /**
     * @var string
     */
    protected $table = 'strategies';

    /**
     * @var StrategyTranslation
     */
    public $translationModel = StrategyTranslation::class;

    /**
     * @var StrategyPresenter
     */
    public $presenter = StrategyPresenter::class;

    /**
     * @var array
     */
    protected $fillable = [
        'id', 'icon', 'active'
    ];

    /**
     * @var array
     */
    public $translatedAttributes = ['name', 'body'];
}