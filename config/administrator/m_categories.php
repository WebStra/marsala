<?php

use App\Marketing;
use Carbon\Carbon;
use Illuminate\Auth\Guard;
use Illuminate\Database\Eloquent\Builder;
use Keyhunter\Administrator\Model\Role;
use Keyhunter\Administrator\Schema\Factory AS Schema;
use Keyhunter\Administrator\Schema\SchemaInterface;

return [
    'title'  => 'Categories',
    'model'  => \App\MarketingCategory::class,

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

        'marketing_id' => [
            'output' => function($row){
                return sprintf('Belongs to: %s', $row->marketing->name);
            }
        ],

        'name',

        'icon' => [
            'output' => function($row) {
                return output_image($row, 'icon', ['style' => 'border: 1px dashed purple', 'width' => 25]);
            }
        ],

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
        'marketing_id' => [
            'type' => 'select',
            'options' => function(){
                $items = [
                    '' => '-- Any --'
                ];

                $collection = (new Marketing)->active()->get();

                foreach ($collection as $item)
                {
                    $items[$item->id] = $item->name;
                }

                return $items;
            }
        ],

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

        'marketing_id' => [
            'type' => 'select',
            'options' => function(){
                $items = [];

                $collection = (new Marketing)->active()->get();

                foreach ($collection as $item)
                {
                    $items[$item->id] = $item->name;
                }

                return $items;
            }
        ],

        'name' => form_text(),

        'icon' => [
            'type' => 'image',
            'location' => 'upload/m_categories'
        ],

        'active' => [
            'title' => 'Active',
            'type' => 'select',
            'options' => [
                1 => 'Keep enabled',
                0 => 'Keep disabled'
            ]
        ]
    ]
];