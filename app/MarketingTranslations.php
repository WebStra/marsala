<?php

namespace App;

use App\Libraries\WithoutTimestamps;
use Illuminate\Database\Eloquent\Model;

class MarketingTranslations extends Model
{
    use WithoutTimestamps;

    /**
     * @var string
     */
    protected $table = 'marketing_translations';

    /**
     * @var array
     */
    protected $fillable = ['name'];
}