<?php

namespace App;

use App\Libraries\ActivateableTrait;
use Keyhunter\Administrator\Repository as Model;
use Keyhunter\Translatable\HasTranslations;
use Keyhunter\Translatable\Translatable;

class Consultanta extends Model implements Translatable
{
	use HasTranslations, ActivateableTrait;

    /**
     * @var string
     */
    protected $table = 'consultanta';

    /**
     * @var ConsultantaTranslation
     */
    public $translationModel = ConsultantaTranslations::class;

    /**
     * @var array
     */
    protected $fillable = [
        'id', 'icon', 'active'
    ];

    /**
     * @var array
     */
    public $translatedAttributes = ['title'];
}