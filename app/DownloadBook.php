<?php

namespace App;

use Keyhunter\Administrator\Repository as Model;
use App\Libraries\ActivateableTrait;

class DownloadBook extends Model
{
	use ActivateableTrait;

    /**
     * @var string
     */
    protected $table = 'download_book';

    /**
     * @var array
     */
    protected $fillable = [
        'id', 'name', 'email' 
    ];
}