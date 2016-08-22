<?php

namespace App;

use Keyhunter\Administrator\Repository as Model;

class Slide extends Model
{
	protected $table = 'slide';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'active'
    ];
}
