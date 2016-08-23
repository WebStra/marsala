<?php

namespace App;

use App\Libraries\ActivateableTrait;
use Keyhunter\Administrator\Repository;

class Company extends Repository
{
    use ActivateableTrait;

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