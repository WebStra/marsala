<?php

namespace App;

use Keyhunter\Administrator\Repository as Model;
use App\Libraries\ActivateableTrait;

class Social extends Model
{
	use ActivateableTrait;

	protected $table = 'socials';

    protected $fillable = [
        'id', 'link', 'name', 'icon', 'active'
    ];
}