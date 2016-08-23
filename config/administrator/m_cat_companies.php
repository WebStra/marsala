<?php

use App\Company;
use App\MarketingCategory;
use Illuminate\Database\Eloquent\Builder;

return [
    'title'  => 'Marketing companies',
    'model'  => \App\MarketingCategoryCompanyRelation::class,

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

        'company_id' => [
            'title' => 'Company',
            'output' => function($row){
                return sprintf('Company: %s', $row->company->name);
            }
        ],

        'm_cat_id' => [
            'title' => 'Marketing category',
            'output' => function ($row){
                return sprintf('%s >> %s', $row->category->marketing->name, $row->category->name);
            }
        ],

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
        'company_id' => [
            'type' => 'select',
            'options' => function(){
                $items = [
                    '' => '-- Any --'
                ];

                $collection = (new Company)->active()->get();

                foreach ($collection as $item)
                {
                    $items[$item->id] = $item->name;
                }

                return $items;
            }
        ],

        'm_cat_id' => [
            'type' => 'select',
            'options' => function(){
                $items = [
                    '' => '-- Any --'
                ];

                $collection = (new MarketingCategory)->active()->get();

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

        'company_id' => [
            'label' => 'Company',
            'type' => 'select',
            'description' => 'Choose company witch you want attach for an a social category',
            'options' => function(){
                $items = [];

                $collection = (new Company)->active()->get();

                foreach ($collection as $item)
                {
                    $items[$item->id] = $item->name;
                }

                return $items;
            }
        ],

        'm_cat_id' => [
            'label' => 'Marketing category',
            'type' => 'select',
            'description' => 'Choose witch social marketing category you want to use',
            'options' => function(){
                $items = [];

                $collection = (new MarketingCategory)->active()->get();

                foreach ($collection as $item)
                {
                    $items[$item->id] = $item->name;
                }

                return $items;
            }
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