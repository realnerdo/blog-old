<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'title',
        'body',
        'published_at'
    ];

    protected $dates = ['published_at'];

    /**
     * Scope for published articles
     * @param  $query
     */
    public function scopePublished($query)
    {
        $query->where('published_at', '<=', Carbon::now());
    }

    /**
     * Scope for unpublished articles
     * @param  $query
     */
    public function scopeUnpublished($query)
    {
        $query->where('published_at', '>', Carbon::now());
    }

    /**
     * Mutator for published_at attribute
     * @param string $date
     */
    public function setPublishedAtAttribute($date)
    {
        $this->published_at = Carbon::parse($date);
    }

    /**
     * Article is owned by a user
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * Get the tags associated to the given article
     *
     * @return [type] [description]
     */
    public function tags()
    {
        return $this->belongsToMany('App\Tag');
    }
}
