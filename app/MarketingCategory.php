<?php


namespace App;

use App\Libraries\ActivateableTrait;
use Keyhunter\Administrator\Repository;

class MarketingCategory extends Repository
{
    use ActivateableTrait;

    /**
     * @var string
     */
    protected $table = 'marketing_categories';

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
}