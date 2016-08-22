<?php

namespace App;

use Keyhunter\Administrator\Repository as Model;

class Subscriber extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'email', 'active'
    ];
}
