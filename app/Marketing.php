<?php

namespace App;

use App\Libraries\ActivateableTrait;
use Keyhunter\Administrator\Repository;
use Keyhunter\Translatable\HasTranslations;
use Keyhunter\Translatable\Translatable;

class Marketing extends Repository implements Translatable
{
    use ActivateableTrait, HasTranslations;

    /**
     * @var array
     */
    protected $fillable = [
        'id', 'active'
    ];

    /**
     * @var MarketingTranslations
     */
    public $translationModel = MarketingTranslations::class;

    /**
     * @var array
     */
    public $translatedAttributes = ['name'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function categories()
    {
        return $this->hasMany(MarketingCategory::class);
    }
}