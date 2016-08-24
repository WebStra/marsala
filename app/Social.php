<?php

namespace App;

use Keyhunter\Administrator\Repository as Model;
use App\Libraries\ActivateableTrait;

class Social extends Model
{
	use ActivateableTrait;

    /**
     * @var string
     */
    protected $table = 'socials';

    /**
     * @var array
     */
    protected $fillable = [
        'id', 'link', 'name', 'icon', 'active'
    ];
}