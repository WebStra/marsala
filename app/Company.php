<?php

namespace App;

use Keyhunter\Administrator\Repository;

class Company extends Repository
{
    /**
     * @var string
     */
    protected $table = 'companies';

    /**
     * @var array
     */
    protected $fillable = [
        'id', 'name', 'logo', 'active'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function projects()
    {
        return $this->hasMany(Project::class, 'company_id', 'id');
    }
}