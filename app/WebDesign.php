<?php

namespace App;

use Keyhunter\Administrator\Repository as Model;
use App\Libraries\ActivateableTrait;

class WebDesign extends Model
{
	use ActivateableTrait;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'web_designs';

    protected $fillable = [
        'id', 'image', 'title', 'active'
    ];
}

