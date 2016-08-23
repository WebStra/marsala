<?php

namespace App;

use App\Libraries\ActivateableTrait;
use Keyhunter\Administrator\Repository;

class Book extends Repository
{
    use ActivateableTrait;

    /**
     * @var array
     */
    protected $fillable = [
        'id', 'name', 'path', 'active'
    ];

    /**
     * @var bool
     */
    public $timestamps = false;
}