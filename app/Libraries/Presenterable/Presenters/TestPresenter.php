<?php

namespace App\Libraries\Presenterable\Presenters;

class TestPresenter extends Presenter
{
    public function renderId()
    {
        return '<span style="color: blue"><b>Id of this model is: \''. $this->model->id . '\'</b></span>';
    }
}