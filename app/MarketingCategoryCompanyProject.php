<?php

namespace App;

use Keyhunter\Administrator\Repository;

class MarketingCategoryCompanyProject extends Repository
{
    /**
     * @var string
     */
    protected $table = 'm_cat_companies_projects';

    /**
     * @var array
     */
    protected $fillable = [
        'm_cat_company_id', 'project_id', 'active'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function project()
    {
        return $this->hasOne(Project::class, 'id', 'project_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function m_cat_companies()
    {
        return $this->belongsTo(MarketingCategoryCompanyRelation::class, 'm_cat_company_id', 'id');
    }
}