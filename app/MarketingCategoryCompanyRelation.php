<?php

namespace App;

use App\Libraries\ActivateableTrait;
use Keyhunter\Administrator\Repository;

class MarketingCategoryCompanyRelation extends Repository
{
    use ActivateableTrait;

    /**
     * @var string
     */
    protected $table = 'm_cat_companies';

    /**
     * @var array
     */
    protected $fillable = [
        'company_id', 'm_cat_id', 'active'
    ];

    /**
     * @var bool
     */
    public $timestamps = false;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function category()
    {
        return $this->hasOne(MarketingCategory::class, 'id', 'm_cat_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function company()
    {
        return $this->hasOne(Company::class, 'id', 'company_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function m_cat_companies_projects()
    {
        return $this->hasMany(MarketingCategoryCompanyProject::class, 'm_cat_company_id', 'id');
    }
}