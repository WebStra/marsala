<?php

use Illuminate\Database\Eloquent\Builder;

return [
    'title'  => 'Books',
    'model'  => \App\Book::class,

    /*
    |-------------------------------------------------------
    | Columns/Groups
    |-------------------------------------------------------
    |
    | Describe here full list of columns that should be presented
    | on main listing page
    |
    */
    'columns' => [
        'id',

        'path',

        'name',

        'active' => [
            'visible' => function() {},
            'output' => function($row) {
                return output_boolean($row);
            }
        ],

    ],

    /*
    |-------------------------------------------------------
    | Actions available to do, including global
    |-------------------------------------------------------
    |
    | Global actions
    |
    */
    'actions' => [],

    /*
    |-------------------------------------------------------
    | Eloquent With Section
    |-------------------------------------------------------
    |
    | Eloquent lazy data loading, just list relations that should be preloaded
    |
    */
    'with' => [],

    /*
    |-------------------------------------------------------
    | QueryBuilder
    |-------------------------------------------------------
    |
    | Extend the main scaffold index query
    |
    */
    'query' => function(Builder $query)
    {
        return $query;
    },

    /*
    |-------------------------------------------------------
    | Global filter
    |-------------------------------------------------------
    */
    'filters' => [
        'active' => [
            'type' => 'select',
            'options' => [
                '' => '-- Any --',
                0 => 'No',
                1 => 'Yes'
            ]
        ],

        'created_at' => [
            'type' => 'date'
        ]
    ],

    /*
    |-------------------------------------------------------
    | Editable area
    |-------------------------------------------------------
    |
    | Describe here all fields that should be editable
    |
    */
    'edit_fields' => [
        'id'       => ['type' => 'key'],

        'path' => [
            'type' => 'file',
            'location' => 'uploads/books/'
        ],

        'name' => form_text(),

        'active' => [
            'title' => 'Active',
            'type' => 'select',
            'options' => [
                1 => 'Keep enabled',
                0 => 'Keep disabled',
            ]
        ]
    ]
];