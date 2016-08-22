<?php

namespace App;

use Keyhunter\Administrator\Repository as Model;
use App\Libraries\Presenterable\Presenters\TestPresenter;
use App\Libraries\Presenterable\Presenterable;

class Test extends Model
{
	use Presenterable;
	
	public $presenter = TestPresenter::class;

	protected $table = 'tests';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'body', 'active'
    ];
}
