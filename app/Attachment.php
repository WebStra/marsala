<?php

namespace App;

use Keyhunter\Administrator\Repository;

class Attachment extends Repository
{
    /**
     * @var string
     */
    protected $table = 'attachments';

    /**
     * @var array
     */
    protected $fillable = [
        'attachmentable_id', 'attachmentable_type', 'path', 'original', 'type'
    ];

    /**
     * Adding file scope.
     *
     * @param $query
     * @return mixed
     */
    public function scopeFile($query)
    {
        return $query->whereType('file');
    }

    /**
     * Adding image scope.
     *
     * @param $query
     * @return mixed
     */
    public function scopeImage($query)
    {
        return $query->whereType('image');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function attachmentable()
    {
        return $this->morphTo();
    }
}