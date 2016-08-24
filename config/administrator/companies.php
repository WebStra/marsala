<?php

use Carbon\Carbon;
use Illuminate\Auth\Guard;
use Illuminate\Database\Eloquent\Builder;
use Keyhunter\Administrator\Model\Role;
use Keyhunter\Administrator\Schema\Factory AS Schema;
use Keyhunter\Administrator\Schema\SchemaInterface;

return [
    'title'  => 'Companies',
    'model'  => \App\Company::class,

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

        'logo' => [
            'output' => function($row){
                return output_image($row, 'logo', ['width' => 150]);
            }
        ],

        'name',

        'active' => [
            'visible' => function() {},
            'output' => function($row) {
                return output_boolean($row);
            }
        ],

        'dates' => [
            'elements' => [
                'created_at',
                'updated_at'
            ]
        ]
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
        'name' => ['type' => 'text'],

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

        'name' => form_text(),

        'logo' => [
            'type' => 'image',
            'location' => 'upload/companies/'
        ],

        'active' => [
            'title' => 'Active',
            'type' => 'select',
            'options' => [
                '1' =>'Keep enabled',
                '0' => 'Keep disabled'
            ]
        ]
    ]
];