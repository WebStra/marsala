<?php


namespace App;

use App\Libraries\ActivateableTrait;
use App\Libraries\Presenterable\Presenterable;
use App\Libraries\Presenterable\Presenters\MarketingCategoryPresenter;
use Keyhunter\Administrator\Repository;

class MarketingCategory extends Repository
{
    use ActivateableTrait, Presenterable;

    /**
     * @var string
     */
    protected $table = 'marketing_categories';

    /**
     * @var MarketingCategoryPresenter
     */
    public $presenter = MarketingCategoryPresenter::class;

    /**
     * @var array
     */
    protected $fillable = [
        'id', 'name', 'marketing_id', 'icon', 'active'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function marketing()
    {
        return $this->belongsTo(Marketing::class, 'marketing_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function m_cat_companies()
    {
        return $this->hasMany(MarketingCategoryCompanyRelation::class, 'm_cat_id', 'id');
    }
}